// Travel Combo Data
const travelCombos = [
    {
        id: 24,
        title: "Tour Tây Bắc: Hà Nội - Khám Phá Mù Cang Chải - Sapa Mùa Lúa Chín",
        destination: "tay-bac",
        duration: "4 ngày 3 đêm",
        price: "5,900,000",
        originalPrice: "7,200,000",
        image: "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/shutterstock2246073829-1701309980693.jpg",
        images: [
            "https://booking.muongthanh.com/upload_images/images/H%60/mu-cang-chai(1).jpg",
            "https://motogo.vn/wp-content/uploads/2020/02/8545_thu_roi_xach_xe_len_ha_giang_thoi-1.jpg",
            "https://vietsuntravel.com/_next/image?url=https%3A%2F%2Fvietsuntravel.com%2Fassets%2Fuploads%2FChiem_nguong_canh_sac_thien_nhien_ky_vi_tren_dinh_nui_Fansipan_4ab40c265a.png&w=3840&q=75",
            "https://huongnui.vn/wp-content/uploads/2017/12/amthuc.jpg",
            "https://sanvemaybay.vn/includes/uploads/2019/10/T%C3%A2y-B%E1%BA%AFc-m%C3%B9a-l%C3%BAa-ch%C3%ADn2-e1571124733484.jpg"
        ],
        badge: "HOT",
        description: "Khám phá Tây Bắc mùa lúa chín vàng rực rỡ, trải nghiệm văn hóa bản địa, check-in Mù Cang Chải, Sapa, tận hưởng không khí vùng cao và những cảnh đẹp hùng vĩ.",
        features: [
            "Xe du lịch đời mới",
            "Khách sạn 3* tại Sapa",
            "Tham quan Mù Cang Chải",
            "Check-in ruộng bậc thang",
            "Khám phá Sapa mùa lúa chín",
            "Ăn uống đặc sản Tây Bắc"
        ],
        budget: "5-10",
        durationCategory: "4-5",
        highlights: [
            "Ruộng bậc thang Mù Cang Chải",
            "Sapa mùa lúa chín vàng",
            "Trải nghiệm văn hóa dân tộc",
            "Check-in đèo Khau Phạ",
            "Ẩm thực Tây Bắc"
        ],
        itinerary: {
            day1: "Hà Nội - Mù Cang Chải - Check-in ruộng bậc thang - Nghỉ đêm tại Mù Cang Chải",
            day2: "Mù Cang Chải - Đèo Khau Phạ - Sapa - Tham quan bản Cát Cát",
            day3: "Sapa - Chinh phục Fansipan - Thưởng thức đặc sản",
            day4: "Sapa - Tự do mua sắm - Trở về Hà Nội"
        }
    },
    {
        id: 23,
        title: "Tour Hạ Long: Du Thuyền 5 Sao La Casta",
        destination: "ha-long",
        duration: "2 ngày 1 đêm",
        price: "6,900,000",
        originalPrice: "8,200,000",
        image: "https://www.duthuyen-halong.com/sites/t/to/tourduthuyenhalong/uploads/ckfinder/images/signature_view.jpg",
        images: [
            "https://www.duthuyen-halong.com/sites/t/to/tourduthuyenhalong/uploads/ckfinder/images/signature_view.jpg",
            "https://cdn.nhandan.vn/images/1ef398c4e2fb4bf07980a2ded785b3ef6da51f0c0ad991901283c66f347bc9e4d58e4d136e1acc0db3f24dc37fea202906c522dbc4618ece616ac55e7f30c60f8406a232827ab86e3d65c7fe743a016955c126705bce996d098c0f82e90164ad5cfacd5ee898d181029010948d9846a0/z4815475993971-548209818492c12193e9d817277b1dad-2657.jpg",
            "https://booking.muongthanh.com/upload_images/images/H%60/sun-world-ha-long.jpg",
            "https://static.vinwonders.com/production/ha-long-co-gi-choi-banner.jpg",
            "https://hitour.vn/storage/images/upload/tour-du-lich-vinh-ha-long-2-ngay-1-dem-gallery-1666014710-12.webp"
        ],
        badge: "HOT",
        description: "Trải nghiệm nghỉ dưỡng đẳng cấp trên du thuyền 5 sao La Casta, khám phá Vịnh Hạ Long tuyệt đẹp với các dịch vụ sang trọng, ẩm thực đặc sắc và nhiều hoạt động thú vị.",
        features: [
            "Du thuyền 5 sao La Casta",
            "Cabin sang trọng view biển",
            "Ăn uống buffet trên du thuyền",
            "Tham quan Vịnh Hạ Long",
            "Chèo kayak, bơi lội, câu mực",
            "Xe đưa đón Hà Nội - Hạ Long"
        ],
        budget: "5-10",
        durationCategory: "2-3",
        highlights: [
            "Nghỉ dưỡng trên du thuyền 5 sao",
            "Tham quan Vịnh Hạ Long",
            "Chèo kayak, bơi lội, câu mực",
            "Thưởng thức ẩm thực trên du thuyền",
            "Check-in hoàng hôn trên vịnh"
        ],
        itinerary: {
            day1: "Hà Nội - Hạ Long - Check-in du thuyền La Casta - Tham quan Vịnh Hạ Long - Chèo kayak - Ăn tối trên du thuyền",
            day2: "Ăn sáng buffet - Tham quan hang động - Tắm biển - Trở về Hà Nội"
        }
    },
    {
        id: 22,
        title: "Tour Sapa: Hà Nội - Sapa - Moana - Fansipan - Bản Cát Cát",
        destination: "sapa",
        duration: "3 ngày 2 đêm",
        price: "4,900,000",
        originalPrice: "5,800,000",
        image: "https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-anh-sapa.jpg",
        images: [
            "https://khoinguonsangtao.vn/wp-content/uploads/2022/11/hinh-anh-sapa.jpg",
            "https://tapchimoitruong.vn/Lists/Articles/Attachments/47576/sa%20pa.jpg",
            "https://static.vinwonders.com/production/san-may-dinh-fansipan.jpg",
            "https://authenticadventure.com.vn/wp-content/uploads/2024/02/07.jpg",
            "https://en-cdn.nhandan.vn/images/23e44cb0304d465d87982ab4e7c5ac7a1738b5bc206ca3fdcbbec8c3b87425277bebeb6d46e4a067baa0c57a72a206f70e3ad3d86534c8660043a3441fee7016/sa-pa-1-9915.jpg"
        ],
        badge: "HOT",
        description: "Khám phá Sapa với Moana, Fansipan, bản Cát Cát. Combo bao gồm xe giường nằm, khách sạn 3*, vé tham quan và các bữa ăn theo chương trình.",
        features: [
            "Xe giường nằm đời mới",
            "Khách sạn 3* trung tâm",
            "Vé vào Moana",
            "Vé tham quan bản Cát Cát",
            "Ăn sáng buffet",
            "Xe đưa đón tham quan"
        ],
        budget: "5-10",
        durationCategory: "2-3",
        highlights: [
            "Check-in Moana",
            "Chinh phục Fansipan",
            "Tham quan bản Cát Cát",
            "Thưởng thức ẩm thực Sapa",
            "Trải nghiệm không khí vùng cao"
        ],
        itinerary: {
            day1: "Hà Nội - Sapa - Check-in khách sạn - Tham quan Moana",
            day2: "Chinh phục Fansipan - Ăn sáng buffet - Tham quan các điểm nổi bật",
            day3: "Tham quan bản Cát Cát - Tự do mua sắm - Trở về Hà Nội"
        }
    },
    {
        id: 33,
        title: "Combo Sapa: Chinh Phục Đỉnh Fansipan - Bản Cát Cát - Thác Bạc",
        destination: "sapa",
        duration: "3 ngày 2 đêm",
        price: "5,500,000",
        originalPrice: "6,200,000",
        image: "https://static.vinwonders.com/production/fansipan-sapa.jpg",
        images: [
            "https://static.vinwonders.com/production/fansipan-sapa.jpg",
            "https://dulichsapa.org.vn/wp-content/uploads/2019/07/ban-cat-cat-sapa.jpg",
            "https://media.vietravel.com/images/NewsPicture/2022/10/20221018/thac-bac-sapa.jpg"
        ],
        badge: "HOT",
        description: "Chinh phục đỉnh Fansipan, tham quan bản Cát Cát, khám phá Thác Bạc nổi tiếng Sapa.",
        features: [
            "Cáp treo Fansipan",
            "Khách sạn 3* trung tâm",
            "Tham quan bản Cát Cát",
            "Khám phá Thác Bạc",
            "Ăn sáng buffet",
            "Xe đưa đón tham quan"
        ],
        budget: "5-10",
        durationCategory: "2-3",
        highlights: [
            "Đỉnh Fansipan",
            "Bản Cát Cát",
            "Thác Bạc",
            "Ẩm thực vùng cao",
            "Check-in cảnh đẹp Sapa"
        ],
        itinerary: {
            day1: "Hà Nội - Sapa - Fansipan - Check-in khách sạn",
            day2: "Tham quan bản Cát Cát - Khám phá Thác Bạc",
            day3: "Tự do mua sắm - Trở về Hà Nội"
        }
    },
    {
        id: 34,
        title: "Combo Sapa: Trekking Bản Tả Phìn - Hang Tiên - Homestay Độc Đáo",
        destination: "sapa",
        duration: "4 ngày 3 đêm",
        price: "6,800,000",
        originalPrice: "7,800,000",
        image: "https://www.vietnamairlines.com/~/media/SEO-images/2025%20SEO/Traffic%20TA/MB/Ta%20phin%20village/ta-phin-village-thumb.jpg",
        images: [
            "https://www.vietnamairlines.com/~/media/SEO-images/2025%20SEO/Traffic%20TA/MB/Ta%20phin%20village/ta-phin-village-thumb.jpg",
            "https://pvv-photo.phuotvivu.com/res/photo/5/a/4/2/s0x0/hang-tien-7.jpg",
            "https://mia.vn/media/uploads/blog-du-lich/du-lich-van-hoa-01-1715561260.jpeg"
        ],
        badge: "HOT",
        description: "Trekking khám phá bản Tả Phìn, Hang Tiên, trải nghiệm homestay độc đáo và văn hóa bản địa.",
        features: [
            "Trekking bản Tả Phìn",
            "Homestay độc đáo",
            "Tham quan Hang Tiên",
            "Khám phá văn hóa bản địa",
            "Ăn sáng buffet",
            "Xe đưa đón tham quan"
        ],
        budget: "5-10",
        durationCategory: "4-5",
        highlights: [
            "Trekking bản Tả Phìn",
            "Hang Tiên",
            "Homestay Tả Phìn",
            "Ẩm thực vùng cao",
            "Check-in cảnh đẹp Sapa"
        ],
        itinerary: {
            day1: "Hà Nội - Sapa - Trekking bản Tả Phìn - Check-in homestay",
            day2: "Tham quan Hang Tiên - Trải nghiệm homestay",
            day3: "Khám phá văn hóa bản địa - Ăn sáng buffet",
            day4: "Tự do mua sắm - Trở về Hà Nội"
        }
    },
    {
        id: 35,
        title: "Combo Sapa: Khám Phá Núi Hàm Rồng - Bản Tả Van - Chợ Tình",
        destination: "sapa",
        duration: "3 ngày 2 đêm",
        price: "5,200,000",
        originalPrice: "6,000,000",
        image: "https://owa.bestprice.vn/images/destinations/uploads/ham-rong-5f7e8a5a9b49b.jpg",
        images: [
            "https://owa.bestprice.vn/images/destinations/uploads/ham-rong-5f7e8a5a9b49b.jpg",
            "https://ecotour.com.vn/wp-content/uploads/2025/04/khong-gian-nha-o-ban-ta-van.jpg",
            "https://mia.vn/media/uploads/blog-du-lich/kinh-nghiem-di-cho-tinh-sapa-net-dac-sac-trong-van-hoa-vung-cao-01-1624915081.jpeg"
        ],
        badge: "HOT",
        description: "Khám phá núi Hàm Rồng, bản Tả Van, trải nghiệm chợ tình Sapa và văn hóa dân tộc vùng cao.",
        features: [
            "Tham quan núi Hàm Rồng",
            "Khách sạn 3* trung tâm",
            "Tham quan bản Tả Van",
            "Trải nghiệm chợ tình Sapa",
            "Ăn sáng buffet",
            "Xe đưa đón tham quan"
        ],
        budget: "5-10",
        durationCategory: "2-3",
        highlights: [
            "Núi Hàm Rồng",
            "Bản Tả Van",
            "Chợ tình Sapa",
            "Ẩm thực vùng cao",
            "Check-in cảnh đẹp Sapa"
        ],
        itinerary: {
            day1: "Hà Nội - Sapa - Núi Hàm Rồng - Check-in khách sạn",
            day2: "Tham quan bản Tả Van - Trải nghiệm chợ tình Sapa",
            day3: "Tự do mua sắm - Trở về Hà Nội"
        }
    },
    {
        id: 36,
        title: "Combo Sapa: Trekking Bản Lao Chải - Tả Van - Homestay Độc Đáo",
        destination: "sapa",
        duration: "4 ngày 3 đêm",
        price: "6,500,000",
        originalPrice: "7,500,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlfKp_mG7-dwI4CFZFbuxAkQpQHsxq3out8g&s",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlfKp_mG7-dwI4CFZFbuxAkQpQHsxq3out8g&s",
            "https://lethuytravel.com/uploaded/Anh-Cam-Nang/cn-dl-sapa/khamphabantavan-sapa2.jpg",
            "https://kenh14cdn.com/2020/6/28/photo-1-15933193617751504380383.jpg"
        ],
        badge: "HOT",
        description: "Trekking khám phá bản Lao Chải, Tả Van, trải nghiệm homestay độc đáo và văn hóa bản địa.",
        features: [
            "Trekking bản Lao Chải",
            "Homestay độc đáo",
            "Tham quan bản Tả Van",
            "Khám phá văn hóa bản địa",
            "Ăn sáng buffet",
            "Xe đưa đón tham quan"
        ],
        budget: "5-10",
        durationCategory: "4-5",
        highlights: [
            "Trekking bản Lao Chải",
            "Homestay Tả Van",
            "Ẩm thực vùng cao",
            "Check-in cảnh đẹp Sapa",
            "Khám phá văn hóa dân tộc"
        ],
        itinerary: {
            day1: "Hà Nội - Sapa - Trekking bản Lao Chải - Check-in homestay",
            day2: "Tham quan bản Tả Van - Trải nghiệm homestay",
            day3: "Khám phá văn hóa bản địa - Ăn sáng buffet",
            day4: "Tự do mua sắm - Trở về Hà Nội"
        }
    },
    {
        id: 37,
        title: "Combo Sapa: Khám Phá Bản Ý Linh Hồ - Cầu Mây - Thác Tình Yêu",
        destination: "sapa",
        duration: "3 ngày 2 đêm",
        price: "5,700,000",
        originalPrice: "6,700,000",
        image: "https://cdn.justfly.vn/400x300/media/202104/27/1619512556-ban-cat-cat-sapa-10.jpg",
        images: [
            "https://cdn.justfly.vn/400x300/media/202104/27/1619512556-ban-cat-cat-sapa-10.jpg",
            "https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/10_2020/gioi-thieu-ve-cau-may-sapa-min.jpg",
            "https://sinhtour.vn/wp-content/uploads/2022/01/thac-tinh-yeu-sapa-1.jpg"
        ],
        badge: "HOT",
        description: "Khám phá bản Ý Linh Hồ, cầu Mây, thác Tình Yêu nổi tiếng Sapa.",
        features: [
            "Tham quan bản Ý Linh Hồ",
            "Khách sạn 3* trung tâm",
            "Tham quan cầu Mây",
            "Khám phá thác Tình Yêu",
            "Ăn sáng buffet",
            "Xe đưa đón tham quan"
        ],
        budget: "5-10",
        durationCategory: "2-3",
        highlights: [
            "Bản Ý Linh Hồ",
            "Cầu Mây",
            "Thác Tình Yêu",
            "Ẩm thực vùng cao",
            "Check-in cảnh đẹp Sapa"
        ],
        itinerary: {
            day1: "Hà Nội - Sapa - Bản Ý Linh Hồ - Check-in khách sạn",
            day2: "Tham quan cầu Mây - Khám phá thác Tình Yêu",
            day3: "Tự do mua sắm - Trở về Hà Nội"
        }
    },
    {
        id: 31,
        title: "Combo Sapa: Khám Phá Núi Hàm Rồng - Bản Tả Van - Chợ Tình",
        destination: "sapa",
        duration: "3 ngày 2 đêm",
        price: "5,200,000",
        originalPrice: "6,000,000",
        image: "https://thesinhtourism.vn/wp-content/uploads/2024/01/nha-tho-da-sapa-tour-du-lich-sapa-004-20240116.jpg",
        images: [
            "https://thesinhtourism.vn/wp-content/uploads/2024/01/nha-tho-da-sapa-tour-du-lich-sapa-004-20240116.jpg",
            "https://xesaoviet.com.vn/wp-content/uploads/2024/08/canh-dep-sapa-4.jpg",
            
        ],
        badge: "HOT",
        description: "Khám phá núi Hàm Rồng, bản Tả Van, trải nghiệm chợ tình Sapa và văn hóa dân tộc vùng cao.",
        features: [
            "Tham quan núi Hàm Rồng",
            "Khách sạn 3* trung tâm",
            "Tham quan bản Tả Van",
            "Trải nghiệm chợ tình Sapa",
            "Ăn sáng buffet",
            "Xe đưa đón tham quan"
        ],
        budget: "5-10",
        durationCategory: "2-3",
        highlights: [
            "Núi Hàm Rồng",
            "Bản Tả Van",
            "Chợ tình Sapa",
            "Ẩm thực vùng cao",
            "Check-in cảnh đẹp Sapa"
        ],
        itinerary: {
            day1: "Hà Nội - Sapa - Núi Hàm Rồng - Check-in khách sạn",
            day2: "Tham quan bản Tả Van - Trải nghiệm chợ tình Sapa",
            day3: "Tự do mua sắm - Trở về Hà Nội"
        }
    },
    {
        id: 32,
        title: "Combo Sapa: Trekking Bản Lao Chải - Tả Van - Homestay Độc Đáo",
        destination: "sapa",
        duration: "4 ngày 3 đêm",
        price: "6,500,000",
        originalPrice: "7,500,000",
        image: "https://bekatravel.com/wp-content/uploads/2025/01/trekking-o-ban-lao-chai-sapa.jpg",
        images: [
            "https://bekatravel.com/wp-content/uploads/2025/01/trekking-o-ban-lao-chai-sapa.jpg",
           
        ],
        badge: "HOT",
        description: "Trekking khám phá bản Lao Chải, Tả Van, trải nghiệm homestay độc đáo và văn hóa bản địa.",
        features: [
            "Trekking bản Lao Chải",
            "Homestay độc đáo",
            "Tham quan bản Tả Van",
            "Khám phá văn hóa bản địa",
            "Ăn sáng buffet",
            "Xe đưa đón tham quan"
        ],
        budget: "5-10",
        durationCategory: "4-5",
        highlights: [
            "Trekking bản Lao Chải",
            "Homestay Tả Van",
            "Ẩm thực vùng cao",
            "Check-in cảnh đẹp Sapa",
            "Khám phá văn hóa dân tộc"
        ],
        itinerary: {
            day1: "Hà Nội - Sapa - Trekking bản Lao Chải - Check-in homestay",
            day2: "Tham quan bản Tả Van - Trải nghiệm homestay",
            day3: "Khám phá văn hóa bản địa - Ăn sáng buffet",
            day4: "Tự do mua sắm - Trở về Hà Nội"
        }
    },
    {
        id: 21,
        title: "Tour Nha Trang - Đà Lạt: Hà Nội - Tháp Bà Ponagar - Bãi Tranh - Đà Lạt View Coffee - Thung Lũng Tình Yêu",
        destination: "nha-trang",
        duration: "5 ngày 4 đêm",
        price: "7,900,000",
        originalPrice: "9,200,000",
        image: "https://cattour.vn/images/albumProducts/2022/10/20/du-lich-da-lat-2-581.jpg",
        images: [
            "https://cattour.vn/images/albumProducts/2022/10/20/du-lich-da-lat-2-581.jpg",
            "https://storage.googleapis.com/blogvxr-uploads/2025/03/c663ef0c-thap-ba-ponagar-nha-trang-5849686.png",
            "https://owa.bestprice.vn/images/destinations/uploads/bai-tranh-5ea6b45595489.jpg",
            "https://bizweb.dktcdn.net/100/539/761/files/toan-canh-cafe-da-lat-view.jpg?v=1741702148795",
            "https://zoomtravel.vn/upload/news/thung-lung-tinh-yeu03012.jpg"
        ],
        badge: "HOT",
        description: "Hành trình khám phá Nha Trang biển xanh và Đà Lạt mộng mơ, trải nghiệm các điểm đến nổi tiếng như Tháp Bà Ponagar, Bãi Tranh, Đà Lạt View Coffee, Thung Lũng Tình Yêu. Combo bao gồm vé máy bay, khách sạn, các bữa ăn và tour tham quan hấp dẫn.",
        features: [
            "Vé máy bay khứ hồi",
            "Khách sạn 4* Nha Trang & Đà Lạt",
            "Tháp Bà Ponagar",
            "Bãi Tranh",
            "Đà Lạt View Coffee",
            "Thung Lũng Tình Yêu",
            "Ăn sáng buffet",
            "Xe đưa đón tham quan"
        ],
        budget: "5-10",
        durationCategory: "4-5",
        highlights: [
            "Tắm biển Bãi Tranh",
            "Check-in Tháp Bà Ponagar",
            "Thưởng thức cà phê tại Đà Lạt View Coffee",
            "Tham quan Thung Lũng Tình Yêu",
            "Khám phá thành phố biển Nha Trang và Đà Lạt mộng mơ"
        ],
        itinerary: {
            day1: "Hà Nội - Nha Trang - Check-in khách sạn - Tự do tắm biển",
            day2: "Tháp Bà Ponagar - Bãi Tranh - Ăn sáng buffet - Tham quan các điểm nổi bật",
            day3: "Nha Trang - Đà Lạt - Đà Lạt View Coffee - Check-in",
            day4: "Thung Lũng Tình Yêu - Tham quan Đà Lạt",
            day5: "Tự do mua sắm - Ra sân bay về Hà Nội"
        }
    },
    {
        id: 20,
        title: "Tour Đà Lạt: HN - KDL Dapa Hill - Trạm ký ức",
        destination: "da-lat",
        duration: "3 ngày 2 đêm",
        price: "3,990,000",
        originalPrice: "4,990,000",
    image: "https://static.vinwonders.com/production/gioi-thieu-ve-da-lat-1.jpg",
        images: [
            "https://static.vinwonders.com/production/gioi-thieu-ve-da-lat-1.jpg",
            "https://agotourist.com/wp-content/uploads/2023/07/trai-nghiem-tro-choi-truot-phao-kho-air-slide-tai-dapa-hill-dalat.jpg",
            "https://agotourist.com/wp-content/uploads/2023/07/tham-quan-vuon-thu-tai-dapa-hill-dalat.jpg",
            "https://dalatreview.vn/wp-content/uploads/2024/10/463212940_122147849108311133_4900779405689269056_n.jpg",
            "https://mia.vn/media/uploads/blog-du-lich/tram-ky-uc-11-1750319934.jpg"
        ],
        badge: "HOT",
        description: "Khám phá Đà Lạt mộng mơ với các điểm đến mới lạ: Dapa Hill, Trạm ký ức, trải nghiệm không khí se lạnh và cảnh sắc tuyệt đẹp. Combo bao gồm vé máy bay, khách sạn, các bữa ăn và tour tham quan hấp dẫn.",
        features: [
            "Vé máy bay khứ hồi",
            "Khách sạn 3* trung tâm",
            "Tham quan KDL Dapa Hill",
            "Check-in Trạm ký ức",
            "Ăn sáng buffet",
            "Xe đưa đón tham quan"
        ],
        budget: "5-10",
        durationCategory: "2-3",
        highlights: [
            "Check-in Dapa Hill",
            "Trạm ký ức",
            "Thưởng thức ẩm thực Đà Lạt",
            "Tham quan trung tâm thành phố",
            "Trải nghiệm không khí se lạnh"
        ],
        itinerary: {
            day1: "Khởi hành từ HN - Đến Đà Lạt - Check-in khách sạn - Tham quan trung tâm",
            day2: "KDL Dapa Hill - Trạm ký ức - Ăn sáng buffet - Tham quan các điểm nổi bật",
            day3: "Tự do khám phá - Mua sắm đặc sản - Trở về HN"
        }
    },
    {
        id: 8,
        title: "Quy Nhơn Biển Nhớ",
        destination: "quy-nhon",
        duration: "3 ngày 2 đêm",
        price: "5,200,000",
        originalPrice: "6,500,000",
    image: "https://ik.imagekit.io/tvlk/blog/2022/06/dia-diem-du-lich-quy-nhon-2-1024x683.jpg?tr=dpr-2,w-675", // Quy Nhơn
        images: [
            "https://ik.imagekit.io/tvlk/blog/2022/06/dia-diem-du-lich-quy-nhon-2-1024x683.jpg?tr=dpr-2,w-675",
            "https://quynhongo.vn/wp-content/uploads/2019/05/tour-ky-co-eo-gio-tinh-xa-ngoc-hoa-doi-cat-phuong-mai-quynhondailytour.jpg",
            "https://static.vinwonders.com/production/ghenh-rang-tien-sa-banner.jpg",
            "https://boamtra.vn/wp-content/uploads/2024/03/6.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5uUP9pJi7-y6AtQ5ujSjMsd9yamIRMF6l8g&s"
        ],
        badge: "HOT",
        description: "Khám phá thành phố biển Quy Nhơn với bãi biển hoang sơ và ẩm thực miền Trung.",
        features: ["Vé máy bay", "Khách sạn 4*", "Tour Kỳ Co - Eo Gió", "Ẩm thực biển", "Check-in Ghềnh Ráng"],
        budget: "5-10",
        durationCategory: "2-3",
        highlights: [
            "Tắm biển Kỳ Co, Eo Gió",
            "Tham quan Ghềnh Ráng - Tiên Sa",
            "Thưởng thức hải sản tươi sống",
            "Check-in tháp Đôi, chùa Long Khánh",
            "Khám phá làng chài Nhơn Lý"
        ],
        itinerary: {
            day1: "Đến Quy Nhơn - Check-in khách sạn - Ghềnh Ráng - Bãi tắm Hoàng Hậu",
            day2: "Tour Kỳ Co - Eo Gió - Làng chài Nhơn Lý - Hải sản",
            day3: "Tháp Đôi - Chùa Long Khánh - Mua sắm đặc sản - Ra sân bay"
        }
    },
    {
        id: 9,
        title: "Phan Thiết Nắng Gió",
        destination: "phan-thiet",
        duration: "4 ngày 3 đêm",
        price: "5,800,000",
        originalPrice: "7,000,000",
        image: "https://cdn.getyourguide.com/img/location/5a085ded07e17.jpeg", // Phan Thiết
         images: [
            "https://pystravel.vn/_next/image?url=https%3A%2F%2Fbooking.pystravel.vn%2Fuploads%2Fposts%2Falbums%2F17655%2F6ff8788bf078eb8e6f4ca147c39ab98e.jpg&w=1920&q=75",
            "https://ik.imagekit.io/tvlk/blog/2023/10/doi-cat-mui-ne-12.jpg?tr=q-70,c-at_max,w-500,h-250,dpr-2",
            "https://vielimousine.com/wp-content/uploads/2023/10/Lang-Chai-Mui-Ne-3.jpg",
            "https://www.wyndhamhalong.com/uploads/blog/2017/Thang_1/G%E1%BB%A0i-%C3%BD-nh%E1%BB%AFng-%C4%91%E1%BB%8Ba-%C4%91i%E1%BB%83m-th%C6%B0%E1%BB%9Fng-th%E1%BB%A9c-h%E1%BA%A3i-s%E1%BA%A3n-%E1%BB%9F-v%E1%BB%8Bnh-H%E1%BA%A1-Long.jpg",
            "https://media.loveitopcdn.com/41316/kcfinder/upload/images/Po-Sha-Inu-Suzan-Black.jpg"
        ],
        badge: "SALE",
        description: "Tận hưởng nắng vàng, biển xanh và đồi cát bay nổi tiếng tại Phan Thiết.",
        features: ["Resort biển 4*", "Tour Mũi Né", "Đồi cát bay", "Làng chài", "Ẩm thực biển"],
        budget: "under-5",
        durationCategory: "2-3",
        highlights: [
            "Tắm biển Mũi Né",
            "Chinh phục đồi cát bay",
            "Tham quan làng chài",
            "Thưởng thức hải sản tươi sống",
            "Check-in Suối Tiên, tháp Poshanu"
        ],
        itinerary: {
            day1: "Đến Phan Thiết - Check-in resort - Tắm biển Mũi Né",
            day2: "Đồi cát bay - Làng chài",
            day4: "Suối Tiên - Hải sản",
            day5: "Tháp Poshanu - Mua sắm đặc sản - Ra sân bay"
        }
    },
    {
        id: 10,
        title: "Vũng Tàu Biển Gọi",
        destination: "vung-tau",
        duration: "2 ngày 1 đêm",
        price: "2,900,000",
        originalPrice: "3,800,000",
        image: "https://static.vinwonders.com/production/Things-to-do-in-Vung-Tau-banner.jpeg", // Vũng Tàu
        badge: "POPULAR",
        description: "Thành phố biển gần Sài Gòn với bãi biển đẹp, hải sản tươi ngon và nhiều điểm check-in nổi tiếng.",
        features: ["Khách sạn 3*", "Tượng Chúa Kitô", "Bãi Sau", "Ngọn hải đăng", "Ẩm thực biển"],
        budget: "under-5",
        durationCategory: "2-3",
        highlights: [
            "Tắm biển Bãi Sau",
            "Tham quan tượng Chúa Kitô",
            "Check-in ngọn hải đăng Vũng Tàu",
            "Thưởng thức hải sản tươi sống",
            "Dạo biển đêm"
        ],
        itinerary: {
            day1: "Đến Vũng Tàu - Check-in khách sạn - Tắm biển Bãi Sau - Hải sản",
            day2: "Tượng Chúa Kitô - Ngọn hải đăng - Mua sắm đặc sản - Về lại Sài Gòn"
        }
    },
    {
        id: 11,
        title: "Cần Thơ Miệt Vườn",
        destination: "can-tho",
        duration: "3 ngày 2 đêm",
        price: "4,300,000",
        originalPrice: "5,200,000",
    image: "https://scontent.iocvnpt.com/resources/portal/Images/CTO/ttptdl/cho_dem/cho_co_2_copy_733921688.jpg", // Cần Thơ
        badge: "NEW",
        description: "Khám phá miền Tây sông nước với chợ nổi Cái Răng và vườn trái cây trĩu quả.",
        features: ["Vé máy bay", "Khách sạn 4*", "Tour chợ nổi", "Vườn trái cây", "Ẩm thực miền Tây"],
        budget: "under-5",
        durationCategory: "2-3",
        highlights: [
            "Tham quan chợ nổi Cái Răng",
            "Khám phá vườn trái cây Phong Điền",
            "Thưởng thức đặc sản miền Tây",
            "Check-in cầu đi bộ Ninh Kiều",
            "Tham quan nhà cổ Bình Thủy"
        ],
        itinerary: {
            day1: "Đến Cần Thơ - Check-in khách sạn - Dạo bến Ninh Kiều",
            day2: "Chợ nổi Cái Răng - Vườn trái cây Phong Điền - Ẩm thực miền Tây",
            day3: "Nhà cổ Bình Thủy - Mua sắm đặc sản - Ra sân bay"
        }
    },
    {
        id: 7,
        title: "Huế Mộng Mơ",
        destination: "hue",
        duration: "3 ngày 2 đêm",
        price: "4,900,000",
        originalPrice: "6,000,000",
    image: "https://khamphahue.com.vn/Portals/0/Medias/Nam2022/T10/QuanTheDiTichCoDoHue-NgoMonHue_5_10_2022_13_48_46_416_CH.jpg", // Huế
        badge: "HOT",
        description: "Khám phá cố đô Huế với những di sản văn hóa và ẩm thực đặc sắc miền Trung.",
        features: ["Vé máy bay", "Khách sạn 4*", "Vé tham quan Đại Nội", "Ẩm thực cung đình", "Du thuyền sông Hương"],
        budget: "5-10",
        durationCategory: "2-3",
        highlights: [
            "Tham quan Đại Nội Huế và các lăng tẩm",
            "Dạo thuyền trên sông Hương buổi tối",
            "Thưởng thức ẩm thực cung đình",
            "Check-in cầu Tràng Tiền, chợ Đông Ba",
            "Khám phá chùa Thiên Mụ, đồi Vọng Cảnh"
        ],
        itinerary: {
            day1: "Đến Huế - Check-in khách sạn - Tham quan Đại Nội, cầu Tràng Tiền",
            day2: "Lăng Tự Đức - Chùa Thiên Mụ - Du thuyền sông Hương - Ẩm thực cung đình",
            day3: "Chợ Đông Ba - Đồi Vọng Cảnh - Mua sắm đặc sản - Ra sân bay"
        }
    },
    {
        id: 1,
        title: "Đà Lạt Lãng Mạn",
        destination: "da-lat",
        duration: "3 ngày 2 đêm",
        price: "4,500,000",
        originalPrice: "5,500,000",
    image: "https://www.tsttourist.com/vnt_upload/news/09_2022/TSTtourist_da_lat_cuoi_mua_san_may_1.jpg", // Đà Lạt
     images: [
            "https://statics.vinpearl.com/thien-vien-truc-lam-da-lat-2_1690967479.jpg",
            "https://owa.bestprice.vn/images/destinations/uploads/cap-treo-da-lat-5f6ce98590975.jpg",
            "https://du-lich-da-lat.com/wp-content/uploads/2018/11/biet-thu-hang-nga-da-lat-gia-ve.png",
            "https://agotourist.com/wp-content/uploads/2018/04/caffe-me-linh-garden-dalat.jpg",
            "https://owa.bestprice.vn/images/destinations/uploads/dinh-bao-dai-5f7549347a674.jpg"
        ],
        badge: "HOT",
        description: "Khám phá thành phố ngàn hoa với những trải nghiệm lãng mạn tuyệt vời",
        features: ["Vé máy bay", "Khách sạn 4*", "Xe đưa đón", "Ăn sáng", "Tour city"],
        budget: "under-5",
        durationCategory: "2-3",
        highlights: [
            "Tham quan Thiền Viện Trúc Lâm",
            "Đi cáp treo Đà Lạt",
            "Chụp ảnh tại Crazy House",
            "Thưởng thức cà phê tại Mê Linh Coffee Garden",
            "Tham quan Dinh Bảo Đại"
        ],
        itinerary: {
            day1: "Đón tại sân bay - Check-in khách sạn - Tham quan trung tâm thành phố",
            day2: "Tour thiên nhiên - Thác Elephant - Hồ Tuyền Lâm - Thiền Viện Trúc Lâm",
            day3: "Tự do mua sắm - Ra sân bay"
        }
    },
    {
        id: 2,
        title: "Hạ Long Kỳ Thú",
        destination: "ha-long",
        duration: "2 ngày 1 đêm",
        price: "3,200,000",
        originalPrice: "3,800,000",
    image: "https://statics.vinpearl.com/du-lich-vinh-Ha-Long-hinh-anh3_1625912082_1660489377.jpg", // Hạ Long
     images: [
            "https://travelhalong.com.vn/UserFiles/images/Du%20thuy%E1%BB%81n%205%20sao/Heritage/heritage-cruise-1.jpg",
            "https://www.vietnambooking.com/wp-content/uploads/2023/12/hang-sung-sot-4.jpg",
            "https://static-images.vnncdn.net/files/publish/2023/7/20/hon-dao-nam-nghieng-la-mat-khach-ru-nhau-tam-giai-nhiet-leo-nui-o-ha-long-5.jpg?width=0&s=rdOcepPFzi2Po4jTfFF5xQ",
            "https://media.anhp.vn/files/2023/09IMG_6140.jpeg",
            "https://www.dulichbinhthuan.com.vn/UserFiles/images/TOM%20HUM%20WEB.jpg"
        ],
        badge: "SALE",
        description: "Khám phá vịnh Hạ Long - kỳ quan thiên nhiên thế giới với du thuyền sang trọng",
        features: ["Du thuyền 5*", "Buffet hải sản", "Kayak", "Hang Sửng Sốt", "Đảo Titop"],
        budget: "under-5",
        durationCategory: "2-3",
        highlights: [
            "Du ngoạn vịnh Hạ Long trên du thuyền",
            "Tham quan Hang Sửng Sốt",
            "Leo núi tại Đảo Titop",
            "Chèo kayak khám phá hang động",
            "Thưởng thức hải sản tươi sống"
        ],
        itinerary: {
            day1: "Đón tại Hà Nội - Đến Hạ Long - Lên du thuyền - Ăn trưa - Hang Sửng Sốt",
            day2: "Đảo Titop - Kayak - Ăn trưa - Về Hà Nội"
        }
    },
    {
        id: 3,
        title: "Hội An Cổ Kính",
        destination: "hoi-an",
        duration: "4 ngày 3 đêm",
        price: "6,800,000",
        originalPrice: "8,200,000",
    image: "https://danangleisure.com/wp-content/uploads/2023/05/hoi-an-1680591517857660432696-1920x1079.jpeg", // Hội An
     images: [
            "https://hoianmemoriesresort.com/wp-content/uploads/2024/11/pho-co-hoi-an-ve-dem-4-800x600-1.webp",
            "https://eholiday.vn/wp-content/uploads/2023/03/tha-den-hoa-dang-tren-song-Hoai.jpeg",
            "https://baothainguyen.vn/file/oldimage/baothainguyen/UserFiles/image/112844_f3737_hinh2_on.jpg",
            "https://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/150/2017/06/19064605/Cooking-class.jpg",
            "https://statics.vinpearl.com/rung-dua-bay-mau-thumb_1627641941.jpg"
        ],
        badge: "NEW",
        description: "Trải nghiệm phố cổ Hội An với những nét văn hóa truyền thống độc đáo",
        features: ["Resort 5*", "Xe đạp", "Đèn lồng", "Ẩm thực", "Làng gốm Thanh Hà"],
        budget: "5-10",
        durationCategory: "4-5",
        highlights: [
            "Dạo bộ phố cổ Hội An về đêm",
            "Thả đèn hoa đăng trên sông Hoài",
            "Tham quan làng gốm Thanh Hà",
            "Học nấu ăn món Hội An",
            "Tham quan rừng dừa Bảy Mẫu"
        ],
        itinerary: {
            day1: "Bay đến Đà Nẵng - Về Hội An - Check-in resort - Tham quan phố cổ",
            day2: "Làng gốm Thanh Hà - Rừng dừa Bảy Mẫu - Chợ đêm Hội An",
            day3: "Tự do nghỉ dưỡng tại resort - Spa - Thả đèn hoa đăng",
            day4: "Mua sắm - Ra sân bay về"
        }
    },
    {
        id: 4,
        title: "Phú Quốc Thiên Đường",
        destination: "phu-quoc",
        duration: "5 ngày 4 đêm",
        price: "12,500,000",
        originalPrice: "15,000,000",
    image: "https://evivatour.com/wp-content/uploads/2021/08/Long-Beach-in-Phu-Quoc-Island.jpg", // Phú Quốc
        badge: "LUXURY",
        description: "Nghỉ dưỡng tại đảo ngọc Phú Quốc với những bãi biển tuyệt đẹp",
        features: ["Resort 5*", "Buffet sáng", "Spa", "Cáp treo", "Safari", "Sunset Town"],
        budget: "10-20",
        durationCategory: "4-5",
        highlights: [
            "Tham quan Vinpearl Safari Phú Quốc",
            "Đi cáp treo Hon Thom dài nhất thế giới",
            "Nghỉ dưỡng tại resort 5 sao",
            "Khám phá Sunset Town về đêm",
            "Thưởng thức hải sản tươi sống"
        ],
        itinerary: {
            day1: "Bay đến Phú Quốc - Check-in resort - Nghỉ ngơi",
            day2: "Vinpearl Safari - Cáp treo Hon Thom - Sunset Town",
            day3: "Tour 4 đảo - Lặn ngắm san hô - Câu cá",
            day4: "Spa - Nghỉ dưỡng tại resort - Mua sắm",
            day5: "Tự do - Ra sân bay về"
        }
    },
    {
        id: 5,
        title: "Sa Pa Hùng Vĩ",
        destination: "sapa",
        duration: "3 ngày 2 đêm",
        price: "4,200,000",
        originalPrice: "5,000,000",
    image: "https://mettavoyage.com/wp-content/uploads/2023/01/sapa3.jpg", // Sa Pa
        badge: "TRENDING",
        description: "Chinh phục đỉnh Fansipan và khám phá văn hóa các dân tộc thiểu số",
        features: ["Khách sạn 4*", "Cáp treo Fansipan", "Bản Cát Cát", "Tàu hỏa", "Trekking"],
        budget: "under-5",
        durationCategory: "2-3",
        highlights: [
            "Chinh phục đỉnh Fansipan bằng cáp treo",
            "Trekking qua ruộng bậc thang Mường Hoa",
            "Tham quan bản Cát Cát",
            "Khám phá chợ tình Sa Pa",
            "Thưởng thức ẩm thực núi rừng"
        ],
        itinerary: {
            day1: "Tàu hỏa từ Hà Nội - Đến Sa Pa - Check-in - Tham quan thị trấn",
            day2: "Cáp treo Fansipan - Bản Cát Cát - Chợ tình Sa Pa",
            day3: "Trekking ruộng bậc thang - Về Hà Nội"
        }
    },
    {
        id: 6,
        title: "Nha Trang Biển Xanh",
        destination: "nha-trang",
        duration: "4 ngày 3 đêm",
        price: "7,800,000",
        originalPrice: "9,200,000",
    image: "https://vietnamtour.in/wp-content/uploads/VNIN_Nha-Trang_6.jpg", // Nha Trang
        badge: "POPULAR",
        description: "Tận hưởng biển xanh cát trắng Nha Trang với các hoạt động thể thao biển",
        features: ["Resort biển 4*", "Tour 4 đảo", "Lặn biển", "Tắm bùn", "Vinpearland"],
        budget: "5-10",
        durationCategory: "4-5",
        highlights: [
            "Tour 4 đảo Nha Trang",
            "Lặn ngắm san hô tại Hòn Mun",
            "Tắm bùn khoáng I-Resort",
            "Vui chơi tại Vinpearland",
            "Thưởng thức hải sản bãi biển"
        ],
        itinerary: {
            day1: "Bay đến Nha Trang - Check-in resort - Nghỉ ngơi tại bãi biển",
            day2: "Tour 4 đảo - Lặn ngắm san hô - Câu cá",
            day3: "Vinpearland - Tắm bùn khoáng - Massage",
            day4: "Tự do - Mua sắm - Ra sân bay"
        }
    }
];

