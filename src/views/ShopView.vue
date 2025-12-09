<script setup>
import Sidebar from '@/components/shop/sidebarShop.vue'
import Products from '@/components/shop/productsShop.vue'
</script>
<template>
  <div class="flex items-start gap-8 pt-8">
    <div class="flex-[0.5]">
      <Sidebar />
    </div>

    <!-- Second div takes 1 column -->
    <div class="flex-2"><Products/></div>
  </div>
</template>

<script>
export default {
  name: 'ShopView',
}
</script>
