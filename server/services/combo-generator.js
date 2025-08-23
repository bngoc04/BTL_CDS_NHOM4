import { findDestinationId, searchHotelsBooking } from '../providers/booking.js';
import { searchFlightsSkyscanner } from '../providers/skyscanner.js';

// Map slug -> display name, Booking query, Skyscanner IATA
const DEST_MAP = {
  'da-nang': { name: 'Đà Nẵng', bookingQuery: 'Da Nang', iata: 'DAD' },
  'da-lat': { name: 'Đà Lạt', bookingQuery: 'Da Lat', iata: 'DLI' },
  'nha-trang': { name: 'Nha Trang', bookingQuery: 'Nha Trang', iata: 'CXR' },
  'ha-long': { name: 'Hạ Long', bookingQuery: 'Ha Long', iata: 'HPH' }, // gần Hải Phòng
  'hoi-an': { name: 'Hội An', bookingQuery: 'Hoi An', iata: 'DAD' }, // bay Đà Nẵng
  'phu-quoc': { name: 'Phú Quốc', bookingQuery: 'Phu Quoc', iata: 'PQC' },
  'sapa': { name: 'Sa Pa', bookingQuery: 'Sa Pa', iata: null }, // không sân bay
  'quy-nhon': { name: 'Quy Nhơn', bookingQuery: 'Quy Nhon', iata: 'UIH' },
  'phan-thiet': { name: 'Phan Thiết', bookingQuery: 'Phan Thiet', iata: 'SGN' }, // thường bay SGN rồi đi đường bộ
  'vung-tau': { name: 'Vũng Tàu', bookingQuery: 'Vung Tau', iata: 'SGN' },
  'hue': { name: 'Huế', bookingQuery: 'Hue', iata: 'HUI' },
  'can-tho': { name: 'Cần Thơ', bookingQuery: 'Can Tho', iata: 'VCA' }
};

function pickDatesByDuration(durationCategory) {
  // Tự sinh ngày: chọn từ thứ 6 tuần tới cho 2-3 ngày; hoặc tuần kế tiếp
  const now = new Date();
  const start = new Date(now);
  // tìm thứ 6 tới
  const day = start.getDay(); // 0 CN - 6 T7
  const add = (5 - day + 7) % 7; // 5 là thứ 6
  start.setDate(start.getDate() + (add || 7)); // luôn tuần tới
  const end = new Date(start);
  if (durationCategory === '2-3') end.setDate(start.getDate() + 2);
  else if (durationCategory === '4-5') end.setDate(start.getDate() + 4);
  else if (durationCategory === '6-7') end.setDate(start.getDate() + 6);
  else end.setDate(start.getDate() + 3);
  const toISO = d => d.toISOString().slice(0,10);
  return { checkin: toISO(start), checkout: toISO(end) };
}

function estimateBudgetVND(total) {
  const n = total || 0;
  if (n < 5_000_000) return 'under-5';
  if (n <= 10_000_000) return '5-10';
  if (n <= 20_000_000) return '10-20';
  return 'over-20';
}

