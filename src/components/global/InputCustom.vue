<script setup>
import { ref, computed } from 'vue'

// Props
const props = defineProps({
  label: String,
  inputProps: { type: Object, default: () => ({}) },
  errorMessage: String,
  mandatoryIcon: { type: Boolean, default: false },
  leftIcon: Object,
  rightIcon: Object,
  disabled: { type: Boolean, default: false },
  className: String,
})

// Emits
const emit = defineEmits(['update:modelValue'])

// Reactive state for password visibility
const showPassword = ref(false)
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

// Determine input type dynamically
const inputType = computed(() => {
  if (props.inputProps.type === 'password') {
    return showPassword.value ? 'text' : 'password'
  }
  return props.inputProps.type || 'text'
})
</script>

<template>
  <div class="w-full">
    <!-- Label -->
    <label v-if="label" :class="[
      'dark:text-text-dark mb-2 flex items-center gap-x-2 text-base font-bold text-headerBlue capitalize',
      errorMessage ? 'dark:text-error-dark text-red-600' : '',
    ]">
      {{ label }}

    </label>

    <!-- Input wrapper -->
    <div class="relative flex h-full items-center">
      <!-- Right icon (password toggle or custom rightIcon) -->
      <div class="absolute top-1/2 right-0 -translate-y-1/2 transform cursor-pointer p-3"
        @click="props.inputProps.type === 'password' ? togglePasswordVisibility() : null">
        <component v-if="props.inputProps.type === 'password'" :is="showPassword ? LockKeyhole : LockKeyholeOpen"
          class="text-gray-400" />
        <component v-else-if="rightIcon" :is="rightIcon" />
      </div>

      <!-- Left icon -->
      <div class="absolute top-1/2 left-0 -translate-y-1/2 transform p-3">
        <component v-if="leftIcon" :is="leftIcon" />
      </div>

      <!-- Input field -->
      <input v-bind="props.inputProps" :type="inputType" :disabled="disabled"
        @input="emit('update:modelValue', $event.target.value)" :class="[
          disabled ? 'bg-bg3' : 'bg-(--vt-c-gray)',
          'block min-h-14 w-full p-2.5 text-sm font-normal text-secondary3',
          `border ${errorMessage ? 'border-red-600' : 'border-none'}`,
          'placeholder:text-sm! placeholder:font-normal!',
          leftIcon ? 'pl-12' : 'pl-4',
          rightIcon || props.inputProps.type === 'password' ? 'pr-12' : 'pr-4',
          props.className || '',
          'focus-visible:outline-0',
        ]" />
    </div>

    <!-- Slot for additional children -->
    <slot />
    <div className=" flex items-start gap-x-1 text-xs text-red-600">
      <p v-if="errorMessage" :errorMessage="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>
