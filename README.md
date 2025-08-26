
<div align="center">

# 🚀 TRANG WEB GỢI Ý COMBO DU LỊCH  

<p>
<img width="761" height="276" alt="image" src="https://github.com/user-attachments/assets/fe046d68-950d-4552-902e-92a602237b15" />

</p>
Website combo du lịch với đầy đủ backend, frontend, cơ sở dữ liệu và các chức năng hiện đại.  

</div>

## 📋 Mục lục

- [Tính năng](#-tính-năng)
- [Cài đặt](#-cài-đặt)
- [Cấu trúc dự án](#-cấu-trúc-dự-án)
- [Chức năng chính](#-chức-năng-chính)
- [Hình ảnh demo](#-hình-ảnh-demo)
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

### Đăng ký/Đăng nhập
<img width="630" height="614" alt="dangky" src="https://github.com/user-attachments/assets/cc94233d-2435-4e83-93dd-1ffcb0ddc18a" />
<img width="1793" height="822" alt="dangnhap" src="https://github.com/user-attachments/assets/15496a6a-5269-4d67-8fee-a9fc42516106" />


### Trang chủ/ Tìm kiếm Combo
<img width="1238" height="892" alt="trangchu" src="https://github.com/user-attachments/assets/69e6b7de-33b6-41cb-b046-2c1cd96161bc" />
<img width="1258" height="711" alt="image" src="https://github.com/user-attachments/assets/a7f6a5f5-63a4-41cd-b9cf-52ca9c6acc23" />

### Các combo nổi bật
<img width="1165" height="765" alt="Screenshot 2025-08-23 200705" src="https://github.com/user-attachments/assets/89f300cf-0eba-47f5-8697-a8f102c629e2" />

### Xem chi tiết tour
<img width="669" height="643" alt="Screenshot 2025-08-23 200717" src="https://github.com/user-attachments/assets/a2d25be0-e0cd-4521-93bc-3c7970e240f4" />
<img width="715" height="719" alt="Screenshot 2025-08-23 200730" src="https://github.com/user-attachments/assets/2c143f66-f855-4d09-84d5-f2041c26f889" />
<img width="733" height="719" alt="Screenshot 2025-08-23 200738" src="https://github.com/user-attachments/assets/a397e65c-49d1-4dd4-aebf-0f50be9a1867" />

### Đặt Tour
<img width="998" height="829" alt="Screenshot 2025-08-23 200810" src="https://github.com/user-attachments/assets/3676cb0c-ba2b-4457-a63a-96e22cc42ac1" />

### Thông tin người đặt tour
<img width="523" height="560" alt="Screenshot 2025-08-23 200825" src="https://github.com/user-attachments/assets/f0ec6f6c-c3a8-4f36-a134-0e835b4c9c3d" />

### Đặt tour
<img width="475" height="391" alt="Screenshot 2025-08-23 200837" src="https://github.com/user-attachments/assets/938ca59d-f940-4552-b400-059c2d79d057" />

### Phần liên hệ
<img width="1154" height="570" alt="Screenshot 2025-08-23 200850" src="https://github.com/user-attachments/assets/07272c53-5c95-480c-9e78-447655fc7ebb" />
<img width="1457" height="288" alt="Screenshot 2025-08-23 200902" src="https://github.com/user-attachments/assets/c48aa804-072d-4b09-af04-d192db6688c4" />


## 📞 Liên hệ

- **Email**: nguyenngoc@travelcombo.vn
- **Website**: https://travelcombo.vn
- **Phone**: +84 384 532 704
- **Address**: Yên nghĩa, TP.Hà Nội

### Phát triển bởi
-**Nhóm 4 - Lớp CNTT 17-02**
-**Môn: Công nghệ thông tin trong chuyển đổi số**
-**Khoa Công nghệ thông tin - Trường Đại học Đại Nam**

## 🙏 Cảm ơn

Cảm ơn thầy cô và các bạnbạn đã quan tâm đến dự án Travel Combo Website! 

---
