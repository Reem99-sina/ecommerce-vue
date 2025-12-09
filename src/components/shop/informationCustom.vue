<template>
  <Form :validation-schema="schema" @submit="submitForm" class="flex flex-col gap-4 py-6">
    <h3 class="font-bold">{{ $t('contactInfo') }}</h3>
    <div class="flex flex-col gap-2">
      <Field name="email" v-slot="{ field, errorMessage }">
        <InputCustom v-bind="field" className="bg-transparent! " class="border! border-(--vt-c-gray)! "
          :inputProps="{ placeholder: 'Email' }" v-model="email" />
        <p v-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>
      </Field>
      <Field name="phone" v-slot="{ field, errorMessage }">
        <InputCustom v-bind="field" className="bg-transparent! " class="border! border-(--vt-c-gray)! "
          :inputProps="{ placeholder: 'Phone' }" v-model="phone" @input="field.onInput($event.replace(/\D/g, ''))" />
        <p v-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>
      </Field>
    </div>
    <div class="flex items-center justify-end">
      <CustomButton class="bg-(--vt-c-gray)! w-auto! flex items-center gap-5" type="submit">
        <p>{{ $t('Shipping') }}</p>
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

const store = useCounterStore()

const schema = yup.object({
  email: yup.string().required("Email is required").email("Invalid email"),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(/^[0-9]+$/, "Numbers only")
    .min(6, "Phone too short"),
});

const submitForm = (values) => {

  store.ChangeActiveTab({ label: 'Shipping' })
  store.AddUserDate(values)
  console.log(store.user)
};

</script>
