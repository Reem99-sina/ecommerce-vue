<template>
  <Form :validation-schema="schema" @submit="submitForm" class="flex flex-col gap-4 py-6">
    <h3 class="font-bold">{{ $t('shippingAddress') }}</h3>
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-2">
        <Field name="first_name" v-slot="{ field, errorMessage }">
          <InputCustom v-bind="field" className="bg-transparent! " class="border! border-(--vt-c-gray)! "
            :inputProps="{ placeholder: 'first_name' }" v-model="first_name" />
          <p v-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>
        </Field>
        <Field name="last_name" v-slot="{ field, errorMessage }">
          <InputCustom v-bind="field" className="bg-transparent! " class="border! border-(--vt-c-gray)! "
            :inputProps="{ placeholder: 'last_name' }" v-model="last_name" />
          <p v-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>
        </Field>
      </div>
      <Field name="country" v-slot="{ field, errorMessage }">
        <InputCustom v-bind="field" className="bg-transparent! " class="border! border-(--vt-c-gray)! "
          :inputProps="{ placeholder: 'Country' }" v-model="country" />
        <p v-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>
      </Field>
      <Field name="state_region" v-slot="{ field, errorMessage }">
        <InputCustom v-bind="field" className="bg-transparent! " class="border! border-(--vt-c-gray)! "
          :inputProps="{ placeholder: 'State / Region' }" v-model="state_region" />
        <p v-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>
      </Field>
      <Field name="address" v-slot="{ field, errorMessage }">
        <InputCustom v-bind="field" className="bg-transparent! " class="border! border-(--vt-c-gray)! "
          :inputProps="{ placeholder: 'Address' }" v-model="address" />
        <p v-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>
      </Field>
      <div class="flex items-center gap-2">
        <Field name="city" v-slot="{ field, errorMessage }">
          <InputCustom v-bind="field" className="bg-transparent! " class="border! border-(--vt-c-gray)! "
            :inputProps="{ placeholder: 'City' }" v-model="city" />
          <p v-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>
        </Field>
        <Field name="postal_code" v-slot="{ field, errorMessage }">
          <InputCustom v-bind="field" className="bg-transparent! " class="border! border-(--vt-c-gray)! "
            :inputProps="{ placeholder: 'Postal Code' }" v-model="postal_code" />
          <p v-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>
        </Field>
      </div>
    </div>
    <div class="flex items-center justify-end">
      <CustomButton class="bg-(--vt-c-gray)! w-auto! flex items-center gap-5" type="submit">

        Pay Now

        <ArrowIcon :width="60" :height="30" />
      </CustomButton>
    </div>
  </Form>
</template>

<script setup>
import InputCustom from '../global/InputCustom.vue';
import CustomButton from '@/components/global/Button.vue'
import { useCounterStore } from '@/stores/counter'
import ArrowIcon from '@/components/icons/arrowIcon.vue'
import { computed, ref } from 'vue';
import { Form, Field, defineRule, configure } from "vee-validate";
import * as yup from "yup";
import { loadStripe } from '@stripe/stripe-js'

const store = useCounterStore()

const schema = yup.object({
  first_name: yup.string().required("first_name is required"),
  last_name: yup.string().required("last_name is required"),
  country: yup.string().required("country is required"),
  state_region: yup.string().required("state_region is required"),
  address: yup.string().required("address is required"),
  city: yup.string().required("city is required"),

  postal_code: yup.string().required("postal_code is required"),

});
const stripePromise = loadStripe('pk_test_51M9peeJJJvaHsLderwryeRTLRCgRl31CEu34P5h5ZXmkNJ1f6TRlyIR4EVK1XU3XlJ4ORQgaSJgvV3GzHaCPmzUM00mlkWgj0E') // Your Stripe publishable key

const pay = async () => {
  const stripe = await stripePromise

  // Call your backend to create a checkout session
  const res = await fetch('http://localhost:3000/api/create-checkout-session', { method: 'POST' })
  const data = await res.json()
  window.open(data.url, '_blank')

  // Redirect to Stripe Checkout
  const result = await stripe.redirectToCheckout({ sessionId: data.id })
  if (result.error) {
    alert(result.error.message)
  }
}


const submitForm = (values) => {

  // store.ChangeActiveTab({ label: 'payment' })
  store.AddUserDate(values)
  console.log(store.user)
  pay()
};


</script>
