import fetch from 'node-fetch';

const RAPID_HOST = 'skyscanner80.p.rapidapi.com'; // Example host (can vary by API)

export async function searchFlightsSkyscanner({ origin, destination, date, adults = '1', cabinClass = 'economy', currency = 'VND', locale = 'vi-VN' }) {
  const url = new URL(`https://${RAPID_HOST}/api/v1/flights/search`);
  url.searchParams.set('fromEntityId', origin);
  url.searchParams.set('toEntityId', destination);
  url.searchParams.set('departDate', date);
  url.searchParams.set('adults', adults);
  url.searchParams.set('cabinClass', cabinClass);
  url.searchParams.set('currency', currency);
  url.searchParams.set('market', 'VN');
  url.searchParams.set('locale', locale);

  const r = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY || '',
      'X-RapidAPI-Host': RAPID_HOST
    }
  });

  if (!r.ok) {
    const text = await r.text();
    throw new Error(`Skyscanner API error ${r.status}: ${text}`);
  }
  return r.json();
}

