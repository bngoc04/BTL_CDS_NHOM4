// Traveloka public API is not officially available.
// This module acts as a placeholder for partner integrations.
// If you have partner credentials, implement calls here.

export async function searchTraveloka({ q }) {
  // Placeholder response to keep the route functional
  return {
    status: 501,
    body: {
      error: 'Traveloka API not available without partner access',
      hint: 'Contact Traveloka for B2B API access or use Booking/Skyscanner via RapidAPI.'
    }
  };
}

