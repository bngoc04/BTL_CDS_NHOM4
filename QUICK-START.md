# 🚀 Hướng Dẫn Chạy Nhanh - Travel Combo Website

## ✅ Trạng thái hiện tại
- ✅ Dependencies đã được cài đặt
- ✅ Server development đã chạy thành công
- ✅ API đang hoạt động
- ✅ Frontend đã sẵn sàng

## 🌐 Truy cập website

### Chế độ Development (Không cần database)
```bash
npm run dev
```
**Truy cập:** http://localhost:3001

### Chế độ Production (Cần database)
```bash
npm start
```

## 📱 Các tính năng đã hoạt động

### Frontend
- ✅ Trang chủ với hero section
- ✅ Danh sách combo du lịch
- ✅ Tìm kiếm combo
- ✅ Chi tiết combo với modal
- ✅ Form đặt chỗ
- ✅ Form liên hệ
- ✅ Responsive design
- ✅ Hình ảnh từ Unsplash

### API Endpoints
- ✅ `GET /api/combos` - Lấy danh sách combo
- ✅ `GET /api/combos/:id` - Lấy chi tiết combo
- ✅ `GET /api/combos/search` - Tìm kiếm combo
- ✅ `POST /api/bookings` - Đặt chỗ
- ✅ `POST /api/contact` - Gửi tin nhắn liên hệ
- ✅ `GET /health` - Kiểm tra trạng thái server

## 🎯 Cách sử dụng

### 1. Xem danh sách combo
- Truy cập: http://localhost:3001
- Xem các combo du lịch được hiển thị

### 2. Tìm kiếm combo
- Sử dụng thanh tìm kiếm trên trang chủ
- Hoặc gọi API: `GET /api/combos/search?keyword=đà lạt`

### 3. Xem chi tiết combo
- Click vào bất kỳ combo nào để xem chi tiết
- Modal sẽ hiển thị thông tin đầy đủ

### 4. Đặt chỗ
- Click "Đặt Ngay" trên combo
- Điền thông tin trong form
- Nhận mã đặt chỗ

### 5. Liên hệ
- Cuộn xuống cuối trang
- Điền form liên hệ
- Gửi tin nhắn

## 🔧 Cấu hình Database (Tùy chọn)

Nếu muốn sử dụng database thực:

1. **Cài đặt MySQL**
2. **Tạo database:**
   ```sql
   CREATE DATABASE travel_combo_db;
   ```
3. **Import schema:**
   ```bash
   mysql -u root -p travel_combo_db < database.sql
   ```
4. **Cập nhật file .env:**
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=travel_combo_db
   ```
5. **Chạy server production:**
   ```bash
   npm start
   ```

## 📁 Cấu trúc dự án

```
BTL/
├── travel.html              # Trang chủ
├── travel-styles.css        # CSS chính
├── travel-script.js         # JavaScript frontend
├── server-dev.js           # Server development
├── server.js               # Server production
├── database.sql            # Schema database
├── package.json            # Dependencies
├── .env                    # Cấu hình
├── config/                 # Cấu hình database
├── controllers/            # Logic xử lý
├── models/                 # Models database
├── routes/                 # API routes
├── middleware/             # Middleware
└── validations/            # Validation schemas
```

## 🎨 Tính năng nổi bật

- **Responsive Design** - Hoạt động trên mọi thiết bị
- **Dynamic Images** - Hình ảnh từ Unsplash
- **Modern UI** - Giao diện hiện đại, đẹp mắt
- **Search Functionality** - Tìm kiếm thông minh
- **Booking System** - Hệ thống đặt chỗ
- **Contact Form** - Form liên hệ
- **API Ready** - Sẵn sàng tích hợp backend

## 🚀 Deploy

### Local Development
```bash
npm run dev
```

### Production
```bash
npm start
```

### Với Database
```bash
npm run db:setup
npm start
```

---

**🎉 Chúc mừng! Website Travel Combo đã sẵn sàng sử dụng!**
