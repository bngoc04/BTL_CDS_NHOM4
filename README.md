# 🚀 Travel Combo Website

Website gợi ý combo du lịch với đầy đủ backend, frontend, database và các chức năng hiện đại.

## 📋 Mục lục

- [Tính năng](#-tính-năng)
- [Công nghệ sử dụng](#-công-nghệ-sử-dụng)
- [Cài đặt](#-cài-đặt)
- [Cấu trúc dự án](#-cấu-trúc-dự-án)
- [API Documentation](#-api-documentation)
- [Database Schema](#-database-schema)
- [Chức năng chính](#-chức-năng-chính)
- [Hình ảnh demo](#-hình-ảnh-demo)
- [Đóng góp](#-đóng-góp)
- [License](#-license)

## ✨ Tính năng

### 🎯 Chức năng chính
- **Tìm kiếm combo du lịch** với bộ lọc thông minh
- **Đặt chỗ trực tuyến** với thanh toán an toàn
- **Hệ thống đánh giá** và nhận xét từ khách hàng
- **Quản lý tài khoản** người dùng
₫- **Responsive design** cho mọi thiết bị

### 🔍 Tìm kiếm & Lọc
- Tìm kiếm theo điểm đến, ngày,ngân sách
- Lọc theo danh mục, giá cả, đánh giá
- Sắp xếp theo nhiều tiêu chí
- Lịch sử tìm kiếm cá nhân
- Gợi ý combo phù hợp

### 💳 Hệ thống đặt chỗ
- Đặt chỗ trực tuyến 24/7
- Thanh toán trực tuyến (VNPay, Momo)

## 🛠 Công nghệ sử dụng

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MySQL** - Database
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload
- **Nodemailer** - Email service

### Frontend
- **HTML5/CSS3** - Markup & Styling
- **JavaScript (ES6+)** - Client-side logic
- **Font Awesome** - Icons
- 
### Database
- **MySQL** - Primary database
- **Connection Pooling** - Performance optimization
- **Indexes** - Query optimization
- **Foreign Keys** - Data integrity


## 🚀 Cài đặt

### Yêu cầu hệ thống
- Node.js >= 16.0.0
- MySQL >= 8.0
- npm >= 8.0.0

### Bước 1: Clone repository
```bash
git clone https://github.com/your-username/travel-combo-website.git
cd travel-combo-website
```

### Bước 2: Cài đặt dependencies
```bash
npm install
```

### Bước 3: Cấu hình database
```bash
# Tạo database
mysql -u root -p
CREATE DATABASE travel_combo_db;
USE travel_combo_db;

# Import schema
mysql -u root -p travel_combo_db < database.sql
```

### Bước 4: Cấu hình environment
```bash
# Copy file mẫu
cp env.example .env

# Chỉnh sửa file .env với thông tin của bạn
nano .env
```

### Bước 5: Chạy ứng dụng
node travel-server.js

Truy cập: http://localhost:3001

## 📁 Cấu trúc dự án

```
travel-combo-website/
├── config/                 # Cấu hình database, middleware
│   ├── database.js        # Database connection
│   └── middleware.js      # Custom middleware
├── controllers/           # Business logic
│   ├── comboController.js # Combo management
│   ├── bookingController.js # Booking management
│   ├── userController.js  # User management
│   └── contactController.js # Contact management
├── models/               # Data models
│   ├── Combo.js         # Combo model
│   ├── Booking.js       # Booking model
│   ├── User.js          # User model
│   └── Contact.js       # Contact model
├── routes/              # API routes
│   └── api.js          # Main API routes
├── middleware/          # Custom middleware
│   ├── auth.js         # Authentication
│   └── validate.js     # Validation
├── validations/         # Validation schemas
│   └── schemas.js      # Joi validation schemas
├── public/             # Static files
│   ├── css/           # Stylesheets
│   ├── js/            # Client-side JavaScript
│   └── images/        # Images
├── uploads/           # File uploads
├── logs/              # Application logs
├── scripts/           # Database seeding
├── tests/             # Test files
├── database.sql       # Database schema
├── travel-server.js   # Main server file
├── travel.html        # Main HTML file
├── travel-styles.css  # Main stylesheet
├── travel-script.js   # Main client script
├── package.json       # Dependencies
├── env.example        # Environment variables template
└── README.md          # Documentation
```

### Endpoints

#### Combo Management
```http
GET    /combos                    # Lấy danh sách combo
GET    /combos/search            # Tìm kiếm combo
GET    /combos/featured          # Combo nổi bật
GET    /combos/destination/:dest # Combo theo điểm đến
```


#### User Management
```http
POST   /auth/register            # Đăng ký tài khoản
POST   /auth/login              # Đăng nhập
GET    /user/profile            # Lấy thông tin profile
PUT    /user/profile            # Cập nhật profile
PUT    /user/password           # Đổi mật khẩu
```

#### Reviews
```http
GET    /combos/:id/reviews       # Lấy đánh giá combo
POST   /combos/:id/reviews       # Tạo đánh giá mới
```

#### Contact & Newsletter
```http
POST   /contact                  # Gửi tin nhắn liên hệ
POST   /newsletter/subscribe     # Đăng ký nhận tin
POST   /newsletter/unsubscribe   # Hủy đăng ký
```

### Response Format
```javascript
{
  "success": true,
  "data": {...},
  "message": "Thông báo thành công",
  "pagination": {
    "page": 1,
    "limit": 12,
    "total": 100,
    "totalPages": 9
  }
}
```

## 🗄 Database Schema

### Bảng chính
- **users** - Thông tin người dùng
- **destinations** - Điểm đến du lịch
- **categories** - Danh mục combo
- **combos** - Thông tin combo du lịch
- **combo_images** - Hình ảnh combo
- **combo_features** - Tính năng combo
- **combo_highlights** - Điểm nổi bật
- **combo_itinerary** - Lịch trình chi tiết
- **bookings** - Đặt chỗ
- **reviews** - Đánh giá
- **contact_messages** - Tin nhắn liên hệ

### Quan hệ
- Combo → Destination (N:1)
- Combo → Category (N:1)
- Booking → Combo (N:1)
- Booking → User (N:1)
- Review → Combo (N:1)
- Review → User (N:1)

## 🎯 Chức năng chính

### 1. Tìm kiếm thông minh
- Tìm kiếm theo từ khóa
- Lọc theo điểm đến, thời gian, ngân sách
- Sắp xếp theo giá, đánh giá, thời gian
- Gợi ý combo phù hợp

### 2. Hệ thống đặt chỗ
- Đặt chỗ trực tuyến
- Thanh toán an toàn

### 3. Đánh giá & Nhận xét
- Đánh giá sao (1-5)
- Viết nhận xét chi tiết
- Hình ảnh đánh giá
- Xác minh đặt chỗ



## 📸 Hình ảnh demo

### Trang chủ
<img width="1238" height="892" alt="trangchu" src="https://github.com/user-attachments/assets/69e6b7de-33b6-41cb-b046-2c1cd96161bc" />


### Tìm kiếm combo
![Search](https://via.placeholder.com/800x400/ff6b6b/ffffff?text=Tìm+Kiếm+Combo)

### Chi tiết combo
![Combo Detail](https://via.placeholder.com/800x400/32cd32/ffffff?text=Chi+Tiết+Combo)

### Đặt chỗ
![Booking](https://via.placeholder.com/800x400/9370db/ffffff?text=Đặt+Chỗ)

### Dashboard Admin
![Admin Dashboard](https://via.placeholder.com/800x400/ff6347/ffffff?text=Admin+Dashboard)

## 🔧 Development


## 📞 Liên hệ

- **Email**: nguyenngoc@travelcombo.vn
- **Website**: https://travelcombo.vn
- **Phone**: +84 384 532 704
- **Address**: Yên nghĩa, TP.Hà Nội

## 🙏 Cảm ơn

Cảm ơn bạn đã quan tâm đến dự án Travel Combo Website! 

---

**Made with ❤️ by Travel Combo Team**
