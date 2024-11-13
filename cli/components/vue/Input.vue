<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Enter text',
  },
  modelValue: {
    type: String,
    default: '',
  },
});

const emits = defineEmits(['update:modelValue']);

function updateValue(event) {
  emits('update:modelValue', event.target.value);
}
</script>

<template>
  <input
    :placeholder="placeholder"
    :value="modelValue"
    @input="updateValue"
    class="px-4 py-2 border rounded w-full"
  />
</template>

<style scoped>
/* Add any additional styles here */
</style>
