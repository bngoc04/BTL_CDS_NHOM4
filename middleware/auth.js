const jwt = require('jsonwebtoken');
const { executeQuery } = require('../config/database');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Không tìm thấy token xác thực'
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret_key_here');
        
        // Get user from database
        const sql = 'SELECT id, username, email, full_name, role, is_active FROM users WHERE id = ? AND is_active = 1';
        const result = await executeQuery(sql, [decoded.userId]);
        
        if (!result.success || result.data.length === 0) {
            return res.status(401).json({
                success: false,
                message: 'Token không hợp lệ'
            });
        }

        req.user = result.data[0];
        next();
    } catch (error) {
        console.error('Auth middleware error:', error);
        res.status(401).json({
            success: false,
            message: 'Token không hợp lệ'
        });
    }
};

module.exports = auth;
