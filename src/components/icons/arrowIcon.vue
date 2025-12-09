<template>
  <svg :width="width" :height="height" viewBox="0 0 49 14" :fill="fill" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.75 6.75H48.25M48.25 6.75L42.25 0.75M48.25 6.75L42.25 12.75"
      :stroke="color"
      stroke-width="1.5"
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
