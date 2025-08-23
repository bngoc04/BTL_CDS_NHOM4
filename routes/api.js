const express = require('express');
const router = express.Router();

// Import controllers
const ComboController = require('../controllers/comboController');
const BookingController = require('../controllers/bookingController');
const UserController = require('../controllers/userController');
const ContactController = require('../controllers/contactController');

// Import middleware
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');

// Import validation schemas
const { comboSearchSchema, bookingSchema, contactSchema } = require('../validations/schemas');

// ==================== COMBO ROUTES ====================

// Get all combos with filters and pagination
router.get('/combos', ComboController.getAllCombos);

// Get combo by ID
router.get('/combos/:id', ComboController.getComboById);

// Get combo by slug
router.get('/combos/slug/:slug', ComboController.getComboBySlug);

// Search combos
router.get('/combos/search', validate(comboSearchSchema), ComboController.searchCombos);

// Get featured combos
router.get('/combos/featured', ComboController.getFeaturedCombos);

// Get combos by destination
router.get('/combos/destination/:destination', ComboController.getCombosByDestination);

// Get combo recommendations
router.get('/combos/recommendations', ComboController.getRecommendations);

// Update combo availability (admin only)
router.patch('/combos/:id/availability', auth, ComboController.updateAvailability);

// ==================== DESTINATION ROUTES ====================

// Get popular destinations
router.get('/destinations/popular', ComboController.getPopularDestinations);

// Get all destinations
router.get('/destinations', async (req, res) => {
    try {
        const { executeQuery } = require('../config/database');
        const sql = 'SELECT * FROM destinations WHERE is_active = 1 ORDER BY name ASC';
        const result = await executeQuery(sql);
        
        if (!result.success) {
            throw new Error(result.error);
        }

        res.json({
            success: true,
            data: result.data,
            message: 'Lấy danh sách điểm đến thành công'
        });
    } catch (error) {
        console.error('Error getting destinations:', error);
        res.status(500).json({
            success: false,
            message: 'Lỗi server khi lấy điểm đến',
            error: error.message
        });
    }
});

// ==================== CATEGORY ROUTES ====================

// Get all categories
router.get('/categories', ComboController.getCategories);

// ==================== FILTER ROUTES ====================

// Get price ranges for filtering
router.get('/filters/price-ranges', ComboController.getPriceRanges);

// Get duration options
router.get('/filters/durations', ComboController.getDurationOptions);

// ==================== BOOKING ROUTES ====================

// Create new booking
router.post('/bookings', validate(bookingSchema), BookingController.createBooking);

// Get booking by code
router.get('/bookings/:code', BookingController.getBookingByCode);

// Get user bookings (authenticated)
router.get('/user/bookings', auth, BookingController.getUserBookings);

// Cancel booking (authenticated)
router.patch('/bookings/:id/cancel', auth, BookingController.cancelBooking);

// ==================== USER ROUTES ====================

// User registration
router.post('/auth/register', UserController.register);

// User login
router.post('/auth/login', UserController.login);

// Get user profile (authenticated)
router.get('/user/profile', auth, UserController.getProfile);

// Update user profile (authenticated)
router.put('/user/profile', auth, UserController.updateProfile);

// Change password (authenticated)
router.put('/user/password', auth, UserController.changePassword);

// ==================== REVIEW ROUTES ====================

