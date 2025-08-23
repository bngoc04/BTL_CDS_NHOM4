const { executeQuery } = require('../config/database');

class BookingController {
    // Create new booking
    static async createBooking(req, res) {
        try {
            const {
                comboId,
                customerName,
                customerEmail,
                customerPhone,
                numberOfPeople,
                departureDate,
                returnDate,
                specialRequests,
                paymentMethod = 'cash'
            } = req.body;

            // Generate booking code
            const bookingCode = 'BK' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase();

            // Get combo price
            const comboSql = 'SELECT price, available_slots FROM combos WHERE id = ? AND is_active = 1';
            const comboResult = await executeQuery(comboSql, [comboId]);
            
            if (!comboResult.success || comboResult.data.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'Không tìm thấy combo'
                });
            }

            const combo = comboResult.data[0];
            
            if (combo.available_slots < numberOfPeople) {
                return res.status(400).json({
                    success: false,
                    message: 'Không đủ chỗ trống cho số người yêu cầu'
                });
            }

            const totalPrice = combo.price * numberOfPeople;
            const finalPrice = totalPrice;

            // Create booking
            const insertSql = `
                INSERT INTO bookings (
                    booking_code, combo_id, customer_name, customer_email, customer_phone,
                    number_of_people, departure_date, return_date, total_price, final_price,
                    special_requests, payment_method, created_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
            `;

            const result = await executeQuery(insertSql, [
                bookingCode, comboId, customerName, customerEmail, customerPhone,
                numberOfPeople, departureDate, returnDate, totalPrice, finalPrice,
                specialRequests, paymentMethod
            ]);

            if (!result.success) {
                throw new Error(result.error);
            }

            // Update combo availability
            const updateSql = 'UPDATE combos SET available_slots = available_slots - ? WHERE id = ?';
            await executeQuery(updateSql, [numberOfPeople, comboId]);

            res.json({
                success: true,
                data: {
                    bookingId: result.data.insertId,
                    bookingCode,
                    totalPrice: finalPrice
                },
                message: 'Đặt chỗ thành công'
            });
        } catch (error) {
            console.error('Error creating booking:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi tạo đặt chỗ',
                error: error.message
            });
        }
    }

    // Get booking by code
    static async getBookingByCode(req, res) {
        try {
            const { code } = req.params;
            
            const sql = `
                SELECT b.*, c.title as combo_title, c.price as combo_price
                FROM bookings b
                LEFT JOIN combos c ON b.combo_id = c.id
                WHERE b.booking_code = ?
            `;
            
            const result = await executeQuery(sql, [code]);
            
            if (!result.success) {
                throw new Error(result.error);
            }

            if (result.data.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'Không tìm thấy đặt chỗ'
                });
            }

            res.json({
                success: true,
                data: result.data[0],
                message: 'Lấy thông tin đặt chỗ thành công'
            });
        } catch (error) {
            console.error('Error getting booking:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi lấy thông tin đặt chỗ',
                error: error.message
            });
        }
    }

    // Get user bookings
    static async getUserBookings(req, res) {
        try {
            const userId = req.user.id;
            
            const sql = `
                SELECT b.*, c.title as combo_title, c.price as combo_price
                FROM bookings b
                LEFT JOIN combos c ON b.combo_id = c.id
                WHERE b.user_id = ?
                ORDER BY b.created_at DESC
            `;
            
            const result = await executeQuery(sql, [userId]);
            
            if (!result.success) {
                throw new Error(result.error);
            }

            res.json({
                success: true,
                data: result.data,
                message: 'Lấy danh sách đặt chỗ thành công'
            });
        } catch (error) {
            console.error('Error getting user bookings:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi lấy danh sách đặt chỗ',
                error: error.message
            });
        }
    }

    // Cancel booking
    static async cancelBooking(req, res) {
        try {
            const { id } = req.params;
            const userId = req.user.id;
            
            // Check if booking exists and belongs to user
            const checkSql = 'SELECT * FROM bookings WHERE id = ? AND user_id = ?';
            const checkResult = await executeQuery(checkSql, [id, userId]);
            
            if (!checkResult.success || checkResult.data.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'Không tìm thấy đặt chỗ'
                });
            }

            const booking = checkResult.data[0];
            
            if (booking.status === 'cancelled') {
                return res.status(400).json({
                    success: false,
                    message: 'Đặt chỗ đã được hủy trước đó'
                });
            }

            // Cancel booking
            const updateSql = 'UPDATE bookings SET status = "cancelled" WHERE id = ?';
            const result = await executeQuery(updateSql, [id]);
            
            if (!result.success) {
                throw new Error(result.error);
            }

            // Restore combo availability
            const restoreSql = 'UPDATE combos SET available_slots = available_slots + ? WHERE id = ?';
            await executeQuery(restoreSql, [booking.number_of_people, booking.combo_id]);

            res.json({
                success: true,
                message: 'Hủy đặt chỗ thành công'
            });
        } catch (error) {
            console.error('Error cancelling booking:', error);
            res.status(500).json({
                success: false,
                message: 'Lỗi server khi hủy đặt chỗ',
                error: error.message
            });
        }
    }
}

module.exports = BookingController;
