<template>
  <nav aria-label="breadcrumb">
    <ol class="flex items-center gap-2 text-sm">
      <li v-for="(item, index) in items" :key="index" class="flex items-center gap-2">
        <router-link
          v-if="index !== items.length - 1"
          :to="item.href"
          class="text-gray-600 hover:text-(--color-burgundy)"
        >
          {{ item.label }}
        </router-link>

        <span v-else class="font-semibold text-(--color-burgundy)">
          {{ item.label }}
        </span>
        <span v-if="index !== items.length - 1" class="text-gray-400"> / </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped></style>