// DOM Elements
const comboGrid = document.getElementById('combo-results');
const modal = document.getElementById('combo-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const destinationCards = document.querySelectorAll('.destination-card');

// -------- AI/ML Personalization (lightweight, on-device) --------
const PERSONALIZATION_KEY = 'tc_profile_v1';
function loadProfile() {
    try { return JSON.parse(localStorage.getItem(PERSONALIZATION_KEY)) || {}; } catch { return {}; }
}
function saveProfile(p) {
    localStorage.setItem(PERSONALIZATION_KEY, JSON.stringify(p));
}
function updateAffinity(type, key, amount = 1) {
    const p = loadProfile();
    p[type] = p[type] || {};
    p[type][key] = (p[type][key] || 0) + amount;
    // decay nhẹ để tránh lệch nặng theo thời gian
    if (Math.random() < 0.1) {
        for (const t of Object.keys(p)) {
            for (const k of Object.keys(p[t])) p[t][k] *= 0.98;
        }
    }
    saveProfile(p);
}

// Tính điểm cá nhân hóa cho combo
function personalizationScore(combo) {
    const p = loadProfile();
    let s = 0;
    // sở thích theo điểm đến
    if (p.destination && combo.destination && p.destination[combo.destination]) s += p.destination[combo.destination] * 3;
    // sở thích theo ngân sách
    if (p.budget && combo.budget && p.budget[combo.budget]) s += p.budget[combo.budget] * 2;
    // sở thích theo thời lượng
    if (p.duration && combo.durationCategory && p.duration[combo.durationCategory]) s += p.duration[combo.durationCategory] * 1.5;
    // sở thích theo từ khóa nổi bật (features)
    if (p.features && combo.features) {
        for (const f of combo.features) {
            const key = f.toLowerCase();
            if (p.features[key]) s += p.features[key] * 0.8;
        }
    }
    // sở thích theo highlights
    if (p.highlights && combo.highlights) {
        for (const h of combo.highlights) {
            const key = h.toLowerCase();
            if (p.highlights[key]) s += p.highlights[key] * 0.5;
        }
    }
    return s;
}

// Ghi nhận tương tác (xem chi tiết, đặt tour, chọn bộ lọc, click destination card)
function trackInteraction(evt, data = {}) {
    try {
        switch (evt) {
            case 'view_combo':
                updateAffinity('destination', data.destination, 2);
                if (Array.isArray(data.features)) data.features.forEach(f => updateAffinity('features', f.toLowerCase(), 0.6));
                if (Array.isArray(data.highlights)) data.highlights.forEach(h => updateAffinity('highlights', h.toLowerCase(), 0.4));
                break;
            case 'book_combo':
                updateAffinity('destination', data.destination, 4);
                updateAffinity('budget', data.budget, 2);
                updateAffinity('duration', data.durationCategory, 2);
                break;
            case 'set_filter':
                if (data.destination) updateAffinity('destination', data.destination, 1);
                if (data.budget) updateAffinity('budget', data.budget, 1);
                if (data.duration) updateAffinity('duration', data.duration, 1);
                break;
            case 'click_destination_card':
                if (data.destination) updateAffinity('destination', data.destination, 1.5);
                break;
        }
    } catch {}
}

// Initialize website
document.addEventListener('DOMContentLoaded', function() {
    // Lần đầu hiển thị: sắp xếp theo cá nhân hóa nếu có lịch sử
    const initial = [...travelCombos].sort((a, b) => personalizationScore(b) - personalizationScore(a));
    displayCombos(initial);

    initializeEventListeners();
    initializeNavigation();
    initializeDestinationCards();

    const authLink = document.getElementById('auth-link');

    if (authLink) {
        authLink.addEventListener('click', function(event) {
            event.preventDefault();

            const loggedInUser = localStorage.getItem('loggedInUser');
            if (loggedInUser && localStorage.getItem('user_' + loggedInUser)) {
                const user = JSON.parse(localStorage.getItem('user_' + loggedInUser));

                const userInfoHtml = `
                    <div class="user-info">
                        <h3>Thông tin khách hàng</h3>
                        <p><strong>Tên:</strong> ${user.username}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <button id="logout-btn">Đăng xuất</button>
                    </div>
                `;

                const modal = document.createElement('div');
                modal.classList.add('user-modal');
                modal.innerHTML = userInfoHtml;
                document.body.appendChild(modal);

                const logoutBtn = document.getElementById('logout-btn');
                logoutBtn.addEventListener('click', function() {
                    localStorage.removeItem('loggedInUser');
                    window.location.reload();
                });

                modal.addEventListener('click', function(e) {
                    if (e.target === modal) {
                        modal.remove();
                    }
                });
            } else {
                alert('Bạn chưa đăng nhập. Vui lòng đăng nhập để tiếp tục.');
            }
        });
    }
});

// Display combo cards
function displayCombos(combos) {
    const grid = document.getElementById('combo-results');
    if (!grid) return;

    grid.innerHTML = '';

    if (!Array.isArray(combos) || combos.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <h3>Không tìm thấy combo phù hợp</h3>
                <p>Hãy thử thay đổi tiêu chí tìm kiếm của bạn</p>
            </div>
        `;
        return;
    }

    combos.forEach(combo => {
        const comboCard = createComboCard(combo);
        grid.appendChild(comboCard);
    });
}

// Create combo card element
function createComboCard(combo) {
    const card = document.createElement('div');
    card.className = 'combo-card';
    card.onclick = () => { trackInteraction('view_combo', { destination: combo.destination, features: combo.features, highlights: combo.highlights }); showComboDetails(combo); };

    card.innerHTML = `
        <div class="combo-image" style="background-image: url('${getComboImageUrl(combo, 800, 500)}')">
            <div class="combo-badge">${combo.badge}</div>
        </div>
        <div class="combo-info">
            <h3>${combo.title}</h3>
            <p>${combo.description}</p>
            <div class="combo-details">
                <div class="combo-duration">
                    <i class="fas fa-clock"></i>
                    <span>${combo.duration}</span>
                </div>
                <div class="combo-price">
                    <span style="text-decoration: line-through; font-size: 0.9rem; color: #999;">${formatPrice(combo.originalPrice)}đ</span>
                    <span>${formatPrice(combo.price)}đ</span>
                </div>
            </div>
            <div class="combo-features">
                ${combo.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
            </div>
            <button class="combo-btn" onclick="event.stopPropagation(); trackInteraction('view_combo', { destination: '${combo.destination}' }); window.location.href='tour-detail.html?id=' + ${combo.id}">
                <i class="fas fa-calendar-check"></i>
                Xem Tour
            </button>
        </div>
    `;

    return card;
}

// Get destination color for card background
function getDestinationColor(destination) {
    const colors = {
        'da-lat': '#ff69b4',
        'ha-long': '#20b2aa',
        'hoi-an': '#ffd700',
        'phu-quoc': '#00bfff',
        'sapa': '#32cd32',
        'nha-trang': '#87ceeb',
        'da-nang': '#ff6347',
        'ho-chi-minh': '#9370db'
    };
    return colors[destination] || '#667eea';
}

// Format price with thousand separators
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Search combos based on criteria
async function searchCombos() {
    let destination = document.getElementById('destination-select').value;
    const duration = document.getElementById('duration-select').value || '2-3';
    const budget = document.getElementById('budget-select').value;

    // Nếu chưa chọn combobox, lấy từ input và chuyển sang slug
    if (!destination) {
        const input = document.getElementById('searchInput');
        const kw = (input?.value || '').trim().toLowerCase();
        if (kw) {
            // destMap lấy từ window nếu có, hoặc định nghĩa lại
            const destMap = window.destMap || {
                "đà lạt":"da-lat","da lat":"da-lat",
                "đà nẵng":"da-nang","da nang":"da-nang",
                "hạ long":"ha-long","ha long":"ha-long",
                "hội an":"hoi-an","hoi an":"hoi-an",
                "phú quốc":"phu-quoc","phu quoc":"phu-quoc",
                "sa pa":"sapa","sapa":"sapa",
                "nha trang":"nha-trang",
                "vũng tàu":"vung-tau","vung tau":"vung-tau",
                "cần thơ":"can-tho","can tho":"can-tho",
                "huế":"hue","hue":"hue",
                "tp. hồ chí minh":"ho-chi-minh","hồ chí minh":"ho-chi-minh","ho chi minh":"ho-chi-minh",
                "quy nhơn":"quy-nhon","quy nhon":"quy-nhon",
                "phan thiết":"phan-thiet","phan thiet":"phan-thiet"
            };
            for (const key in destMap) {
                if (kw.includes(key)) { destination = destMap[key]; break; }
            }
        }
    }

    // Lưu tương tác để học sở thích
    trackInteraction('set_filter', { destination, duration, budget });

    // Loading UI
    const grid = document.getElementById('combo-results');
    if (grid) grid.innerHTML = '<div class="loading-container" style="text-align: center; padding: 3rem;"><div class="loading"></div><p style="margin-top: 1rem;">Đang tìm kiếm combo phù hợp...</p></div>';

    let dynamicCombos = [];
    try {
        if (destination) {
            const params = new URLSearchParams({ dest: destination, origin: 'HAN', duration, adults: '2', rooms: '1', currency: 'VND', locale: 'vi' });
            const res = await fetch(`http://localhost:4000/api/combos/generate?${params.toString()}`);
            if (res.ok) {
                const json = await res.json();
                if (Array.isArray(json?.combos)) dynamicCombos = json.combos;
            }
        }
    } catch (e) {
        // Bỏ qua nếu API không sẵn sàng
    }

    // Fallback về dữ liệu tĩnh nếu API không trả về
    let resultCombos = dynamicCombos.length ? dynamicCombos : travelCombos;

    // Lọc theo tiêu chí nếu dùng fallback tĩnh
    if (!dynamicCombos.length) {
        if (destination) resultCombos = resultCombos.filter(c => c.destination === destination);
        if (duration) resultCombos = resultCombos.filter(c => c.durationCategory === duration);
        if (budget) resultCombos = resultCombos.filter(c => c.budget === budget);
    }

    // Xếp hạng theo cá nhân hóa
    resultCombos = [...resultCombos].sort((a, b) => personalizationScore(b) - personalizationScore(a));

    // Render
    displayCombos(resultCombos);

    // Scroll to results
    document.getElementById('combos').scrollIntoView({ behavior: 'smooth' });
}

// Show combo details in modal
function showComboDetails(combo) {
    // Ghi nhận người dùng xem chi tiết combo để học sở thích
    trackInteraction('view_combo', { destination: combo.destination, features: combo.features, highlights: combo.highlights });

    // Mặc định các combo khác
    modalBody.innerHTML = `
        <div class="combo-detail-header">
            <div class="combo-detail-image" style="background-image: url('${getComboImageUrl(combo, 1200, 600)}'); height: 300px; background-size: cover; background-position: center; border-radius: 15px; margin-bottom: 2rem; position: relative;">
                <div class="combo-badge" style="position: absolute; top: 15px; right: 15px;">${combo.badge}</div>
            </div>
            <div class="combo-detail-info">
                <h2>${combo.title}</h2>
                <p style="font-size: 1.1rem; color: #666; margin-bottom: 1.5rem;">${combo.description}</p>
            </div>
        </div>
        <div class="combo-detail-content">
            <div class="detail-section">

            </div>
            <!-- Đặc điểm nổi bật -->
            <div class="combo-features" style="margin: 18px 0 18px 0;">
                <span style="font-weight:600; color:#333;">Đặc điểm nổi bật:</span>
                ${combo.features.map(f => `<span style='background:#e3edfc;color:#2c5aa0;padding:6px 14px;border-radius:8px;margin:4px 6px 4px 0;display:inline-block;font-size:0.98rem;'>${f}</span>`).join('')}
            </div>
            <!-- Form đặt tour và nút Đặt Tour -->
            <div class="booking-form">
            </div>
            <!-- Đánh giá & Nhận xét từ khách hàng đặt ngay sau nút Đặt Tour -->
            <div class="customer-reviews" style="margin: 30px 0 0 0;">
                <h3 style="font-size: 1.1rem; color: #2c5aa0; margin-bottom: 10px;">Đánh giá & Nhận xét từ khách hàng</h3>
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                    <span style="color: #FFD700; font-size: 1.3rem;">★ ★ ★ ★ ☆</span>
                    <span style="color: #666; font-size: 1rem;">4.7/5 (128 đánh giá)</span>
                </div>
                <div style="background: #f8f8f8; border-radius: 8px; padding: 12px; margin-bottom: 8px;">
                    <strong>Nguyễn Văn A</strong> <span style="color: #FFD700;">★★★★★</span>
                    <div style="font-size: 0.98rem; color: #444; margin-top: 4px;">Tour rất tuyệt vời, hướng dẫn viên nhiệt tình, cảnh đẹp và dịch vụ tốt. Sẽ quay lại Sapa lần nữa!</div>
                </div>
                <div style="background: #f8f8f8; border-radius: 8px; padding: 12px; margin-bottom: 8px;">
                    <strong>Trần Thị B</strong> <span style="color: #FFD700;">★★★★☆</span>
                    <div style="font-size: 0.98rem; color: #444; margin-top: 4px;">Combo hợp lý, lịch trình thú vị, khách sạn sạch sẽ. Rất hài lòng!</div>
                </div>
                <div style="background: #f8f8f8; border-radius: 8px; padding: 12px; margin-bottom: 8px;">
                    <strong>Lê Minh C</strong> <span style="color: #FFD700;">★★★★★</span>
                    <div style="font-size: 0.98rem; color: #444; margin-top: 4px;">Dịch vụ tốt, giá hợp lý, cảnh quan Sapa đẹp xuất sắc!</div>
                </div>
            </div>
        </div>
                <h3><i class="fas fa-star"></i> Điểm nổi bật</h3>
                <ul>
                    ${combo.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-calendar-alt"></i> Lịch trình</h3>
                <div class="itinerary">
                    ${Object.entries(combo.itinerary).map(([day, activity], index) => `
                        <div class="itinerary-day">
                            <div class="day-number">Ngày ${index + 1}</div>
                            <div class="day-activity">${activity}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-check-circle"></i> Dịch vụ bao gồm</h3>
                <div class="features-grid">
                    ${combo.features.map(feature => `<div class="feature-item"><i class="fas fa-check"></i> ${feature}</div>`).join('')}
                </div>

                ${(combo.destination === 'sapa') ? `
                <div class="detail-section" style="margin-top:2rem;">
                    <h3><i class="fas fa-info-circle"></i> Thông tin cần lưu ý</h3>
                    <div class="note-tabs" style="display:flex;gap:8px;margin-bottom:1rem;">
                        <span style="background:#e3f2fd;color:#1976d2;padding:6px 16px;border-radius:8px;font-weight:600;">Giá bao gồm</span>
                    </div>
                    <div style="background:#fafbfc;padding:1.2rem 1.5rem;border-radius:10px;line-height:1.7;">
                        <b>Vận Chuyển:</b><br>
                        - Xe giường nằm đời mới vận chuyển đưa đón Hà Nội – Sapa – Hà Nội. (không có HDV trên xe)<br>
                        - Xe đưa đón tại Sapa theo lịch trình<br><br>
                        <b>Lưu Trú:</b><br>
                        - 02 đêm nghỉ tại khách sạn 3 sao địa phương: 2 khách/1 phòng; Lẻ ngủ 3 khách/1 phòng.<br><br>
                        <b>Khác:</b><br>
                        - Các bữa ăn theo chương trình.<br>
                        - Vé vào cửa tại Moana<br>
                        - Vé thăm quan bản Cát Cát<br>
                        - Thuế VAT.<br><br>
                        Hướng Dẫn Viên (HDV) sẽ liên lạc với Quý Khách khoảng 1 ngày trước khi khởi hành để sắp xếp giờ đón và cung cấp các thông tin cần thiết cho chuyến đi.
                    </div>
                </div>
                ` : ''}

                ${(combo.id === 23) ? `
                <div class="detail-section" style="margin-top:2rem;">
                    <h3><i class="fas fa-info-circle"></i> Thông tin cần lưu ý</h3>
                    <div class="note-tabs" style="display:flex;gap:8px;margin-bottom:1rem;">
                        <span style="background:#e3f2fd;color:#1976d2;padding:6px 16px;border-radius:8px;font-weight:600;">Giá bao gồm</span>
               </div>
                    <div style="background:#fafbfc;padding:1.2rem 1.5rem;border-radius:10px;line-height:1.7;">
                        <b>Vận Chuyển:</b><br>
                        - Xe Limousine 2 chiều Hà Nội – Hạ Long – Hà Nội<br>
                        - Thăm quan vịnh Hạ Long 7-8 tiếng trên Du thuyền 5 sao La Casta Daily Cruise<br><br>
                        <b>Khác:</b><br>
                        - 01 bữa ăn trưa Buffet cao cấp trên du thuyền.<br>
                        - Hướng dẫn viên tiếng Anh, tiếng Việt trên Du thuyền.<br>
                        - Vé thăm quan trọn gói trong chương trình<br>
                        - Chèo kayaking, hoặc đi thuyền nan thăm Hang Luồn<br>
                        - Các hoạt động trên tàu: Sunset party, bể sục Jacuzzi.<br>
                        - Tổ chức sinh nhật cho khách trong chương trình Sunset party (miễn phí).<br>
                        - Thuế VAT.<br><br>
                        - Hướng Dẫn Viên (HDV) sẽ liên lạc với Quý Khách 1 ngày trước khi khởi hành để sắp xếp giờ đón và cung cấp các thông tin cần thiết cho chuyến đi.
                    </div>
                </div>
                ` : (combo.destination === 'ha-long') ? `
                <div class="detail-section" style="margin-top:2rem;">
                    <h3><i class="fas fa-info-circle"></i> Thông tin cần lưu ý</h3>
                    <div class="note-tabs" style="display:flex;gap:8px;margin-bottom:1rem;">
                        <span style="background:#e3f2fd;color:#1976d2;padding:6px 16px;border-radius:8px;font-weight:600;">Giá bao gồm</span>
                   
                    </div>
                    <div style="background:#fafbfc;padding:1.2rem 1.5rem;border-radius:10px;line-height:1.7;">
                        - Xe ô tô máy lạnh từ 7 - 45 chỗ (tùy lượng khách) đưa đón theo lịch trình.<br>
                        <i>(Lưu ý: do tính chất đặc thù của tour nên trên xe ô tô đưa đón Yên Tử - Hà Nội sẽ đi xe ghép và không có hướng dẫn viên trên xe. Trên xe cũng không có nước uống phục vụ miễn phí.)</i><br>
                        - Tàu thăm Vịnh Hạ Long (loại tàu sắt 48 chỗ mới đẹp).<br>
                        - Vé thăm Vịnh và vé Yên Tử.<br>
                        <i>(Lưu ý: Tùy thuộc từng thời điểm, với chính sách giá vé khác nhau sẽ có điều chỉnh phụ thu nếu giá vé tăng hoặc giảm trừ nếu giá vé được giảm theo đúng tình hình thực tế tại thời điểm đi tour.)</i><br>
                        - 02 đêm ngủ khách sạn 3 sao, ngủ 02 khách/phòng (lẻ ghép ngủ 3).<br>
                        - Các bữa ăn theo chương trình.<br>
                        - Vé thăm Vịnh và Tàu thăm Vịnh Hạ Long.<br>
                        - Hướng dẫn viên phục vụ đoàn khi đi thăm Vịnh Hạ Long (trong thời gian Quý khách ăn nghỉ tại khách sạn sẽ chỉ có nhân viên khách sạn phục vụ, Quý khách sẽ tự do vui chơi theo sự gợi ý của chúng tôi).<br>
                        - Hướng dẫn viên local đón và phục vụ đoàn tại Yên Tử.<br>
                        - Nước uống phục vụ trên xe, 01 chai/người/tour (cho ngày đi thăm Vịnh).<br>
                        - Thuế VAT.<br>
                        - Hướng Dẫn Viên (HDV) sẽ liên lạc với Quý Khách khoảng 1 ngày trước khi khởi hành để sắp xếp giờ đón và cung cấp các thông tin cần thiết cho chuyến đi.
                    </div>
                </div>
                ` : ''}
                </div>

                ${(combo.destination === 'da-lat') ? `
                <div class="detail-section" style="margin-top:2rem;">
                    <h3><i class="fas fa-info-circle"></i> Thông tin cần lưu ý</h3>
                    <div class="note-tabs" style="display:flex;gap:8px;margin-bottom:1rem;">
                        <span style="background:#e3f2fd;color:#1976d2;padding:6px 16px;border-radius:8px;font-weight:600;">Giá bao gồm</span>
                    
                    </div>
                    <div style="background:#fafbfc;padding:1.2rem 1.5rem;border-radius:10px;line-height:1.7;">
                        <b>Vận chuyển:</b><br>
                        - Xe giường nằm 40 - 44 chỗ phục vụ suốt tuyến tour.<br><br>
                        <b>Lưu trú:</b><br>
                        - Khách sạn tiêu chuẩn 2* địa phương (2,4 khách/phòng).<br><br>
                        <b>Khác:</b><br>
                        - Ăn uống theo chương trình.<br>
                        - HDV tiếng Việt vui vẻ, nhiệt tình.<br>
                        - Vé tham quan vào cổng tại tất cả các điểm theo chương trình.<br>
                        - Quà tặng: Nón du lịch, 1 chai nước suối và 1 khăn lạnh/khách/ngày.<br>
                        - Bảo hiểm du lịch với mức bồi thường cao nhất 30.000.000đ/người/vụ.<br>
                        - Thuế VAT.<br>
                        - Hướng Dẫn Viên (HDV) sẽ liên lạc với Quý Khách khoảng 1 ngày trước khi khởi hành để sắp xếp giờ đón và cung cấp các thông tin cần thiết cho chuyến đi.
                    </div>
                </div>
                ` : ''}
                </div>

                ${(combo.destination === 'hue') ? `
                <div class="detail-section" style="margin-top:2rem;">
                    <h3><i class="fas fa-info-circle"></i> Thông tin cần lưu ý</h3>
                    <div class="note-tabs" style="display:flex;gap:8px;margin-bottom:1rem;">
                        <span style="background:#e3f2fd;color:#1976d2;padding:6px 16px;border-radius:8px;font-weight:600;">Giá bao gồm</span>
 
                    </div>
                    <div style="background:#fafbfc;padding:1.2rem 1.5rem;border-radius:10px;line-height:1.7;">
                        <b>Vận Chuyển:</b><br>
                        - Xe đời mới máy lạnh 16-30 Chỗ, đón khách theo chương trình.<br>
                        - Vé máy bay khứ hồi SGN-DAD-SGN bao gồm 7kg xách tay + 20kg ký gửi<br><br>
                        <b>Lưu Trú:</b><br>
                        - Khách sạn 3* tại Huế (1 đêm): 2-3 khách/phòng<br>
                        <b>Khác:</b><br>
                        - Vé tham quan: các điểm tham quan trong chương trình.<br>
                        - Bảo hiểm 50.000.000 đ/Người/trường hợp.<br>
                        - Hướng dẫn viên nhiệt tình, vui vẻ.<br>
                        - Nước suối, khăn lạnh.<br>
                        - HDV liên hệ trước khởi hành 2-3 ngày, sắp xếp đón và cung cấp thông tin. HDV hỗ trợ làm thủ tục hàng không, nhận phòng và sắp xếp bữa ăn.
                    </div>
                </div>
                ` : ''}
                </div>

                ${(combo.destination === 'can-tho') ? `
                <div class="detail-section" style="margin-top:2rem;">
                    <h3><i class="fas fa-info-circle"></i> Thông tin cần lưu ý</h3>
                    <div class="note-tabs" style="display:flex;gap:8px;margin-bottom:1rem;">
                        <span style="background:#e3f2fd;color:#1976d2;padding:6px 16px;border-radius:8px;font-weight:600;">Giá bao gồm</span>
                       
                    </div>
                    <div style="background:#fafbfc;padding:1.2rem 1.5rem;border-radius:10px;line-height:1.7;">
                        <b>Vận Chuyển:</b><br>
                        - Vận chuyển: Xe du lịch máy lạnh đưa đón tham quan theo chương trình.<br>
                        - Tàu du ngoạn trên sông, đi đò chèo, ăn trái cây, uống trà mật ong, nghe đờn ca tài tử.<br><br>
                        <b>Lưu Trú:</b><br>
                        - Khách sạn 3 sao địa phương (2 khách/phòng hoặc 3 khách/phòng).<br><br>
                        <b>Khác:</b><br>
                        - Ăn uống theo chương trình.<br>
                        - Hướng dẫn viên nhiệt tình, vui vẻ trò chơi sinh hoạt suốt tuyến..<br>
                        - Vé tham quan, thuyền tham quan theo chương trình.<br>
                        - Bảo hiểm du lịch với mức bồi thường cao nhất 10.000.000đ/vụ.<br>
                        - Nước suối: 01 chai 0,5L/ ngày/ khách.<br>
                        - Quà tặng nón du lịch.<br>
                        - Thuế VAT.<br>
                        - Hướng Dẫn Viên (HDV) sẽ liên lạc với Quý Khách khoảng 1 ngày trước khi khởi hành để sắp xếp giờ đón và cung cấp các thông tin cần thiết cho chuyến đi.
                    </div>
                </div>
                ` : ''}
                </div>

                ${(combo.destination === 'vung-tau') ? `
                <div class="detail-section" style="margin-top:2rem;">
                    <h3><i class="fas fa-info-circle"></i> Thông tin cần lưu ý</h3>
                    <div class="note-tabs" style="display:flex;gap:8px;margin-bottom:1rem;">
                        <span style="background:#e3f2fd;color:#1976d2;padding:6px 16px;border-radius:8px;font-weight:600;">Giá bao gồm</span>
                    
                    </div>
                    <div style="background:#fafbfc;padding:1.2rem 1.5rem;border-radius:10px;line-height:1.7;">
                        <b>Vận Chuyển:</b><br>
                        - Xe du lịch 16 - 45 chỗ (phù hợp số lượng), đời mới máy lạnh, ghế bật, phục vụ đưa đón đoàn suốt tuyến.<br><br>
                        <b>Lưu trú:</b><br>
                        - Resort Vietsovpetro 4* Tiêu chuẩn 2 - 3 khách/phòng.<br><br>
                        <b>Khác:</b><br>
                        - Ăn uống theo lịch trình tham quan.<br>
                        - HDV tiếng Việt thuyết minh và phục vụ đoàn tham quan suốt tuyến.<br>
                        - Vé tham quan 1 lần.<br>
                        - Bảo hiểm du lịch theo quy định của Bảo hiểm du lịch 50.000.000đ/vụ.<br>
                        - Thuế VAT.<br>
                        - Hướng Dẫn Viên (HDV) sẽ liên lạc với Quý Khách khoảng 1 ngày trước khi khởi hành để sắp xếp giờ đón và cung cấp các thông tin cần thiết cho chuyến đi.
                    </div>
                </div>
                ` : ''}
                </div>

                ${(combo.destination === 'phan-thiet') ? `
                <div class="detail-section" style="margin-top:2rem;">
                    <h3><i class="fas fa-info-circle"></i> Thông tin cần lưu ý</h3>
                    <div class="note-tabs" style="display:flex;gap:8px;margin-bottom:1rem;">
                        <span style="background:#e3f2fd;color:#1976d2;padding:6px 16px;border-radius:8px;font-weight:600;">Giá bao gồm</span>
                    </div>
                    <div style="background:#fafbfc;padding:1.2rem 1.5rem;border-radius:10px;line-height:1.7;">
                        <b>Vận chuyển:</b><br>
                        - Xe du lịch 16 - 45 chỗ (phù hợp số lượng) đời mới, máy lạnh, ghế bật.<br>
                        - Xe jeep tham quan cung đường biển.<br><br>
                        <b>Lưu trú:</b><br>
                        - Resort 3*: PALMIRA, PACIFIC hoặc tương đương. Tiêu chuẩn 3, 4 khách/ phòng. Tiện nghi: máy lạnh, tivi, vệ sinh...<br><br>
                        <b>Khác:</b><br>
                        - Ăn uống nhà hàng địa phương tiêu chuẩn, hợp vệ sinh.<br>
                        - Đoàn có HDV tiếng Việt thuyết minh và phục vụ Đoàn tham quan suốt tuyến.<br>
                        - Bảo hiểm theo quy định của Bảo hiểm du lịch 50.000.000vnđ/vụ.<br>
                        - Bao gồm phí vào cổng tại các điểm tham quan theo chương trình.<br>
                        - Quà tặng: Nón du lịch, khăn ướt và nước đóng chai.<br>
                        - Hướng Dẫn Viên (HDV) sẽ liên lạc với Quý Khách khoảng 1 ngày trước khi khởi hành để sắp xếp giờ đón và cung cấp các thông tin cần thiết cho chuyến đi.
                    </div>
                </div>
                ` : ''}
                </div>

                ${(combo.destination === 'quy-nhon') ? `
                <div class="detail-section" style="margin-top:2rem;">
                    <h3><i class="fas fa-info-circle"></i> Thông tin cần lưu ý</h3>
                    <div class="note-tabs" style="display:flex;gap:8px;margin-bottom:1rem;">
                        <span style="background:#e3f2fd;color:#1976d2;padding:6px 16px;border-radius:8px;font-weight:600;">Giá bao gồm</span>
                    </div>
                    <div style="background:#fafbfc;padding:1.2rem 1.5rem;border-radius:10px;line-height:1.7;">
                        <b>Vận Chuyển:</b><br>
                        - Xe du lịch 16 - 29 chỗ đời mới máy lạnh, ghế bật.<br>
                        - Vé máy bay khứ hồi hãng Vietjet Air, bao gồm 07kg xách tay + 20kg ký gửi.<br><br>
                        <b>Lưu Trú:</b><br>
                        - Khách sạn 3 sao địa phương, tiêu chuẩn 2.3 khách/phòng.<br><br>
                        <b>Khác:</b><br>
                        - Ăn uống theo chương trình.<br>
                        - Đoàn có HDV tiếng Việt thuyết minh và phục vụ tham quan suốt tuyến.<br>
                        - Bảo hiểm du lịch theo quy định.<br>
                        - Phí tham quan theo chương trình.<br>
                        - Nón du lịch, Khăn ướt + nước đóng chai.<br>
                        - Thuế VAT.<br>
                        - Hướng Dẫn Viên (HDV) sẽ liên lạc với Quý Khách khoảng 1 ngày trước khi khởi hành để sắp xếp giờ đón và cung cấp các thông tin cần thiết cho chuyến đi.<br><br>
                        <b>Giá không bao gồm:</b><br>
                        - Chi phí cá nhân, giặt ủi, điện thoại, minibar trong khách sạn.<br>
                        - Đồ uống, thức ăn ngoài chương trình.<br>
                        - Tiền tip cho hướng dẫn viên, lái xe.<br>
                        - Phụ thu phòng đơn, nâng hạng phòng.<br>
                        - Các chi phí phát sinh ngoài chương trình.<br>

                        <b>Phụ thu:</b><br>
                        - Phụ thu phòng đơn: 1.000.000vnđ/khách. Cao điểm: 1.200.000vnđ/khách.<br>
                        - Phụ thu nước ngoài: 500.000vnđ/khách.<br>
                    </div>
                </div>
                ` : ''}
                </div>
            </div>
            
            <div class="booking-section">
                <button class="book-now-btn" onclick="bookCombo(${combo.id})">
                    <i class="fas fa-paper-plane"></i>
                    Đặt Ngay - ${formatPrice(combo.price)}đ
                </button>
                <p style="text-align: center; margin-top: 1rem; color: #666; font-size: 0.9rem;">
                    <i class="fas fa-phone"></i> Gọi ngay: <strong>+84 384 532 704</strong> để được tư vấn
                </p>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Book combo
function bookCombo(comboId) {
    const combo = travelCombos.find(c => c.id === comboId);
    alert(`Cảm ơn bạn đã quan tâm đến combo "${combo.title}"!\n\nChúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để xác nhận đặt chỗ.\n\nHotline: +84 123 456 789\nEmail: info@travelcombo.vn`);
    
    // Close modal if open
    if (modal.style.display === 'block') {
        closeModalFunction();
    }
}

// Close modal function
function closeModalFunction() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Thêm logic giỏ hàng
function getCart() {
    // Giỏ hàng là mảng object: {id, adult, child, baby, total}
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return Array.isArray(cart) ? cart : [];
}
function setCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}
function addToCart(comboId) {
    // Hàm này không dùng nữa với kiểu dữ liệu mới
}
function updateCartCount() {
    const cart = getCart();
    const cartCount = document.getElementById('cart-count');
    if (cartCount) cartCount.textContent = cart.length;
}
document.addEventListener('DOMContentLoaded', updateCartCount);

// Hiển thị danh sách combo trong giỏ hàng
function renderCartItems() {
    const cart = getCart();
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalDiv = document.getElementById('cart-total');
    const cartCheckoutCount = document.getElementById('cart-checkout-count');
    if (!cartItemsDiv) return;
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Giỏ hàng của bạn đang trống.</p>';
        if (cartTotalDiv) cartTotalDiv.textContent = '';
        if (cartCheckoutCount) cartCheckoutCount.textContent = '0';
        return;
    }
    let html = '';
    let total = 0;
    cart.forEach(item => {
        const combo = travelCombos.find(c => c.id === item.id);
        if (combo) {
            total += item.total;
            html += `<div class="cart-item" style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
                <img src="${getComboImageUrl(combo, 120, 80)}" style="width:80px;height:60px;object-fit:cover;border-radius:8px;">
                <div style="flex:1;">
                    <b>${combo.title}</b><br>
                    <span style="color:#e53935;">${formatPrice(item.total)}đ</span><br>
                    <span style="font-size:0.95em;color:#555;">${item.adult} người lớn, ${item.child} trẻ em, ${item.baby} trẻ nhỏ</span>
                </div>
                <button class="remove-cart-btn" data-id="${combo.id}" style="background:#eee;border:none;padding:4px 10px;border-radius:6px;cursor:pointer;">Xóa</button>
            </div>`;
        }
    });
    cartItemsDiv.innerHTML = html;
    if (cartTotalDiv) cartTotalDiv.textContent = formatPrice(total) + 'đ';
    if (cartCheckoutCount) cartCheckoutCount.textContent = cart.length;
    // Gán sự kiện xóa
    document.querySelectorAll('.remove-cart-btn').forEach(btn => {
        btn.onclick = function() {
            const id = parseInt(this.getAttribute('data-id'));
            const newCart = getCart().filter(item => item.id !== id);
            setCart(newCart);
            renderCartItems();
        };
    });
}
// Sự kiện mở/đóng modal giỏ hàng
const cartLink = document.getElementById('cart-link');
const cartModal = document.getElementById('cart-modal');
const cartClose = document.getElementById('cart-close');
   
