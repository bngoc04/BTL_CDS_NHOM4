// Lightweight API proxy server for external travel providers
// Providers: Skyscanner (RapidAPI), Booking.com (RapidAPI), Traveloka (placeholder)
// Usage:
// 1) npm init -y && npm install express cors node-fetch dotenv
// 2) Copy .env.example to .env and fill keys
// 3) node server/index.js

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import fetch from 'node-fetch';

import { searchFlightsSkyscanner } from './providers/skyscanner.js';
import { searchHotelsBooking, findDestinationId } from './providers/booking.js';
import { searchTraveloka } from './providers/traveloka.js';
import { generateCombos } from './services/combo-generator.js';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'travel-api-proxy', time: new Date().toISOString() });
});

// Flights (Skyscanner via RapidAPI)
// Example: /api/flights/search?origin=HAN&destination=SGN&date=2025-10-10&adults=1
app.get('/api/flights/search', async (req, res) => {
  try {
    const { origin, destination, date, adults = '1', cabinClass = 'economy', currency = 'VND', locale = 'vi-VN' } = req.query;
    if (!origin || !destination || !date) {
      return res.status(400).json({ error: 'Missing required params: origin, destination, date (YYYY-MM-DD)' });
    }
    const data = await searchFlightsSkyscanner({ origin, destination, date, adults, cabinClass, currency, locale });
    res.json(data);
  } catch (err) {
    console.error('flights.search error:', err);
    res.status(500).json({ error: 'Failed to search flights', detail: err?.message });
  }
});

// Hotels (Booking.com via RapidAPI)
// Step 1: find destination id from text query
// Example: /api/hotels/destinations?q=Da%20Nang&locale=vi
app.get('/api/hotels/destinations', async (req, res) => {
  try {
    const { q, locale = 'vi' } = req.query;
    if (!q) return res.status(400).json({ error: 'Missing param q' });
    const data = await findDestinationId({ query: q, locale });
    res.json(data);
  } catch (err) {
    console.error('hotels.destinations error:', err);
    res.status(500).json({ error: 'Failed to fetch destinations', detail: err?.message });
  }
});

// Step 2: search hotels with dest_id
// Example: /api/hotels/search?dest_id=-3712125&checkin=2025-10-10&checkout=2025-10-12&adults=2&rooms=1&currency=VND
app.get('/api/hotels/search', async (req, res) => {
  try {
    const { dest_id, checkin, checkout, adults = '2', rooms = '1', currency = 'VND', locale = 'vi' } = req.query;
    if (!dest_id || !checkin || !checkout) {
      return res.status(400).json({ error: 'Missing required params: dest_id, checkin, checkout' });
    }
    const data = await searchHotelsBooking({ dest_id, checkin, checkout, adults, rooms, currency, locale });
    res.json(data);
  } catch (err) {
    console.error('hotels.search error:', err);
    res.status(500).json({ error: 'Failed to search hotels', detail: err?.message });
  }
});

// Dynamic combo generator (Booking + Skyscanner; Traveloka-ready)
// Example: /api/combos/generate?dest=da-nang&origin=HAN&duration=2-3&adults=2
app.get('/api/combos/generate', async (req, res) => {
  try {
    const { dest = 'da-nang', origin = 'HAN', duration = '2-3', adults = '2', rooms = '1', currency = 'VND', locale = 'vi' } = req.query;
    const data = await generateCombos({ destinationSlug: dest, originIata: origin, durationCategory: duration, adults: Number(adults)||2, rooms: Number(rooms)||1, currency, locale });
    res.json(data);
  } catch (err) {
    console.error('combos.generate error:', err);
    res.status(500).json({ error: 'Failed to generate combos', detail: err?.message });
  }
});

// Traveloka (placeholder - requires partner access)
app.get('/api/traveloka/search', async (req, res) => {
  try {
    const q = req.query.q || '';
    const out = await searchTraveloka({ q });
    res.status(out.status || 200).json(out.body);
  } catch (err) {
    console.error('traveloka.search error:', err);
    res.status(501).json({ error: 'Traveloka API not configured', detail: err?.message });
  }
});

// Generic passthrough (use with caution). Disabled by default.
app.post('/api/_proxy', async (req, res) => {
  if (process.env.ENABLE_GENERIC_PROXY !== 'true') {
    return res.status(403).json({ error: 'Generic proxy disabled' });
  }
  try {
    const { url, method = 'GET', headers = {}, body } = req.body || {};
    if (!url) return res.status(400).json({ error: 'Missing url' });
    const r = await fetch(url, { method, headers, body: body ? JSON.stringify(body) : undefined });
    const text = await r.text();
    res.status(r.status).send(text);
  } catch (err) {
    res.status(500).json({ error: 'Proxy error', detail: err?.message });
  }
});

app.listen(PORT, () => {
  console.log(`Travel API proxy running on http://localhost:${PORT}`);
});

