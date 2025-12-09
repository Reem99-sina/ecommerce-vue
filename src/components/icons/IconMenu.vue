<template>
  <svg
    :width="width"
    :height="height"
    :stroke="color"
    :fill="fill"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :stroke="color"
      stroke-linecap="round"
      stroke-width="1.5"
      d="M26.75.75h-26M18.75 8.75h-18M13.75 16.75h-13"
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