if (cartLink && cartModal && cartClose) {
    cartLink.addEventListener('click', function(e) {
        e.preventDefault();
        renderCartUserInfo();
        renderCartItems();
        cartModal.style.display = 'block';
    });
    cartClose.onclick = function() {
        cartModal.style.display = 'none';
    };
    window.addEventListener('click', function(e) {
        if (e.target === cartModal) cartModal.style.display = 'none';
    });
}


const cartCheckoutBtn = document.getElementById('cart-checkout');
const cartPaymentMethod = document.getElementById('cart-payment-method');
if (cartCheckoutBtn && cartPaymentMethod) {
    cartCheckoutBtn.onclick = function() {
        const cart = getCart();
        if (cart.length === 0) {
            alert('Giỏ hàng của bạn đang trống!');
            return;
        }
        cartPaymentMethod.style.display = 'block';
    };
    document.getElementById('cart-payment-confirm').onclick = function() {
        const method = document.querySelector('input[name="payment-method"]:checked').value;
        let methodText = '';
        if (method === 'cod') methodText = 'Thanh toán khi nhận hàng';
        else if (method === 'bank') methodText = 'Chuyển khoản ngân hàng';
        else if (method === 'e-wallet') methodText = 'Ví điện tử';
        alert('Bạn đã chọn phương thức: ' + methodText + '\nThanh toán thành công!');
        setCart([]);
        renderCartItems();
        cartPaymentMethod.style.display = 'none';
        cartModal.style.display = 'none';
    };
}

