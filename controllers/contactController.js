const { executeQuery } = require('../config/database');

class ContactController {
    // Submit contact form
    static async submitContact(req, res) {
        try {
            const { name, email, phone, subject, message } = req.body;

            const sql = `
                INSERT INTO contact_messages (name, email, phone, subject, message, created_at)
                VALUES (?, ?, ?, ?, ?, NOW())
            `;

            const result = await executeQuery(sql, [name, email, phone, subject, message]);

            if (!result.success) {
                throw new Error(result.error);
            }

            res.status(201).json({
                success: true,
                data: { messageId: result.data.insertId },
                message: 'Gửi tin nhắn thành công. Chúng tôi sẽ liên hệ lại sớm nhất!'
            });
        } catch (error) {
            console.error('Error submitting contact:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi gửi tin nhắn',
                error: error.message
            });
        }
    }

    // Get contact messages (admin only)
    static async getContacts(req, res) {
        try {
            const { page = 1, limit = 20, status } = req.query;
            const offset = (page - 1) * limit;

            let sql = 'SELECT * FROM contact_messages WHERE 1=1';
            const params = [];

            if (status) {
                sql += ' AND status = ?';
                params.push(status);
            }

            sql += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
            params.push(parseInt(limit), offset);

            const result = await executeQuery(sql, params);

            if (!result.success) {
                throw new Error(result.error);
            }

            // Get total count
            let countSql = 'SELECT COUNT(*) as total FROM contact_messages WHERE 1=1';
            const countParams = [];

            if (status) {
                countSql += ' AND status = ?';
                countParams.push(status);
            }

            const countResult = await executeQuery(countSql, countParams);
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
                message: 'Lấy danh sách tin nhắn thành công'
            });
        } catch (error) {
            console.error('Error getting contacts:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi lấy danh sách tin nhắn',
                error: error.message
            });
        }
    }

    // Update contact status (admin only)
    static async updateContactStatus(req, res) {
        try {
            const { id } = req.params;
            const { status, assignedTo } = req.body;

            const sql = 'UPDATE contact_messages SET status = ?, assigned_to = ?, updated_at = NOW() WHERE id = ?';
            const result = await executeQuery(sql, [status, assignedTo, id]);

            if (!result.success) {
                throw new Error(result.error);
            }

            res.json({
                success: true,
                message: 'Cập nhật trạng thái tin nhắn thành công'
            });
        } catch (error) {
            console.error('Error updating contact status:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi cập nhật trạng thái tin nhắn',
                error: error.message
            });
        }
    }
}

module.exports = ContactController;