export async function generateCombos({ destinationSlug, originIata = 'HAN', durationCategory = '2-3', adults = 2, rooms = 1, currency = 'VND', locale = 'vi' }) {
  const destMeta = DEST_MAP[destinationSlug] || DEST_MAP['da-nang'];
  const { checkin, checkout } = pickDatesByDuration(durationCategory);

  // 1) Booking: dest_id -> hotels
  const destSearch = await findDestinationId({ query: destMeta.bookingQuery, locale });
  const destId = destSearch?.data?.[0]?.dest_id || destSearch?.[0]?.dest_id;
  let hotels = [];
  if (destId) {
    const hotelRes = await searchHotelsBooking({ dest_id: String(destId), checkin, checkout, adults: String(adults), rooms: String(rooms), currency, locale });
    // cố gắng trích danh sách
    hotels = hotelRes?.data || hotelRes?.result || hotelRes?.hotels || [];
  }

  // 2) Skyscanner: flights (nếu có sân bay)
  let flights = [];
  if (destMeta.iata) {
    try {
      const flightRes = await searchFlightsSkyscanner({ origin: originIata, destination: destMeta.iata, date: checkin, adults: String(adults), currency, locale: locale === 'vi' ? 'vi-VN' : 'en-US' });
      flights = flightRes?.itineraries || flightRes?.data || flightRes?.results || [];
    } catch (e) {
      // bỏ qua nếu lỗi
      flights = [];
    }
  }

  // 3) Kết hợp thành package
  const topHotels = hotels.slice(0, 5);
  const topFlights = flights.slice(0, 3);
  const combos = [];

  // Nếu không có flights (như Sapa), tạo combo chỉ gồm khách sạn + mô tả di chuyển đường bộ
  if (!topFlights.length) {
    topHotels.forEach((h, idx) => {
      const priceHotel = (h?.price_breakdown?.gross_price || h?.price || h?.min_total_price || 2_500_000) * (rooms || 1);
      const total = priceHotel;
      combos.push({
        id: Date.now() + idx,
        title: `${destMeta.name}: Khách sạn ${h?.property?.name || h?.hotel_name || 'Chọn lọc'} - ${durationCategory.replace('-', ' đến ')} ngày`,
        destination: destinationSlug,
        duration: `${durationCategory.replace('-', ' - ')} ngày`,
        price: String(Math.round(total)).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        originalPrice: String(Math.round(total * 1.1)).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        image: h?.property?.photoUrls?.[0] || h?.max_photo_url || h?.photoMainUrl || '',
        images: [h?.max_photo_url, h?.photoMainUrl].filter(Boolean).slice(0,5),
        badge: 'NEW',
        description: `Combo lưu trú tại ${destMeta.name} (${rooms} phòng, ${adults} khách). Di chuyển bằng đường bộ/tàu phù hợp điểm đến.`,
        features: ['Khách sạn chọn lọc', 'Vị trí thuận tiện', 'Gần điểm tham quan'],
        budget: estimateBudgetVND(total),
        durationCategory,
        highlights: [destMeta.name, 'Check-in các điểm nổi bật', 'Ẩm thực địa phương'],
        itinerary: { day1: `Đến ${destMeta.name} - Nhận phòng - Tham quan trung tâm`, day2: 'Khám phá điểm nổi bật - Ẩm thực', day3: 'Tự do - Trở về' }
      });
    });
    return { checkin, checkout, originIata, destination: destMeta.iata, combos };
  }

  // Có flights: kết hợp từng flight với 1-2 khách sạn
  topFlights.forEach((f, fIdx) => {
    const flightPrice = f?.price?.raw || f?.price || f?.total || 2_000_000;
    topHotels.slice(0, 3).forEach((h, hIdx) => {
      const hotelPrice = (h?.price_breakdown?.gross_price || h?.price || h?.min_total_price || 2_500_000) * (rooms || 1);
      const total = flightPrice * adults + hotelPrice;
      combos.push({
        id: Date.now() + fIdx * 10 + hIdx,
        title: `${destMeta.name}: Bay + KS ${h?.property?.name || h?.hotel_name || ''}`.trim(),
        destination: destinationSlug,
        duration: `${durationCategory.replace('-', ' - ')} ngày`,
        price: String(Math.round(total)).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        originalPrice: String(Math.round(total * 1.15)).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        image: h?.property?.photoUrls?.[0] || h?.max_photo_url || h?.photoMainUrl || '',
        images: [h?.max_photo_url, h?.photoMainUrl].filter(Boolean).slice(0,5),
        badge: fIdx===0 && hIdx===0 ? 'HOT' : 'SALE',
        description: `Combo bay ${originIata} ⇄ ${destMeta.iata} + khách sạn ${rooms} phòng cho ${adults} khách, bao gồm lưu trú ${durationCategory} ngày.`,
        features: ['Vé máy bay khứ hồi', 'Khách sạn chọn lọc', 'Lịch trình gợi ý'],
        budget: estimateBudgetVND(total),
        durationCategory,
        highlights: ['Vé khứ hồi', 'Khách sạn vị trí đẹp', destMeta.name],
        itinerary: { day1: `Bay đến ${destMeta.name} - Nhận phòng - Tham quan`, day2: 'Khám phá điểm nổi bật - Ẩm thực', day3: 'Tự do - Trở về' }
      });
    });
  });

  return { checkin, checkout, originIata, destination: destMeta.iata, combos };
}

