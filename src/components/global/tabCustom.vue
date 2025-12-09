<template>
  <div>
    <!-- Tabs Buttons -->
    <div class="flex gap-4  pb-2">
      <button :disabled="clickDisable" v-for="tab in tabsComponent" :key="tab.label" @mousedown="store.ChangeActiveTab(tab)" :class="[
        'px-3 py-2 font-medium',
        store.activeTab === tab.label
          ? ' text-black'
          : 'text-gray-500'
      ]">
        {{ tab.label }}
      </button>
    </div>

    <!-- Render Component -->
    <component :is="activeComponent" class="mt-4" />
  </div>
</template>

<script setup>
import {  computed, onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'
// Define tabs + their components
const store = useCounterStore()

const props = defineProps({
  tabsComponent: {
    type: Array,
    required: true,
  },
  clickDisable:{
    type:Boolean,
    default:false
  }
})
const activeComponent = computed(() => {
  return props.tabsComponent.find(t => t.label === store.activeTab)?.component
})
onMounted(() => {
  if (!store.activeTab && props.tabsComponent.length > 0) {
    store.ChangeActiveTab(props.tabsComponent[0])
  }
})
</script>
