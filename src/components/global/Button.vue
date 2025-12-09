<template>
  <button :type="type" :disabled="disabled" :class="[
    'custom-btn',
    variant,
    { 'dark-mode': isDark },
    size
  ]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
import theme from '@/theme'

export default {
  name: 'CustomButton',
  props: {
    variant: {
      type: String,
      default: 'outline', // primary, secondary, danger
    },
    size: {
      type: String,
      default: 'md', // sm, md, lg
    },
     type: {
      type: String,
      default: 'button', // sm, md, lg
    }
  },
  setup() {
    return {
      isDark: theme.dark
    }
  },
  disabled: {
    type: Boolean,
    default: false,
  }
}
</script>

<style scoped>
.custom-btn {
  font-family: 'Beatrice Deck Trial', sans-serif;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  transition: all 0.3s ease;
  font-weight: bold;
  outline: none;
}

.custom-btn.disabled,
.custom-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
}

.custom-btn:disabled:hover {
  opacity: 0.5;
  transform: none;
}

/* Sizes */
.sm {
  font-size: 0.8rem;
  padding: 0.3rem 1rem;
}

.md {
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
}

.lg {
  font-size: 1.2rem;
  padding: 0.7rem 2rem;
}

/* Variants - Light Mode */
.primary {
  background-color: #ff6b81;
  color: white;
}

.secondary {
  background-color: #5fa2dd;
  color: white;
}

.danger {
  background-color: #cc0000;
  color: white;
}

.outline {
  background-color: transparent;
  color: var(--color-text);
  /* border: 2px solid currentColor; */
}

/* Variants - Dark Mode */
.dark-mode.primary {
  background-color: #ff4d6d;
}

.dark-mode.secondary {
  background-color: #3b82f6;
}

.dark-mode.danger {
  background-color: #a30000;
}

/* Hover effects */
.custom-btn:hover {
  opacity: 0.85;
  transform: translateY(-2px);
}
</style>
