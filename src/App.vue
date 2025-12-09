<script setup>
import Header from '@/components/global/HeaderCustom.vue'
</script>

<template>
  <header class="">
    <div class="wrapper">
      <Header />
    </div>
  </header>

  <RouterView />
</template>

<style>
body {
  background-color: var(--color-background);
}
</style>
<script>
import theme from '@/theme'

export default {
  setup() {
    const toggleTheme = () => (theme.dark = !theme.dark)
    return { theme, toggleTheme }
  },

  watch: {},
}
</script>
