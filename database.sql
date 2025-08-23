-- Travel Combo Database Schema
-- MySQL/PostgreSQL compatible

-- Users table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    role ENUM('customer', 'admin', 'agent') DEFAULT 'customer',
    avatar_url VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    email_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Destinations table
CREATE TABLE destinations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    banner_url VARCHAR(255),
    location VARCHAR(200),
    province VARCHAR(100),
    country VARCHAR(50) DEFAULT 'Vietnam',
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    is_popular BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categories table
CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    icon VARCHAR(50),
    color VARCHAR(7),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Combos table
CREATE TABLE combos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    slug VARCHAR(200) UNIQUE NOT NULL,
    description TEXT,
    short_description VARCHAR(300),
    destination_id INT,
    category_id INT,
    duration_days INT NOT NULL,
    duration_nights INT NOT NULL,
    price DECIMAL(12, 2) NOT NULL,
    original_price DECIMAL(12, 2),
    discount_percent INT DEFAULT 0,
    max_group_size INT DEFAULT 20,
    min_group_size INT DEFAULT 1,
    available_slots INT DEFAULT 20,
    rating DECIMAL(3, 2) DEFAULT 0,
    review_count INT DEFAULT 0,
    badge VARCHAR(50),
    is_featured BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (destination_id) REFERENCES destinations(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Combo images table
CREATE TABLE combo_images (
    id INT PRIMARY KEY AUTO_INCREMENT,
    combo_id INT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    alt_text VARCHAR(200),
    is_primary BOOLEAN DEFAULT FALSE,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (combo_id) REFERENCES combos(id) ON DELETE CASCADE
);

-- Combo features table
CREATE TABLE combo_features (
    id INT PRIMARY KEY AUTO_INCREMENT,
    combo_id INT NOT NULL,
    feature_name VARCHAR(100) NOT NULL,
    feature_description TEXT,
    icon VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (combo_id) REFERENCES combos(id) ON DELETE CASCADE
);

-- Combo highlights table
CREATE TABLE combo_highlights (
    id INT PRIMARY KEY AUTO_INCREMENT,
    combo_id INT NOT NULL,
    highlight_text VARCHAR(200) NOT NULL,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (combo_id) REFERENCES combos(id) ON DELETE CASCADE
);

-- Combo itinerary table
CREATE TABLE combo_itinerary (
    id INT PRIMARY KEY AUTO_INCREMENT,
    combo_id INT NOT NULL,
    day_number INT NOT NULL,
    title VARCHAR(200),
    description TEXT,
    activities TEXT,
    meals_included JSON,
    accommodation VARCHAR(200),
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (combo_id) REFERENCES combos(id) ON DELETE CASCADE
);

-- Bookings table
CREATE TABLE bookings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    booking_code VARCHAR(20) UNIQUE NOT NULL,
    user_id INT,
    combo_id INT NOT NULL,
    customer_name VARCHAR(100) NOT NULL,
    customer_email VARCHAR(100) NOT NULL,
    customer_phone VARCHAR(20) NOT NULL,
    number_of_people INT NOT NULL,
    departure_date DATE NOT NULL,
    return_date DATE,
    total_price DECIMAL(12, 2) NOT NULL,
    discount_amount DECIMAL(12, 2) DEFAULT 0,
    final_price DECIMAL(12, 2) NOT NULL,
    special_requests TEXT,
    status ENUM('pending', 'confirmed', 'paid', 'cancelled', 'completed') DEFAULT 'pending',
    payment_method ENUM('cash', 'bank_transfer', 'credit_card', 'online') DEFAULT 'cash',
    payment_status ENUM('pending', 'paid', 'failed', 'refunded') DEFAULT 'pending',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (combo_id) REFERENCES combos(id)
);

-- Reviews table
CREATE TABLE reviews (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    combo_id INT NOT NULL,
    booking_id INT,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    title VARCHAR(200),
    comment TEXT,
    images JSON,
    is_verified BOOLEAN DEFAULT FALSE,
    is_approved BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (combo_id) REFERENCES combos(id),
    FOREIGN KEY (booking_id) REFERENCES bookings(id)
);

