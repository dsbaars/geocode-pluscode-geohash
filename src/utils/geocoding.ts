import type { GeocodingResult } from '../types/geocoding';

export async function geocodeAddress(address: string): Promise<GeocodingResult> {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
  );
  const data = await response.json();
  
  if (data.length === 0) {
    throw new Error('Address not found');
  }
  
  return data[0];
}