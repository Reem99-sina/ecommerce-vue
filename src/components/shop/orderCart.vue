<template>
  <div class="border border-(--vt-c-gray) px-7 py-3 flex flex-col gap-3">
    <h3>{{ $t('yourOrder') }}</h3>
    <div class="flex flex-col gap-3  text-xs">
      <div v-for="value in store.cart" :key="value.id" class="flex gap-2 ">
        <img :src="value.images[0]" class="max-w-[70px]" />
        <div class="flex flex-col justify-between">
          <div>
            <h3>{{ value.name }}</h3>
            <p class="text-gray-400">{{ value.color }}/{{ value.size }}</p>
          </div>
          <div class="flex justify-between items-center">
            <h3>({{ value.quantity }})</h3>
            <p>${{ value.price }}</p>
          </div>
        </div>
      </div>
      <div v-if="store.cart.length == 0">
        <CartIconSmall />
      </div>
      <div class="border-b border-(--vt-c-gray)"></div>
      <div class="flex flex-col gap-2">
        <div class="flex justify-between items-center">
          <h3 class="font-bold">{{ $t('Subtotal') }}</h3>
          <p>${{ total.toFixed(2) }}</p>
        </div>
        <div class="flex justify-between items-center">
          <h3 class="font-bold">{{ $t('Shipping') }}</h3>
          <p>{{ $t('shippingDesc') }}</p>
        </div>
      </div>
      <div class="border-b border-(--vt-c-gray)"></div>
      <div class="flex justify-between items-center">
        <h3 class="font-bold">{{ $t('total') }}</h3>
        <p>${{ total.toFixed(2) }}</p>
      </div>
    </div>
    <CustomButton  v-if="checkout==true" class="bg-gray-400!">
      <router-link to="/checkout">
        {{ $t('continue') }} 
      </router-link>
    </CustomButton>
  </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter'
import CustomButton from '@/components/global/Button.vue'

import CartIconSmall from '@/components/icons/emptyCartSmall.vue'

import 'swiper/css';
import { computed } from 'vue';
const store = useCounterStore()

const total = computed(() => {
  if (!Array.isArray(store.cart)) return 0
  return store.cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity)
  }, 0)
})
defineProps({
  checkout:{
    default:true,
    required:true,
    type:Boolean
  }
})
</script>
