<template>
  <div v-if="status == 'success'" class="payment-page flex items-center justify-around h-[80vh]">
    <h1>{{ $t("payment.successTitle") }}</h1>
    <p>{{ $t("payment.successMessage") }}</p>
  </div>
  <div v-if="status == 'cancel'" class="payment-page flex items-center justify-around h-[80vh]">
    <h1>{{ $t("payment.cancelTitle") }}</h1>
    <p>{{ $t("payment.cancelMessage") }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
const { status } = route.params

</script>
<style>
.payment-page {

  text-align: center;
  padding: 40px;
}
</style>
