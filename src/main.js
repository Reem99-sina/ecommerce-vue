import './assets/main.css'

import { computed, createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { i18n } from './i18n'
import theme from './theme'
import './assets/main.css'
import products from '@/json/products.json'

const app = createApp(App)


app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
app.config.globalProperties.$theme = theme
app.config.globalProperties.$filters = {
  uppercase(value) {
    return value.toUpperCase()
  },
  reversing(value) {
    return value.split('').reverse().join('')
  },
  shorting(value, length) {
    if (value.length <= length) {
      return value
    }
    return value.substring(0, length) + '...'
  },
}

app.config.globalProperties.$filtersElement = computed(() => {
  function getUniqueValues(arr, key) {
    const values = arr.flatMap((item) => item[key] || [])
    return [...new Set(values)]
  }

  // Collect filters
  const filters = {
    categories: getUniqueValues(products, 'category'),
    sizes: getUniqueValues(products, 'sizes'),
    colors: getUniqueValues(products, 'colors'),
    prices: {
      min: Math.min(...products.map((p) => p.price)),
      max: Math.max(...products.map((p) => p.price)),
    },
    ratings: [...new Set(products.map((p) => p.rating))],
  }
  return filters
})
