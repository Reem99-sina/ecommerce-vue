<template>
  <div class="flex flex-col">
    <img :src="product.images[0]" class="w-[410px] h-[265px]" />
    <div class="flex gap-2 py-2 items-center">
      <span class="text-gray-400 text-sm">{{ product.category }} </span>
      <div class="flex gap-2">
        <div
          v-for="color in product.colors"
          :style="{
            backgroundColor: color,
            borderColor: color,
          }"
          class="border-(--vt-c-gray) border px-2 py-2"
          :class="'border-gray-400 text-gray-700'"
          :key="color"
        ></div>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <h3 class="font-bold">
        <router-link :to="`/product/${product.id}`">
          {{ product.name }}
        </router-link>
      </h3>
      <div class="flex gap-1 items-center">
        <p>{{ product.price }} $</p>
        <p class="line-through">{{ product.old_price }} $</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>
