<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  loading: boolean;
}>();

defineEmits<{
  (e: 'search', address: string): void;
}>();

const address = ref('');
</script>

<template>
  <div class="join w-full">
    <input
      v-model="address"
      @keyup.enter="$emit('search', address)"
      placeholder="Enter an address"
      :disabled="loading"
      class="input input-bordered join-item flex-1"
    />
    <button
      @click="$emit('search', address)"
      :disabled="loading"
      class="btn btn-primary join-item"
    >
      {{ loading ? 'Searching...' : 'Search' }}
    </button>
  </div>
</template>