-- Contact messages table
CREATE TABLE contact_messages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(200),
    message TEXT NOT NULL,
    status ENUM('new', 'read', 'replied', 'closed') DEFAULT 'new',
    priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
    assigned_to INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (assigned_to) REFERENCES users(id)
);

-- Newsletter subscribers table
CREATE TABLE newsletter_subscribers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) UNIQUE NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Search history table
CREATE TABLE search_history (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    destination VARCHAR(100),
    duration VARCHAR(50),
    budget VARCHAR(50),
    search_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Sample data insertion
INSERT INTO destinations (name, slug, description, image_url, banner_url, location, province, is_popular) VALUES
('Đà Lạt', 'da-lat', 'Thành phố ngàn hoa với khí hậu mát mẻ quanh năm', 'https://source.unsplash.com/800x600/?da-lat,vietnam', 'https://source.unsplash.com/1600x900/?da-lat,landscape', 'Lâm Đồng', 'Lâm Đồng', TRUE),
('Hạ Long', 'ha-long', 'Kỳ quan thiên nhiên thế giới với hàng nghìn đảo đá vôi', 'https://source.unsplash.com/800x600/?halong-bay,vietnam', 'https://source.unsplash.com/1600x900/?halong-bay,sea', 'Quảng Ninh', 'Quảng Ninh', TRUE),
('Hội An', 'hoi-an', 'Phố cổ quyến rũ với kiến trúc truyền thống độc đáo', 'https://source.unsplash.com/800x600/?hoi-an,lanterns', 'https://source.unsplash.com/1600x900/?hoi-an,night', 'Quảng Nam', 'Quảng Nam', TRUE),
('Phú Quốc', 'phu-quoc', 'Đảo ngọc với những bãi biển tuyệt đẹp', 'https://source.unsplash.com/800x600/?phu-quoc,beach', 'https://source.unsplash.com/1600x900/?phu-quoc,island', 'Kiên Giang', 'Kiên Giang', TRUE),
('Sa Pa', 'sa-pa', 'Vùng núi cao với ruộng bậc thang và văn hóa dân tộc', 'https://source.unsplash.com/800x600/?sapa,vietnam', 'https://source.unsplash.com/1600x900/?sapa,mountain', 'Lào Cai', 'Lào Cai', TRUE),
('Nha Trang', 'nha-trang', 'Thành phố biển với những bãi cát trắng và nước trong xanh', 'https://source.unsplash.com/800x600/?nha-trang,beach', 'https://source.unsplash.com/1600x900/?nha-trang,coast', 'Khánh Hòa', 'Khánh Hòa', TRUE);

INSERT INTO categories (name, slug, description, icon, color) VALUES
('Du lịch biển', 'beach-travel', 'Các combo du lịch biển nghỉ dưỡng', 'fas fa-umbrella-beach', '#00bfff'),
('Du lịch núi', 'mountain-travel', 'Các combo du lịch núi khám phá', 'fas fa-mountain', '#32cd32'),
('Du lịch văn hóa', 'cultural-travel', 'Các combo du lịch văn hóa lịch sử', 'fas fa-landmark', '#ffd700'),
('Du lịch thành phố', 'city-travel', 'Các combo du lịch thành phố hiện đại', 'fas fa-city', '#9370db'),
('Du lịch mạo hiểm', 'adventure-travel', 'Các combo du lịch mạo hiểm khám phá', 'fas fa-hiking', '#ff6347');

-- Create indexes for better performance
CREATE INDEX idx_combos_destination ON combos(destination_id);
CREATE INDEX idx_combos_category ON combos(category_id);
CREATE INDEX idx_combos_active ON combos(is_active);
CREATE INDEX idx_bookings_user ON bookings(user_id);
CREATE INDEX idx_bookings_combo ON bookings(combo_id);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_reviews_combo ON reviews(combo_id);
CREATE INDEX idx_reviews_user ON reviews(user_id);
