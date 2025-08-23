const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { executeQuery } = require('../config/database');

class UserController {
    // User registration
    static async register(req, res) {
        try {
            const { username, email, password, fullName, phone, address } = req.body;

            // Check if user already exists
            const checkSql = 'SELECT id FROM users WHERE email = ? OR username = ?';
            const checkResult = await executeQuery(checkSql, [email, username]);
            
            if (checkResult.success && checkResult.data.length > 0) {
                return res.status(400).json({
                    success: false,
                    message: 'Email hoặc username đã tồn tại'
                });
            }

            // Hash password
            const saltRounds = parseInt(process.env.BCRYPT_ROUNDS) || 12;
            const passwordHash = await bcrypt.hash(password, saltRounds);

            // Create user
            const insertSql = `
                INSERT INTO users (username, email, password_hash, full_name, phone, address, created_at)
                VALUES (?, ?, ?, ?, ?, ?, NOW())
            `;

            const result = await executeQuery(insertSql, [
                username, email, passwordHash, fullName, phone, address
            ]);

            if (!result.success) {
                throw new Error(result.error);
            }

            // Generate JWT token
            const token = jwt.sign(
                { userId: result.data.insertId },
                process.env.JWT_SECRET || 'your_jwt_secret_key_here',
                { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
            );

            res.status(201).json({
                success: true,
                data: {
                    userId: result.data.insertId,
                    username,
                    email,
                    fullName,
                    token
                },
                message: 'Đăng ký thành công'
            });
        } catch (error) {
            console.error('Error registering user:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi đăng ký',
                error: error.message
            });
        }
    }

    // User login
    static async login(req, res) {
        try {
            const { email, password } = req.body;

            // Get user by email
            const sql = 'SELECT * FROM users WHERE email = ? AND is_active = 1';
            const result = await executeQuery(sql, [email]);
            
            if (!result.success || result.data.length === 0) {
                return res.status(401).json({
                    success: false,
                    message: 'Email hoặc mật khẩu không đúng'
                });
            }

            const user = result.data[0];

            // Check password
            const isPasswordValid = await bcrypt.compare(password, user.password_hash);
            
            if (!isPasswordValid) {
                return res.status(401).json({
                    success: false,
                    message: 'Email hoặc mật khẩu không đúng'
                });
            }

            // Generate JWT token
            const token = jwt.sign(
                { userId: user.id },
                process.env.JWT_SECRET || 'your_jwt_secret_key_here',
                { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
            );

            res.json({
                success: true,
                data: {
                    userId: user.id,
                    username: user.username,
                    email: user.email,
                    fullName: user.full_name,
                    role: user.role,
                    token
                },
                message: 'Đăng nhập thành công'
            });
        } catch (error) {
            console.error('Error logging in:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi đăng nhập',
                error: error.message
            });
        }
    }

    // Get user profile
    static async getProfile(req, res) {
        try {
            const userId = req.user.id;
            
            const sql = 'SELECT id, username, email, full_name, phone, address, role, avatar_url, created_at FROM users WHERE id = ?';
            const result = await executeQuery(sql, [userId]);
            
            if (!result.success || result.data.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'Không tìm thấy người dùng'
                });
            }

            res.json({
                success: true,
                data: result.data[0],
                message: 'Lấy thông tin profile thành công'
            });
        } catch (error) {
            console.error('Error getting profile:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi lấy thông tin profile',
                error: error.message
            });
        }
    }

    // Update user profile
    static async updateProfile(req, res) {
        try {
            const userId = req.user.id;
            const { fullName, phone, address } = req.body;

            const sql = 'UPDATE users SET full_name = ?, phone = ?, address = ?, updated_at = NOW() WHERE id = ?';
            const result = await executeQuery(sql, [fullName, phone, address, userId]);
            
            if (!result.success) {
                throw new Error(result.error);
            }

            res.json({
                success: true,
                message: 'Cập nhật profile thành công'
            });
        } catch (error) {
            console.error('Error updating profile:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi cập nhật profile',
                error: error.message
            });
        }
    }

    // Change password
    static async changePassword(req, res) {
        try {
            const userId = req.user.id;
            const { currentPassword, newPassword } = req.body;

            // Get current password hash
            const getSql = 'SELECT password_hash FROM users WHERE id = ?';
            const getResult = await executeQuery(getSql, [userId]);
            
            if (!getResult.success || getResult.data.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'Không tìm thấy người dùng'
                });
            }

            // Verify current password
            const isCurrentPasswordValid = await bcrypt.compare(currentPassword, getResult.data[0].password_hash);
            
            if (!isCurrentPasswordValid) {
                return res.status(400).json({
                    success: false,
                    message: 'Mật khẩu hiện tại không đúng'
                });
            }

            // Hash new password
            const saltRounds = parseInt(process.env.BCRYPT_ROUNDS) || 12;
            const newPasswordHash = await bcrypt.hash(newPassword, saltRounds);

            // Update password
            const updateSql = 'UPDATE users SET password_hash = ?, updated_at = NOW() WHERE id = ?';
            const result = await executeQuery(updateSql, [newPasswordHash, userId]);
            
            if (!result.success) {
                throw new Error(result.error);
            }

            res.json({
                success: true,
                message: 'Đổi mật khẩu thành công'
            });
        } catch (error) {
            console.error('Error changing password:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi đổi mật khẩu',
                error: error.message
            });
        }
    }
}

module.exports = UserController;