// Hiển thị thông tin người dùng trong giỏ hàng
function renderCartUserInfo() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const user = loggedInUser ? JSON.parse(localStorage.getItem('user_' + loggedInUser)) : {};
    document.getElementById('cart-user-name').textContent = user.username || 'Chưa đăng nhập';
    document.getElementById('cart-user-phone').textContent = user.phone ? ' (' + user.phone + ')' : '';
    document.getElementById('cart-user-address').textContent = user.address || 'Chưa có địa chỉ';
}

// Hiển thị form nhập địa chỉ khi nhấn vào dòng địa chỉ
const addressRow = document.getElementById('cart-user-address-row');
const addressForm = document.getElementById('cart-address-form');
if (addressRow && addressForm) {
    addressRow.onclick = function() {
        addressForm.style.display = 'block';
        // Nếu đã có dữ liệu thì điền vào form
        const loggedInUser = localStorage.getItem('loggedInUser');
        const user = loggedInUser ? JSON.parse(localStorage.getItem('user_' + loggedInUser)) : {};
        document.getElementById('address-name').value = user.username || '';
        document.getElementById('address-phone').value = user.phone || '';
        let addressParts = (user.address || '').split('|');
        document.getElementById('address-detail').value = addressParts[0] || '';
        document.getElementById('address-extra').value = addressParts[1] || '';
        // Loại địa chỉ
        let type = user.addressType || 'office';
        document.getElementById('address-type-office').style.background = type === 'office' ? '#e53935' : '#f5f5f5';
        document.getElementById('address-type-office').style.color = type === 'office' ? '#fff' : '#333';
        document.getElementById('address-type-home').style.background = type === 'home' ? '#e53935' : '#f5f5f5';
        document.getElementById('address-type-home').style.color = type === 'home' ? '#fff' : '#333';
    };
    // Chọn loại địa chỉ
    document.getElementById('address-type-office').onclick = function() {
        this.style.background = '#e53935';
        this.style.color = '#fff';
        document.getElementById('address-type-home').style.background = '#f5f5f5';
        document.getElementById('address-type-home').style.color = '#333';
    };
    document.getElementById('address-type-home').onclick = function() {
        this.style.background = '#e53935';
        this.style.color = '#fff';
        document.getElementById('address-type-office').style.background = '#f5f5f5';
        document.getElementById('address-type-office').style.color = '#333';
    };
    // Lưu địa chỉ
    document.getElementById('address-save-btn').onclick = function() {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (!loggedInUser) return;
        let user = JSON.parse(localStorage.getItem('user_' + loggedInUser)) || {};
        user.username = document.getElementById('address-name').value;
        user.phone = document.getElementById('address-phone').value;
        let addressDetail = document.getElementById('address-detail').value;
        let addressExtra = document.getElementById('address-extra').value;
        user.address = addressDetail + (addressExtra ? ' | ' + addressExtra : '');
        user.addressType = document.getElementById('address-type-office').style.background === 'rgb(229, 57, 53)' ? 'office' : 'home';
        localStorage.setItem('user_' + loggedInUser, JSON.stringify(user));
        addressForm.style.display = 'none';
        renderCartUserInfo();
    };
}