// Get reviews for a combo
router.get('/combos/:comboId/reviews', async (req, res) => {
    try {
        const { comboId } = req.params;
        const { page = 1, limit = 10 } = req.query;
        
        const { executeQuery } = require('../config/database');
        const offset = (page - 1) * limit;
        
        const sql = `
            SELECT r.*, u.full_name, u.avatar_url
            FROM reviews r
            LEFT JOIN users u ON r.user_id = u.id
            WHERE r.combo_id = ? AND r.is_approved = 1
            ORDER BY r.created_at DESC
            LIMIT ? OFFSET ?
        `;
        
        const result = await executeQuery(sql, [comboId, parseInt(limit), offset]);
        
        if (!result.success) {
            throw new Error(result.error);
        }

        // Get total count
        const countSql = `
            SELECT COUNT(*) as total
            FROM reviews r
            WHERE r.combo_id = ? AND r.is_approved = 1
        `;
        
        const countResult = await executeQuery(countSql, [comboId]);
        const total = countResult.success ? countResult.data[0].total : 0;

        res.json({
            success: true,
            data: result.data,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total,
                totalPages: Math.ceil(total / limit)
            },
            message: 'Lấy đánh giá thành công'
        });
    } catch (error) {
        console.error('Error getting reviews:', error);
        res.status(500).json({
            success: false,
            message: 'Lỗi server khi lấy đánh giá',
            error: error.message
        });
    }
});

// Create review (authenticated)
router.post('/combos/:comboId/reviews', auth, async (req, res) => {
    try {
        const { comboId } = req.params;
        const { rating, title, comment } = req.body;
        const userId = req.user.id;

        // Validate rating
        if (!rating || rating < 1 || rating > 5) {
            return res.status(400).json({
                success: false,
                message: 'Đánh giá phải từ 1-5 sao'
            });
        }

        const { executeQuery } = require('../config/database');
        
        // Check if user has already reviewed this combo
        const checkSql = 'SELECT id FROM reviews WHERE user_id = ? AND combo_id = ?';
        const checkResult = await executeQuery(checkSql, [userId, comboId]);
        
        if (checkResult.success && checkResult.data.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'Bạn đã đánh giá combo này rồi'
            });
        }

        // Create review
        const insertSql = `
            INSERT INTO reviews (user_id, combo_id, rating, title, comment, created_at)
            VALUES (?, ?, ?, ?, ?, NOW())
        `;
        
        const result = await executeQuery(insertSql, [userId, comboId, rating, title, comment]);
        
        if (!result.success) {
            throw new Error(result.error);
        }

        // Update combo rating
        const updateSql = `
            UPDATE combos 
            SET rating = (
                SELECT AVG(rating) 
                FROM reviews 
                WHERE combo_id = ? AND is_approved = 1
            ),
            review_count = (
                SELECT COUNT(*) 
                FROM reviews 
                WHERE combo_id = ? AND is_approved = 1
            )
            WHERE id = ?
        `;
        
        await executeQuery(updateSql, [comboId, comboId, comboId]);

        res.json({
            success: true,
            data: { reviewId: result.data.insertId },
            message: 'Đánh giá thành công'
        });
    } catch (error) {
        console.error('Error creating review:', error);
        res.status(500).json({
            success: false,
            message: 'Lỗi server khi tạo đánh giá',
            error: error.message
        });
    }
});

// ==================== CONTACT ROUTES ====================

// Submit contact form
router.post('/contact', validate(contactSchema), ContactController.submitContact);

// Get contact messages (admin only)
router.get('/admin/contacts', auth, ContactController.getContacts);

// Update contact status (admin only)
router.patch('/admin/contacts/:id', auth, ContactController.updateContactStatus);

// ==================== NEWSLETTER ROUTES ====================

// Subscribe to newsletter
router.post('/newsletter/subscribe', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email || !email.includes('@')) {
            return res.status(400).json({
                success: false,
                message: 'Email không hợp lệ'
            });
        }

        const { executeQuery } = require('../config/database');
        
        // Check if already subscribed
        const checkSql = 'SELECT id FROM newsletter_subscribers WHERE email = ?';
        const checkResult = await executeQuery(checkSql, [email]);
        
        if (checkResult.success && checkResult.data.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'Email đã được đăng ký rồi'
            });
        }

        // Subscribe
        const insertSql = 'INSERT INTO newsletter_subscribers (email) VALUES (?)';
        const result = await executeQuery(insertSql, [email]);
        
        if (!result.success) {
            throw new Error(result.error);
        }

        res.json({
            success: true,
            message: 'Đăng ký nhận tin tức thành công'
        });
    } catch (error) {
        console.error('Error subscribing to newsletter:', error);
        res.status(500).json({
            success: false,
            message: 'Lỗi server khi đăng ký nhận tin tức',
            error: error.message
        });
    }
});

