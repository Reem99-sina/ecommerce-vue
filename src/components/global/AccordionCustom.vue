<template>
  <div class="accordion-root rounded mb-2">
    <!-- Accordion Header / Trigger -->
    <button
      class="accordion-trigger flex w-full justify-between items-center py-4 border-b border-dashed font-medium text-sm border-(--vt-c-gray)"
      @click="toggle"
    >
      <h2 class="capitalize text-lg font-bold">{{ title }}</h2>
      <ChevronDown
        class="h-2 w-2 transition-transform duration-200"
        :class="{ 'rotate-270': isOpen }"
      />
    </button>

    <transition name="accordion">
      <div v-show="isOpen" class="accordion-content overflow-hidden text-sm">
        <div class="py-2 px-4">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChevronDown from '@/components/icons/arrowLeft.vue'

defineProps({
  title: { type: String, required: true },
})

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.3s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
}
.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px; /* adjust for your content */
}
</style>
