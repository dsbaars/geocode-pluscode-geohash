<script setup lang="ts">
const props = defineProps<{
  latitude: number | null;
  longitude: number | null;
}>();

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
};
</script>

<template>
  <div v-if="latitude !== null && longitude !== null" class="card bg-base-100 shadow-lg mb-4">
    <div class="card-body p-4 space-y-3">
      <div class="flex items-center gap-4">
        <span class="font-bold min-w-24">Latitude:</span>
        <div class="join flex-1">
          <input 
            readonly 
            :value="`${latitude.toFixed(6)}°`" 
            class="input input-bordered join-item w-full font-mono"
          />
          <button 
            @click="copyToClipboard(latitude.toFixed(6))" 
            class="btn join-item"
            title="Copy Latitude"
          >
            📋
          </button>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <span class="font-bold min-w-24">Longitude:</span>
        <div class="join flex-1">
          <input 
            readonly 
            :value="`${longitude.toFixed(6)}°`" 
            class="input input-bordered join-item w-full font-mono"
          />
          <button 
            @click="copyToClipboard(longitude.toFixed(6))" 
            class="btn join-item"
            title="Copy Longitude"
          >
            📋
          </button>
        </div>
      </div>
    </div>
  </div>
</template>