// Initialize event listeners
function initializeEventListeners() {
    // Modal close events
    if (closeModal) {
        closeModal.onclick = closeModalFunction;
    }
    
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModalFunction();
        }
    };
    
    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<div class="loading"></div> Đang gửi...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert(`Cảm ơn ${name}!\n\nChúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi trong thời gian sớm nhất.`);
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });
}

// Initialize navigation
function initializeNavigation() {
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
        }
    });
}

// Initialize destination cards
function initializeDestinationCards() {
    destinationCards.forEach(card => {
        card.addEventListener('click', function() {
            const destination = this.getAttribute('data-destination');
            
            // Set destination in search form
            const destinationSelect = document.getElementById('destination-select');
            if (destinationSelect) {
                destinationSelect.value = destination;
                
                // Trigger search
                searchCombos();
            }
        });
    });
}

// Add CSS for modal content
const modalStyles = `
<style>
.combo-detail-header {
    margin-bottom: 2rem;
}

.detail-section {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #eee;
}

.detail-section:last-child {
    border-bottom: none;
}

.detail-section h3 {
    color: #2c5aa0;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 10px;
}

.detail-section ul {
    list-style: none;
    padding: 0;
}

.detail-section li {
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    padding-left: 25px;
}

.detail-section li:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #4caf50;
    font-weight: bold;
}

.itinerary-day {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
    align-items: flex-start;
}

.day-number {
    background: #2c5aa0;
    color: white;
    padding: 8px 15px;
    border-radius: 20px;
    font-weight: 600;
    min-width: 80px;
    text-align: center;
}

.day-activity {
    flex: 1;
    padding: 8px 0;
    line-height: 1.6;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background: #f8fafc;
    border-radius: 8px;
}

.feature-item i {
    color: #4caf50;
}

.booking-section {
    text-align: center;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 2px solid #f0f0f0;
}

.book-now-btn {
    background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
    color: white;
    border: none;
    padding: 15px 40px;
    border-radius: 50px;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 10px;
}

.book-now-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 107, 107, 0.4);
}

.no-results {
    text-align: center;
    padding: 3rem;
    grid-column: 1 / -1;
}

.no-results h3 {
    color: #666;
    margin-bottom: 1rem;
}

.no-results p {
    color: #999;
}

.loading-container {
    grid-column: 1 / -1;
}
</style>
`;

// Inject modal styles
document.head.insertAdjacentHTML('beforeend', modalStyles);

// Export functions for global access
window.searchCombos = searchCombos;
window.showComboDetails = showComboDetails;
window.bookCombo = bookCombo;

// Helpers for image URLs
function getComboImageUrl(combo, width = 800, height = 500) {
    if (combo.image && /^(http|https):\/\//.test(combo.image)) {
        return combo.image;
    }
    const keyword = [combo.destination, combo.title, 'travel'].filter(Boolean).join(',');
    return `https://source.unsplash.com/${width}x${height}/?${encodeURIComponent(keyword)}`;
}