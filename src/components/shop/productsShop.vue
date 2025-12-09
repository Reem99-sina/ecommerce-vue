<template>
  <div class="flex flex-col gap-4">
    <Breadcrumb :items="[
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/shop' },
    ]" />
    <h2 class="font-bold text-xl">{{ $t('product') }}</h2>
    <div class="md:max-w-[40%]">
      <Input :right-icon="Search" :placeholder="$t('search')" v-model="search" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="product in filters" :key="product.id">
        <Card :product="product" />
      </div>
    </div>
  </div>
</template>
<script setup>
import Breadcrumb from '@/components/global/BreadcrumbCustom.vue'
import Input from '@/components/global/InputCustom.vue'
import Search from '@/components/icons/searchIcon.vue'
import products from '@/json/products.json'
import Card from '@/components/shop/CardProduct.vue'
import { computed, ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
const search = ref('')
const filters = computed(() => {
  const store = useCounterStore()
  return products.filter((product) => {
    // filter by category
    const matchCategory =
      !store.selectedCategories.length || store.selectedCategories.includes(product.category)

    // filter by sizes (at least one selected size must be in product.sizes)
    const matchSize =
      !store.selectedSizes.length ||
      product.sizes.some((size) => store.selectedSizes.includes(size))

    // filter by colors (at least one selected color must be in product.colors)
    const matchColor =
      !store.selectedColors.length ||
      product.colors.some((color) => store.selectedColors.includes(color))

    const matchPrice = !store.price || product.price <= store.price

    const matchSearch = product.name.toLowerCase().includes(search.value)
  
    return matchCategory && matchSize && matchColor && matchPrice && matchSearch
  })
})
</script>
