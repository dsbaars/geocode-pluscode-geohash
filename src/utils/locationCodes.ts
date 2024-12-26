import { OpenLocationCode } from 'open-location-code';
import Geohash from 'latlon-geohash';
import type { LocationCodes } from '../types/geocoding';

const olc = new OpenLocationCode();

export function generateLocationCodes(lat: number, lon: number): LocationCodes {
  return {
    plusCode: olc.encode(lat, lon),
    geohash: Geohash.encode(lat, lon, 9)
  };
}