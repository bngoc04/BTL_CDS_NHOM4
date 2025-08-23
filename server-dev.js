const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdnjs.cloudflare.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdnjs.cloudflare.com"],
            scriptSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com"],
            imgSrc: ["'self'", "data:", "https:", "http:"],
            connectSrc: ["'self'"]
        }
    }
}));

// CORS middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static files
app.use(express.static(path.join(__dirname)));

// Sample data for development
const travelCombos = [
    {
        id: 1,
        title: "Đà Lạt Lãng Mạn",
        destination: "da-lat",
        duration: "3 ngày 2 đêm",
        price: "4,500,000",
        originalPrice: "5,500,000",
        badge: "HOT",
        description: "Khám phá thành phố ngàn hoa với những trải nghiệm lãng mạn tuyệt vời",
        features: ["Vé máy bay", "Khách sạn 4*", "Xe đưa đón", "Ăn sáng", "Tour city"],
        highlights: [
            "Tham quan Thiền Viện Trúc Lâm",
            "Đi cáp treo Đà Lạt",
            "Chụp ảnh tại Crazy House",
            "Thưởng thức cà phê tại Mê Linh Coffee Garden"
        ],
        itinerary: {
            day1: "Đón tại sân bay - Check-in khách sạn - Tham quan trung tâm thành phố",
            day2: "Tour thiên nhiên - Thác Elephant - Hồ Tuyền Lâm - Thiền Viện Trúc Lâm",
            day3: "Tự do mua sắm - Ra sân bay"
        },
        availableSlots: 15,
        rating: 4.8,
        reviews: 127
    },
    {
        id: 2,
        title: "Hạ Long Kỳ Thú",
        destination: "ha-long",
        duration: "2 ngày 1 đêm",
        price: "3,200,000",
        originalPrice: "3,800,000",
        badge: "SALE",
        description: "Khám phá vịnh Hạ Long - kỳ quan thiên nhiên thế giới với du thuyền sang trọng",
        features: ["Du thuyền 5*", "Buffet hải sản", "Kayak", "Hang Sửng Sốt", "Đảo Titop"],
        highlights: [
            "Du ngoạn vịnh Hạ Long trên du thuyền",
            "Tham quan Hang Sửng Sốt",
            "Leo núi tại Đảo Titop",
            "Chèo kayak khám phá hang động"
        ],
        itinerary: {
            day1: "Đón tại Hà Nội - Đến Hạ Long - Lên du thuyền - Ăn trưa - Hang Sửng Sốt",
            day2: "Đảo Titop - Kayak - Ăn trưa - Về Hà Nội"
        },
        availableSlots: 8,
        rating: 4.7,
        reviews: 89
    }
];

// API Routes for development
app.get('/api/combos', (req, res) => {
    res.json({
        success: true,
        data: travelCombos,
        message: 'Lấy danh sách combo thành công'
    });
});

app.get('/api/combos/:id', (req, res) => {
    const comboId = parseInt(req.params.id);
    const combo = travelCombos.find(c => c.id === comboId);
    
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
});

app.get('/api/combos/search', (req, res) => {
    const { keyword } = req.query;
    
    if (!keyword) {
        return res.status(400).json({
            success: false,
            message: 'Từ khóa tìm kiếm không được để trống'
        });
    }
    
    const filteredCombos = travelCombos.filter(combo =>
        combo.title.toLowerCase().includes(keyword.toLowerCase()) ||
        combo.description.toLowerCase().includes(keyword.toLowerCase())
    );
    
    res.json({
        success: true,
        data: filteredCombos,
        keyword,
        message: `Tìm thấy ${filteredCombos.length} combo phù hợp`
    });
});

app.post('/api/bookings', (req, res) => {
    const { comboId, customerName, customerEmail, customerPhone, numberOfPeople, departureDate } = req.body;
    
    if (!comboId || !customerName || !customerEmail || !customerPhone || !numberOfPeople || !departureDate) {
        return res.status(400).json({
            success: false,
            message: 'Vui lòng điền đầy đủ thông tin'
        });
    }
    
    const bookingCode = 'BK' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase();
    
    res.json({
        success: true,
        data: {
            bookingCode,
            message: 'Đặt chỗ thành công! Mã đặt chỗ của bạn là: ' + bookingCode
        }
    });
});

app.post('/api/contact', (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    
    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: 'Vui lòng điền đầy đủ thông tin'
        });
    }
    
    res.json({
        success: true,
        message: 'Gửi tin nhắn thành công! Chúng tôi sẽ liên hệ lại sớm nhất.'
    });
});

// Frontend Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'travel.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        success: true,
        message: 'Development Server is running',
        timestamp: new Date().toISOString(),
        environment: 'development',
        mode: 'development (no database)'
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        success: false,
        message: 'Lỗi server nội bộ',
        error: err.message
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'API endpoint không tồn tại'
    });
});

// Start server
app.listen(PORT, () => {
    console.log('🚀 Travel Combo Website - Development Server');
    console.log(`📍 Đang chạy tại: http://localhost:${PORT}`);
    console.log(`📚 API Documentation: http://localhost:${PORT}/api`);
    console.log(`🔍 Health Check: http://localhost:${PORT}/health`);
    console.log(`🌍 Environment: development (no database)`);
    console.log('✅ Server đã sẵn sàng!');
    console.log('💡 Đây là chế độ development không cần database');
});
