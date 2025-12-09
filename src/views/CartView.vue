<template>
  <div class="flex flex-wrap md:grid grid-cols-4  container py-3 min-h-[80vh] items-center">
    <div class="flex-1 md:col-span-3">
      <div class="gap-2  py-3">
        <div v-if="store.cart.length == 0" class="flex items-center flex-col justify-start">
          <CartIcon width="512" height="512" />
          <h3 class="font-bold text-xl text-gray-400">{{ $t('noProductInCart') }}</h3>
        </div>
        <Swiper v-if="store.cart.length > 0" :slides-per-view="2" :space-between="50">
          <SwiperSlide v-for="product in store.cart" :key="product.id" class="flex! gap-2 justify-center">
            <div>
              <img :src="product.images[0]" class='w-[265px]' />
              <p class="text-gray-400">{{ product.category }}</p>
              <div class="flex gap-2 justify-between">
                <h2>{{ product.name }}</h2>
                <p>$ {{ product.price }}</p>
              </div>
            </div>
            <div class="flex flex-col gap-2  items-center">
              <button class=" " @mousedown="store.DropCart(product)">X</button>
              <p>{{ product.size }}</p>
              <div :style="{
                backgroundColor: product.color,
                borderColor: product.color,
              }" class="border-(--vt-c-gray) border px-2 py-2" :class="'border-gray-400 text-gray-700'"></div>
              <div class="border border-gray-400 flex flex-col justify-center items-center">
                <CustomButton @mousedown="store.AddCart(product)" class=" px-2! py-1! ">
                  +
                </CustomButton>
                <p class="text-sm font-bold border-y border-gray-400 w-full text-center py-1">{{ product.quantity }}</p>
                <CustomButton @mousedown="store.RemoveCart(product)" class=" px-2! py-1! ">
                  -
                </CustomButton>
              </div>
            </div>

          </SwiperSlide>
        </Swiper>
      </div>
    </div>

    <div class="flex-1 md:col-span-1">
      <orderCart />
    </div>
  </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter'
import CustomButton from '@/components/global/Button.vue'
import CartIcon from '@/components/icons/emptyIcon.vue'
import orderCart from '@/components/shop/orderCart.vue'
import 'swiper/css';

const store = useCounterStore()


</script>
