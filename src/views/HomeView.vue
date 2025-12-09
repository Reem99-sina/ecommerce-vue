<script setup>
import Input from '@/components/global/InputCustom.vue'
import Search from '@/components/icons/searchIcon.vue'
import CustomButton from '@/components/global/Button.vue'
import Arrow from '@/components/icons/arrowIcon.vue'
import Box from '@/components/BoxAnimation.vue'
import img1 from '@/assets/images/product1.png'
import img2 from '@/assets/images/product2.png'
</script>

<template>
  <div class="text-(--color-burgundy) p-5 flex h-[84vh] gap-5 flex-col overflow-x-hidden">
    <h2 class="text-xl font-bold" v-html="$t('header')"></h2>
    <div class="md:max-w-[40%]">
      <Input :right-icon="Search" :placeholder="$t('search')"/>
    </div>
    <div class="flex flex-col md:grid grid-cols-2 gap-5 flex-1">
      <div class="flex flex-col justify-between">
        <div>
          <h3 v-html="$t('title')" class="text-4xl font-bold uppercase"></h3>
          <p v-html="$t('desc')" class="text-base"></p>
        </div>
        <CustomButton class="bg-(--vt-c-gray)! text-white px-7 py-3 md:max-w-[40%]">
          <router-link to="/shop" class="flex items-center justify-between w-full">
            <p class="font-bold whitespace-nowrap">{{ $t('shop') }}</p>
            <Arrow width="50" />
          </router-link>
        </CustomButton>
      </div>
      <div class="flex gap-3">
        <Box :src="img1" />
        <Box :src="img2" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeView',
}
</script>
