<script setup lang="ts">
const props = defineProps<{
  plusCode: string;
  geohash: string;
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
  <div v-if="plusCode || geohash" class="card bg-base-100 shadow-lg">
    <div class="card-body p-4 space-y-3">
      <div class="flex items-center gap-4">
        <span class="font-bold min-w-24">Plus Code:</span>
        <div class="join flex-1">
          <input
            readonly
            :value="plusCode"
            class="input input-bordered join-item w-full font-mono"
          />
          <button
            @click="copyToClipboard(plusCode)"
            class="btn join-item"
            title="Copy Plus Code"
          >
            📋
          </button>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <span class="font-bold min-w-24">Geohash:</span>
        <div class="join flex-1">
          <input
            readonly
            :value="geohash"
            class="input input-bordered join-item w-full font-mono"
          />
          <button
            @click="copyToClipboard(geohash)"
            class="btn join-item"
            title="Copy Geohash"
          >
            📋
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