// Unsubscribe from newsletter
router.post('/newsletter/unsubscribe', async (req, res) => {
    try {
        const { email } = req.body;

        const { executeQuery } = require('../config/database');
        const sql = 'UPDATE newsletter_subscribers SET is_active = 0 WHERE email = ?';
        const result = await executeQuery(sql, [email]);
        
        if (!result.success) {
            throw new Error(result.error);
        }

        res.json({
            success: true,
            message: 'Hủy đăng ký nhận tin tức thành công'
        });
    } catch (error) {
        console.error('Error unsubscribing from newsletter:', error);
        res.status(500).json({
            success: false,
            message: 'Lỗi server khi hủy đăng ký',
            error: error.message
        });
    }
});

// ==================== STATISTICS ROUTES ====================

// Get combo statistics
router.get('/stats/combos', ComboController.getComboStats);

// Get overall statistics (admin only)
router.get('/admin/stats', auth, async (req, res) => {
    try {
        const { executeQuery } = require('../config/database');
        
        // Get various statistics
        const statsSql = `
            SELECT 
                (SELECT COUNT(*) FROM combos WHERE is_active = 1) as total_combos,
                (SELECT COUNT(*) FROM bookings) as total_bookings,
                (SELECT COUNT(*) FROM users WHERE role = 'customer') as total_customers,
                (SELECT COUNT(*) FROM contact_messages WHERE status = 'new') as new_contacts,
                (SELECT SUM(final_price) FROM bookings WHERE status = 'paid') as total_revenue
        `;
        
        const result = await executeQuery(statsSql);
        
        if (!result.success) {
            throw new Error(result.error);
        }

        res.json({
            success: true,
            data: result.data[0],
            message: 'Lấy thống kê thành công'
        });
    } catch (error) {
        console.error('Error getting admin stats:', error);
        res.status(500).json({
            success: false,
            message: 'Lỗi server khi lấy thống kê',
            error: error.message
        });
    }
});

// ==================== SEARCH HISTORY ROUTES ====================

// Save search history (authenticated)
router.post('/search/history', auth, async (req, res) => {
    try {
        const { destination, duration, budget } = req.body;
        const userId = req.user.id;

        const { executeQuery } = require('../config/database');
        const sql = 'INSERT INTO search_history (user_id, destination, duration, budget) VALUES (?, ?, ?, ?)';
        const result = await executeQuery(sql, [userId, destination, duration, budget]);
        
        if (!result.success) {
            throw new Error(result.error);
        }

        res.json({
            success: true,
            message: 'Lưu lịch sử tìm kiếm thành công'
        });
    } catch (error) {
        console.error('Error saving search history:', error);
        res.status(500).json({
            success: false,
            message: 'Lỗi server khi lưu lịch sử tìm kiếm',
            error: error.message
        });
    }
});

// Get user search history (authenticated)
router.get('/user/search-history', auth, async (req, res) => {
    try {
        const userId = req.user.id;
        const { limit = 10 } = req.query;

        const { executeQuery } = require('../config/database');
        const sql = `
            SELECT * FROM search_history 
            WHERE user_id = ? 
            ORDER BY search_date DESC 
            LIMIT ?
        `;
        
        const result = await executeQuery(sql, [userId, parseInt(limit)]);
        
        if (!result.success) {
            throw new Error(result.error);
        }

        res.json({
            success: true,
            data: result.data,
            message: 'Lấy lịch sử tìm kiếm thành công'
        });
    } catch (error) {
        console.error('Error getting search history:', error);
        res.status(500).json({
            success: false,
            message: 'Lỗi server khi lấy lịch sử tìm kiếm',
            error: error.message
        });
    }
});

module.exports = router;
