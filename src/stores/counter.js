import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const activeTab = ref('')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  const selectedCategories = ref([])
  const selectedRatings = ref([])
  const selectedSizes = ref([])
  const selectedColors = ref([])
  const user = ref({})
  const cart = ref([])

  const price = ref(0)

  function toggleSize(size) {
    if (selectedSizes.value.includes(size)) {
      selectedSizes.value = selectedSizes.value.filter((s) => s !== size)
    } else {
      selectedSizes.value.push(size)
    }
  }

  function toggleColor(color) {
    if (selectedColors.value.includes(color)) {
      selectedColors.value = selectedColors.value.filter((s) => s !== color)
    } else {
      selectedColors.value.push(color)
    }
  }
  function AddCart(product) {
    const exists = cart.value.find((p) => p.id === product.id)
    if (exists) {
      exists.quantity += 1
    } else {
      cart.value.push({
        ...product,
        quantity: 1,
      })
    }
  }

  function RemoveCart(product) {
    const exists = cart.value.find((p) => p.id === product.id && product.quantity > 0)

    if (exists) {
      exists.quantity -= 1
    } else {
      cart.value = cart.value.filter((ele) => ele?.id != product.id)
    }
  }
  function DropCart(product) {
    cart.value = cart.value.filter((ele) => ele?.id != product.id)
  }
  function ChangeActiveTab(tab) {
    activeTab.value = tab.label
  }
  function AddUserDate(data) {
    user.value = Object.keys(user.value).length > 0 ? { ...user.value, ...data } : { ...data }
  }
  return {
    count,
    doubleCount,
    cart,
    AddCart,
    RemoveCart,
    DropCart,
    increment,
    toggleColor,
    toggleSize,
    selectedCategories,
    selectedColors,
    selectedRatings,
    selectedSizes,
    price,
    activeTab,
    ChangeActiveTab,
    user,
    AddUserDate
  }
})
