<script setup>
import { ref, watch, onUnmounted, computed } from 'vue'

const props = defineProps({
  open: Boolean,
  onClose: Function,
  className: String,
  direction: { type: String, default: 'left' }, // top, bottom, left, right
  size: { type: [String, Number], default: 'auto' },
  lockBackgroundScroll: { type: Boolean, default: false },
})

const emit = defineEmits(['update:open'])

const originalOverflow = ref('')

// Lock background scroll
watch(
  () => props.open,
  (val) => {
    if (props.lockBackgroundScroll) {
      if (val) {
        originalOverflow.value = document.body.style.overflow
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = originalOverflow.value
      }
    }
  },
  { immediate: true }
)

onUnmounted(() => {
  document.body.style.overflow = originalOverflow.value
})

// Compute drawer style
const drawerStyle = computed(() => {
  const sizeValue = typeof props.size === 'number' ? props.size + 'px' : props.size

  switch (props.direction) {
    case 'left':
      return { left: 0, top: 0, bottom: 0, width: sizeValue, height: '100vh' }
    case 'right':
      return { right: 0, top: 0, bottom: 0, width: sizeValue, height: '100vh' }
    case 'top':
      return { top: 0, left: 0, right: 0, height: sizeValue, width: '100%' }
    case 'bottom':
    default:
      return { bottom: 0, left: 0, right: 0, height: sizeValue, width: '100%' }
  }
})

const handleClose = () => {
  emit('update:open', false)
  props.onClose && props.onClose()
}
</script>

<template>
  <teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 bg-black/50 z-50 flex items-end justify-center"
      @click.self="handleClose"
    >
      <div
        :class="['bg-[var(--color-burgundy)] z-50 absolute', className]"
        :style="drawerStyle"
      >
        <button class="absolute top-2 right-2 text-2xl " @click="handleClose">X</button>
        <div class="flex flex-col w-full h-full p-7">
          <slot />
        </div>
      </div>
    </div>
  </teleport>
</template>
