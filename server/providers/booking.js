import fetch from 'node-fetch';

const BOOKING_HOST = 'booking-com15.p.rapidapi.com'; // Example RapidAPI for Booking.com

export async function findDestinationId({ query, locale = 'vi' }) {
  const url = new URL(`https://${BOOKING_HOST}/api/v1/hotels/searchDestination`);
  url.searchParams.set('query', query);
  url.searchParams.set('locale', locale);

  const r = await fetch(url.toString(), {
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY || '',
      'X-RapidAPI-Host': BOOKING_HOST
    }
  });
  if (!r.ok) {
    const text = await r.text();
    throw new Error(`Booking destinations error ${r.status}: ${text}`);
  }
  return r.json();
}

export async function searchHotelsBooking({ dest_id, checkin, checkout, adults = '2', rooms = '1', currency = 'VND', locale = 'vi' }) {
  const url = new URL(`https://${BOOKING_HOST}/api/v1/hotels/searchHotels`);
  url.searchParams.set('dest_id', dest_id);
  url.searchParams.set('checkin_date', checkin);
  url.searchParams.set('checkout_date', checkout);
  url.searchParams.set('adults_number', adults);
  url.searchParams.set('room_number', rooms);
  url.searchParams.set('currency_code', currency);
  url.searchParams.set('locale', locale);
  url.searchParams.set('sort_by', 'popularity');

  const r = await fetch(url.toString(), {
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY || '',
      'X-RapidAPI-Host': BOOKING_HOST
    }
  });
  if (!r.ok) {
    const text = await r.text();
    throw new Error(`Booking search error ${r.status}: ${text}`);
  }
  return r.json();
}

