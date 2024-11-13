<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button class="px-4 py-2 bg-blue-500 text-white rounded">
    {{ label }}
  </button>
</template>

<style scoped>
/* Additional styles (if any) go here */
</style>
