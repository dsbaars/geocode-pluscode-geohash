<script setup lang="ts">
import { ref } from 'vue';
import SearchBar from './SearchBar.vue';
import LocationCodes from './LocationCodes.vue';
import CoordinatesDisplay from './CoordinatesDisplay.vue';
import Map from './Map.vue';
import { geocodeAddress } from '../utils/geocoding';
import { generateLocationCodes } from '../utils/locationCodes';
import type { LocationCodes as LocationCodesType } from '../types/geocoding';

const coordinates = ref<{ lat: number | null; lng: number | null }>({
  lat: null,
  lng: null,
});
const locationCodes = ref<LocationCodesType>({ plusCode: '', geohash: '' });
const loading = ref(false);
const error = ref('');

const handleSearch = async (address: string) => {
  if (!address) return;

  loading.value = true;
  error.value = '';

  try {
    const result = await geocodeAddress(address);
    const lat = parseFloat(result.lat);
    const lng = parseFloat(result.lon);

    coordinates.value = { lat, lng };
    locationCodes.value = generateLocationCodes(lat, lng);
  } catch (err) {
    error.value =
      err instanceof Error ? err.message : 'Error geocoding address';
    console.error(err);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="space-y-4">
    <SearchBar :loading="loading" @search="handleSearch" />

    <div v-if="error" class="alert alert-error">{{ error }}</div>

    <div class="grid grid-cols-2 gap-2">
      <CoordinatesDisplay
        :latitude="coordinates.lat"
        :longitude="coordinates.lng"
      />

      <LocationCodes
        :plus-code="locationCodes.plusCode"
        :geohash="locationCodes.geohash"
      />
    </div>

    <Map
      :latitude="coordinates.lat"
      :longitude="coordinates.lng"
      class="rounded-box overflow-hidden"
    />
  </div>
</template>
