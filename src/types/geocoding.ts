export interface GeocodingResult {
  lat: string;
  lon: string;
  display_name: string;
}

export interface LocationCodes {
  plusCode: string;
  geohash: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}