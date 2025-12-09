<template>
  <svg :width="width || 6" :height="height || 10" viewBox="0 0 6 10" :fill="fill" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.5 9.50001L5.5 5.00001L0.5 0.500007"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script setup>
defineProps({
  color: { type: String, default: 'currentColor' },
  fill: { type: String, default: 'none' },
  width: Number,
  height: Number,
})
</script>
