<template>
  <div class="flex pt-6 items-center justify-center min-h-[80vh] gap-6">
    <div class="flex-2">
      <h3 class="font-bold text-2xl">{{ $t('checkout') }}</h3>
      <div class="py-5">
        <TabCoustom :tabsComponent="tabs" clickDisable="true"/>
      </div>
    </div>
    <div class="flex-1">
      <OrderCart checkout="false"/>
    </div>
  </div>
</template>
<script setup>
import TabCoustom from '@/components/global/tabCustom.vue';
import Information from '@/components/shop/informationCustom.vue';
import Shipping from '@/components/shop/shippingProduct.vue';
import OrderCart from '@/components/shop/orderCart.vue'

const tabs = [
  { label: 'Information', component: Information },
  { label: 'Shipping', component: Shipping }

]
</script>
