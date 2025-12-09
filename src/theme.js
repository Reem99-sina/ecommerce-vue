// src/theme.js
import { reactive, watch } from 'vue'

const state = reactive({
  dark: false,
})

// Watch and sync with HTML class
watch(
  () => state.dark,
  (newValue) => {
    
    if (newValue) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  },
)

// Optional: persist in localStorage
localStorage.getItem('theme') === 'dark' ? (state.dark = true) : (state.dark = false)
watch(
  () => state.dark,
  (val) => {
    localStorage.setItem('theme', val ? 'dark' : 'light')
    if (val) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  },
)

export default state
