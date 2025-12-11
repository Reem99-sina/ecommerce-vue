<template>
  <div class="flex justify-start flex-col">
   
    <div class="productId flex gap-10 items-center justify-center min-h-[80vh]">
      <div class="flex-col md:flex-row flex gap-4 items-start ">
        <img :src="selectimg" class="w-[410px] max-h-[80vh] flex-2" />
        <div class="flex md:flex-col gap-2">
          <div v-for="(image, id) in product.images" :key="image" class="p-1 rounded cursor-pointer relative"
            @click="toggleImage(id)">
            <div :class="selectimg != image ? 'absolute inset-0 bg-gray-300/40 ' : ''"></div>

            <img :src="image" class="w-[90px] h-[90px] object-cover rounded" />
          </div>
        </div>
        <div class="border border-(--vt-c-gray) px-4 py-6 flex gap-3 flex-col flex-1">
          <h2>{{ product.name }}</h2>
          <p>$ {{ product.price }}</p>
          <p class="text-gray-400">{{ product.category }}</p>
          <p class="">{{ product.description }}</p>
          <div>
            <h3>{{ $t('color') }}</h3>
            <div class="flex items-center gap-1">
              <div v-for="color in product.colors" :style="{
                backgroundColor: color,
              }" class="border-2 px-3 py-3 cursor-pointer"
                :class="selectColor === color ? 'border-(--color-burgundy)' : 'border-gray-400 text-gray-700'"
                :key="color" @click="selectColor = color">
              </div>
            </div>
          </div>
          <div>
            <h3>{{ $t('size') }}</h3>
            <div class="flex items-center gap-1">
              <div v-for="option in product.sizes" class="border-2 px-3 py-2 cursor-pointer" :key="option"
                @click="selectSize = option"
                :class="selectSize == option ? 'border-(--color-burgundy)' : 'border-gray-400 text-gray-700'">
                <div>{{ option }}</div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <p class="text-gray-400">{{ $t('clickAdd') }}</p>
            <CustomButton :disabled="!selectSize || !selectColor" :class="`bg-(--vt-c-gray)! w-full!`" @mousedown="store.AddCart({
              name: product.name,
              color: selectColor,
              size: selectSize,
              price: product.price,
              old_price: product.old_price,
              rating: product.rating,
              id: product.id,
              images: product.images,
              describtion: product.description,
              category: product.category,
              stock: product.stock
            })">
              {{ $t('add') }} {{ store.cart.length }}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script setup>
import { useRoute } from 'vue-router'
import products from '@/json/products.json'
import { computed, ref, watch } from 'vue'
import CustomButton from '@/components/global/Button.vue'
import { useCounterStore } from '@/stores/counter'
import ArrowIcon from '@/components/icons/arrowIcon.vue'
import ArrowLeft from '@/components/icons/arrowLeft.vue'

const route = useRoute()
const selectimg = ref('')
const store = useCounterStore()
const selectSize = ref('')
const selectColor = ref('')

const productId = route.params.id
const product = computed(() => {
  return products.find((ele) => ele?.id == productId)
})

function toggleImage(id) {
  selectimg.value = product.value.images[id]
}
const goBack = () => {
  route.back(); // Goes back in browser history
};
watch(() => {
  selectimg.value = product.value.images[0]
})
</script>
