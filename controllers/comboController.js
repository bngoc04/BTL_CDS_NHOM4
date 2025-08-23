const Combo = require('../models/Combo');
const { executeQuery } = require('../config/database');

class ComboController {
    // Get all combos with filters and pagination
    static async getAllCombos(req, res) {
        try {
            const {
                page = 1,
                limit = 12,
                destination,
                category,
                minPrice,
                maxPrice,
                duration,
                featured,
                sortBy = 'created_at',
                sortOrder = 'DESC'
            } = req.query;

            const options = {
                page: parseInt(page),
                limit: parseInt(limit),
                destination,
                category,
                minPrice: minPrice ? parseFloat(minPrice) : null,
                maxPrice: maxPrice ? parseFloat(maxPrice) : null,
                duration: duration ? parseInt(duration) : null,
                isFeatured: featured === 'true' ? true : featured === 'false' ? false : null,
                sortBy,
                sortOrder: sortOrder.toUpperCase()
            };

            const result = await Combo.getAll(options);

            res.json({
                success: true,
                data: result.combos,
                pagination: result.pagination,
                message: 'Lấy danh sách combo thành công'
            });
        } catch (error) {
            console.error('Error getting combos:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi lấy danh sách combo',
                error: error.message
            });
        }
    }

    // Get combo by ID
    static async getComboById(req, res) {
        try {
            const { id } = req.params;
            const combo = await Combo.getById(id);

            if (!combo) {
                return res.status(404).json({
                    success: false,
                    message: 'Không tìm thấy combo'
                });
            }

            res.json({
                success: true,
                data: combo,
                message: 'Lấy thông tin combo thành công'
            });
        } catch (error) {
            console.error('Error getting combo by ID:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi lấy thông tin combo',
                error: error.message
            });
        }
    }

    // Get combo by slug
    static async getComboBySlug(req, res) {
        try {
            const { slug } = req.params;
            const combo = await Combo.getBySlug(slug);

            if (!combo) {
                return res.status(404).json({
                    success: false,
                    message: 'Không tìm thấy combo'
                });
            }

            res.json({
                success: true,
                data: combo,
                message: 'Lấy thông tin combo thành công'
            });
        } catch (error) {
            console.error('Error getting combo by slug:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi lấy thông tin combo',
                error: error.message
            });
        }
    }

    // Search combos
    static async searchCombos(req, res) {
        try {
            const { keyword, page = 1, limit = 12, destination, category, minPrice, maxPrice } = req.query;

            if (!keyword || keyword.trim().length === 0) {
                return res.status(400).json({
                    success: false,
                    message: 'Từ khóa tìm kiếm không được để trống'
                });
            }

            const options = {
                page: parseInt(page),
                limit: parseInt(limit),
                destination,
                category,
                minPrice: minPrice ? parseFloat(minPrice) : null,
                maxPrice: maxPrice ? parseFloat(maxPrice) : null
            };

            const result = await Combo.search(keyword.trim(), options);

            res.json({
                success: true,
                data: result.combos,
                pagination: result.pagination,
                keyword: keyword.trim(),
                message: `Tìm thấy ${result.combos.length} combo phù hợp`
            });
        } catch (error) {
            console.error('Error searching combos:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi tìm kiếm combo',
                error: error.message
            });
        }
    }

    // Get featured combos
    static async getFeaturedCombos(req, res) {
        try {
            const { limit = 6 } = req.query;
            const combos = await Combo.getFeatured(parseInt(limit));

            res.json({
                success: true,
                data: combos,
                message: 'Lấy danh sách combo nổi bật thành công'
            });
        } catch (error) {
            console.error('Error getting featured combos:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi lấy combo nổi bật',
                error: error.message
            });
        }
    }

    // Get combos by destination
    static async getCombosByDestination(req, res) {
        try {
            const { destination } = req.params;
            const { limit = 6 } = req.query;
            const combos = await Combo.getByDestination(destination, parseInt(limit));

            res.json({
                success: true,
                data: combos,
                destination,
                message: `Lấy danh sách combo tại ${destination} thành công`
            });
        } catch (error) {
            console.error('Error getting combos by destination:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi lấy combo theo điểm đến',
                error: error.message
            });
        }
    }

    // Get combo statistics
    static async getComboStats(req, res) {
        try {
            const stats = await Combo.getStats();

            res.json({
                success: true,
                data: stats,
                message: 'Lấy thống kê combo thành công'
            });
        } catch (error) {
            console.error('Error getting combo stats:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi lấy thống kê combo',
                error: error.message
            });
        }
    }

    // Get popular destinations
    static async getPopularDestinations(req, res) {
        try {
            const sql = `
                SELECT 
                    d.*,
                    COUNT(c.id) as combo_count,
                    AVG(c.price) as avg_price,
                    COUNT(b.id) as booking_count
                FROM destinations d
                LEFT JOIN combos c ON d.id = c.destination_id AND c.is_active = 1
                LEFT JOIN bookings b ON c.id = b.combo_id
                WHERE d.is_active = 1
                GROUP BY d.id
                ORDER BY booking_count DESC, combo_count DESC
                LIMIT 6
            `;

            const result = await executeQuery(sql);
            
            if (!result.success) {
                throw new Error(result.error);
            }

            res.json({
                success: true,
                data: result.data,
                message: 'Lấy danh sách điểm đến phổ biến thành công'
            });
        } catch (error) {
            console.error('Error getting popular destinations:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi lấy điểm đến phổ biến',
                error: error.message
            });
        }
    }

    // Get categories
    static async getCategories(req, res) {
        try {
            const sql = `
                SELECT 
                    cat.*,
                    COUNT(c.id) as combo_count
                FROM categories cat
                LEFT JOIN combos c ON cat.id = c.category_id AND c.is_active = 1
                WHERE cat.is_active = 1
                GROUP BY cat.id
                ORDER BY cat.name ASC
            `;

            const result = await executeQuery(sql);
            
            if (!result.success) {
                throw new Error(result.error);
            }

            res.json({
                success: true,
                data: result.data,
                message: 'Lấy danh sách danh mục thành công'
            });
        } catch (error) {
            console.error('Error getting categories:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi lấy danh mục',
                error: error.message
            });
        }
    }

    // Get price ranges for filtering
    static async getPriceRanges(req, res) {
        try {
            const sql = `
                SELECT 
                    MIN(price) as min_price,
                    MAX(price) as max_price,
                    AVG(price) as avg_price
                FROM combos 
                WHERE is_active = 1
            `;

            const result = await executeQuery(sql);
            
            if (!result.success) {
                throw new Error(result.error);
            }

            const priceData = result.data[0];
            
            // Create price ranges
            const ranges = [
                { label: 'Dưới 5 triệu', min: 0, max: 5000000 },
                { label: '5 - 10 triệu', min: 5000000, max: 10000000 },
                { label: '10 - 20 triệu', min: 10000000, max: 20000000 },
                { label: 'Trên 20 triệu', min: 20000000, max: null }
            ];

            res.json({
                success: true,
                data: {
                    ranges,
                    stats: priceData
                },
                message: 'Lấy thông tin khoảng giá thành công'
            });
        } catch (error) {
            console.error('Error getting price ranges:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi lấy khoảng giá',
                error: error.message
            });
        }
    }

    // Get duration options
    static async getDurationOptions(req, res) {
        try {
            const sql = `
                SELECT 
                    duration_days,
                    COUNT(*) as combo_count
                FROM combos 
                WHERE is_active = 1
                GROUP BY duration_days
                ORDER BY duration_days ASC
            `;

            const result = await executeQuery(sql);
            
            if (!result.success) {
                throw new Error(result.error);
            }

            const durations = result.data.map(item => ({
                days: item.duration_days,
                label: `${item.duration_days} ngày`,
                count: item.combo_count
            }));

            res.json({
                success: true,
                data: durations,
                message: 'Lấy tùy chọn thời gian thành công'
            });
        } catch (error) {
            console.error('Error getting duration options:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi lấy tùy chọn thời gian',
                error: error.message
            });
        }
    }

    // Update combo availability (for booking system)
    static async updateAvailability(req, res) {
        try {
            const { id } = req.params;
            const { availableSlots } = req.body;

            if (availableSlots < 0) {
                return res.status(400).json({
                    success: false,
                    message: 'Số chỗ trống không thể âm'
                });
            }

            const result = await Combo.updateAvailability(id, availableSlots);

            res.json({
                success: true,
                data: { availableSlots },
                message: 'Cập nhật số chỗ trống thành công'
            });
        } catch (error) {
            console.error('Error updating availability:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi cập nhật số chỗ trống',
                error: error.message
            });
        }
    }

    // Get combo recommendations
    static async getRecommendations(req, res) {
        try {
            const { comboId, limit = 4 } = req.query;

            let sql = `
                SELECT 
                    c.*,
                    d.name as destination_name,
                    d.slug as destination_slug,
                    d.image_url as destination_image,
                    cat.name as category_name,
                    cat.icon as category_icon,
                    cat.color as category_color,
                    (SELECT image_url FROM combo_images WHERE combo_id = c.id AND is_primary = 1 LIMIT 1) as primary_image,
                    COUNT(DISTINCT r.id) as review_count,
                    AVG(r.rating) as avg_rating
                FROM combos c
                LEFT JOIN destinations d ON c.destination_id = d.id
                LEFT JOIN categories cat ON c.category_id = cat.id
                LEFT JOIN reviews r ON c.id = r.combo_id AND r.is_approved = 1
                WHERE c.is_active = 1 AND c.id != ?
                GROUP BY c.id
                ORDER BY c.rating DESC, c.review_count DESC
                LIMIT ?
            `;

            const result = await executeQuery(sql, [comboId || 0, parseInt(limit)]);
            
            if (!result.success) {
                throw new Error(result.error);
            }

            res.json({
                success: true,
                data: result.data,
                message: 'Lấy gợi ý combo thành công'
            });
        } catch (error) {
            console.error('Error getting recommendations:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi lấy gợi ý combo',
                error: error.message
            });
        }
    }
}

module.exports = ComboController;
