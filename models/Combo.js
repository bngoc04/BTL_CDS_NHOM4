const { executeQuery, executeTransaction } = require('../config/database');

class Combo {
    // Get all combos with pagination and filters
    static async getAll(options = {}) {
        const {
            page = 1,
            limit = 12,
            destination = null,
            category = null,
            minPrice = null,
            maxPrice = null,
            duration = null,
            isFeatured = null,
            sortBy = 'created_at',
            sortOrder = 'DESC'
        } = options;

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
            WHERE c.is_active = 1
        `;

        const params = [];
        const conditions = [];

        if (destination) {
            conditions.push('d.slug = ?');
            params.push(destination);
        }

        if (category) {
            conditions.push('cat.slug = ?');
            params.push(category);
        }

        if (minPrice !== null) {
            conditions.push('c.price >= ?');
            params.push(minPrice);
        }

        if (maxPrice !== null) {
            conditions.push('c.price <= ?');
            params.push(maxPrice);
        }

        if (duration) {
            conditions.push('c.duration_days = ?');
            params.push(duration);
        }

        if (isFeatured !== null) {
            conditions.push('c.is_featured = ?');
            params.push(isFeatured);
        }

        if (conditions.length > 0) {
            sql += ' AND ' + conditions.join(' AND ');
        }

        sql += ' GROUP BY c.id';

        // Add sorting
        sql += ` ORDER BY ${sortBy} ${sortOrder}`;

        // Add pagination
        const offset = (page - 1) * limit;
        sql += ' LIMIT ? OFFSET ?';
        params.push(parseInt(limit), offset);

        const result = await executeQuery(sql, params);
        
        if (!result.success) {
            throw new Error(result.error);
        }

        // Get total count for pagination
        const countSql = `
            SELECT COUNT(DISTINCT c.id) as total
            FROM combos c
            LEFT JOIN destinations d ON c.destination_id = d.id
            LEFT JOIN categories cat ON c.category_id = cat.id
            WHERE c.is_active = 1
        `;

        const countParams = [];
        const countConditions = [];

        if (destination) {
            countConditions.push('d.slug = ?');
            countParams.push(destination);
        }

        if (category) {
            countConditions.push('cat.slug = ?');
            countParams.push(category);
        }

        if (minPrice !== null) {
            countConditions.push('c.price >= ?');
            countParams.push(minPrice);
        }

        if (maxPrice !== null) {
            countConditions.push('c.price <= ?');
            countParams.push(maxPrice);
        }

        if (duration) {
            countConditions.push('c.duration_days = ?');
            countParams.push(duration);
        }

        if (isFeatured !== null) {
            countConditions.push('c.is_featured = ?');
            countParams.push(isFeatured);
        }

        if (countConditions.length > 0) {
            countSql += ' AND ' + countConditions.join(' AND ');
        }

        const countResult = await executeQuery(countSql, countParams);
        const total = countResult.success ? countResult.data[0].total : 0;

        return {
            combos: result.data,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total,
                totalPages: Math.ceil(total / limit)
            }
        };
    }

    // Get combo by ID with all related data
    static async getById(id) {
        const sql = `
            SELECT 
                c.*,
                d.name as destination_name,
                d.slug as destination_slug,
                d.description as destination_description,
                d.image_url as destination_image,
                d.banner_url as destination_banner,
                cat.name as category_name,
                cat.icon as category_icon,
                cat.color as category_color,
                COUNT(DISTINCT r.id) as review_count,
                AVG(r.rating) as avg_rating
            FROM combos c
            LEFT JOIN destinations d ON c.destination_id = d.id
            LEFT JOIN categories cat ON c.category_id = cat.id
            LEFT JOIN reviews r ON c.id = r.combo_id AND r.is_approved = 1
            WHERE c.id = ? AND c.is_active = 1
            GROUP BY c.id
        `;

        const result = await executeQuery(sql, [id]);
        
        if (!result.success) {
            throw new Error(result.error);
        }

        if (result.data.length === 0) {
            return null;
        }

        const combo = result.data[0];

        // Get combo images
        const imagesSql = 'SELECT * FROM combo_images WHERE combo_id = ? ORDER BY is_primary DESC, sort_order ASC';
        const imagesResult = await executeQuery(imagesSql, [id]);
        combo.images = imagesResult.success ? imagesResult.data : [];

        // Get combo features
        const featuresSql = 'SELECT * FROM combo_features WHERE combo_id = ? ORDER BY id ASC';
        const featuresResult = await executeQuery(featuresSql, [id]);
        combo.features = featuresResult.success ? featuresResult.data : [];

        // Get combo highlights
        const highlightsSql = 'SELECT * FROM combo_highlights WHERE combo_id = ? ORDER BY sort_order ASC';
        const highlightsResult = await executeQuery(highlightsSql, [id]);
        combo.highlights = highlightsResult.success ? highlightsResult.data : [];

        // Get combo itinerary
        const itinerarySql = 'SELECT * FROM combo_itinerary WHERE combo_id = ? ORDER BY day_number ASC';
        const itineraryResult = await executeQuery(itinerarySql, [id]);
        combo.itinerary = itineraryResult.success ? itineraryResult.data : [];

        // Get recent reviews
        const reviewsSql = `
            SELECT r.*, u.full_name, u.avatar_url
            FROM reviews r
            LEFT JOIN users u ON r.user_id = u.id
            WHERE r.combo_id = ? AND r.is_approved = 1
            ORDER BY r.created_at DESC
            LIMIT 5
        `;
        const reviewsResult = await executeQuery(reviewsSql, [id]);
        combo.reviews = reviewsResult.success ? reviewsResult.data : [];

        return combo;
    }

    // Get combo by slug
    static async getBySlug(slug) {
        const sql = `
            SELECT 
                c.*,
                d.name as destination_name,
                d.slug as destination_slug,
                d.description as destination_description,
                d.image_url as destination_image,
                d.banner_url as destination_banner,
                cat.name as category_name,
                cat.icon as category_icon,
                cat.color as category_color
            FROM combos c
            LEFT JOIN destinations d ON c.destination_id = d.id
            LEFT JOIN categories cat ON c.category_id = cat.id
            WHERE c.slug = ? AND c.is_active = 1
        `;

        const result = await executeQuery(sql, [slug]);
        
        if (!result.success) {
            throw new Error(result.error);
        }

        if (result.data.length === 0) {
            return null;
        }

        const combo = result.data[0];
        const comboWithDetails = await this.getById(combo.id);
        
        return comboWithDetails;
    }

    // Search combos
    static async search(keyword, options = {}) {
        const {
            page = 1,
            limit = 12,
            destination = null,
            category = null,
            minPrice = null,
            maxPrice = null
        } = options;

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
            WHERE c.is_active = 1
            AND (
                c.title LIKE ? OR 
                c.description LIKE ? OR 
                c.short_description LIKE ? OR
                d.name LIKE ?
            )
        `;

        const searchTerm = `%${keyword}%`;
        const params = [searchTerm, searchTerm, searchTerm, searchTerm];

        const conditions = [];

        if (destination) {
            conditions.push('d.slug = ?');
            params.push(destination);
        }

        if (category) {
            conditions.push('cat.slug = ?');
            params.push(category);
        }

        if (minPrice !== null) {
            conditions.push('c.price >= ?');
            params.push(minPrice);
        }

        if (maxPrice !== null) {
            conditions.push('c.price <= ?');
            params.push(maxPrice);
        }

        if (conditions.length > 0) {
            sql += ' AND ' + conditions.join(' AND ');
        }

        sql += ' GROUP BY c.id ORDER BY c.created_at DESC';

        // Add pagination
        const offset = (page - 1) * limit;
        sql += ' LIMIT ? OFFSET ?';
        params.push(parseInt(limit), offset);

        const result = await executeQuery(sql, params);
        
        if (!result.success) {
            throw new Error(result.error);
        }

        return {
            combos: result.data,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total: result.data.length
            }
        };
    }

    // Get featured combos
    static async getFeatured(limit = 6) {
        const sql = `
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
            WHERE c.is_active = 1 AND c.is_featured = 1
            GROUP BY c.id
            ORDER BY c.created_at DESC
            LIMIT ?
        `;

        const result = await executeQuery(sql, [limit]);
        
        if (!result.success) {
            throw new Error(result.error);
        }

        return result.data;
    }

    // Get combos by destination
    static async getByDestination(destinationSlug, limit = 6) {
        const sql = `
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
            WHERE c.is_active = 1 AND d.slug = ?
            GROUP BY c.id
            ORDER BY c.created_at DESC
            LIMIT ?
        `;

        const result = await executeQuery(sql, [destinationSlug, limit]);
        
        if (!result.success) {
            throw new Error(result.error);
        }

        return result.data;
    }

    // Update combo availability
    static async updateAvailability(id, availableSlots) {
        const sql = 'UPDATE combos SET available_slots = ? WHERE id = ?';
        const result = await executeQuery(sql, [availableSlots, id]);
        
        if (!result.success) {
            throw new Error(result.error);
        }

        return result.data;
    }

    // Get combo statistics
    static async getStats() {
        const sql = `
            SELECT 
                COUNT(*) as total_combos,
                COUNT(CASE WHEN is_featured = 1 THEN 1 END) as featured_combos,
                COUNT(CASE WHEN available_slots > 0 THEN 1 END) as available_combos,
                AVG(price) as avg_price,
                MIN(price) as min_price,
                MAX(price) as max_price
            FROM combos 
            WHERE is_active = 1
        `;

        const result = await executeQuery(sql);
        
        if (!result.success) {
            throw new Error(result.error);
        }

        return result.data[0];
    }
}

module.exports = Combo;
