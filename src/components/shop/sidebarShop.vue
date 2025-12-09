<script setup>
import Accordion from '@/components/global/AccordionCustom.vue'
import Slider from '@/components/global/Slider.vue'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
</script>

<template>
  <div class="flex flex-col gap-4">
    <h3 class="text-xl font-bold">{{ $t('filter') }}</h3>
     {{ filters }}
    <div>
      <ul>
        <li v-for="category in Object.keys($filtersElement.value)" :key="category">
          <Accordion :title="category">
            <div v-if="category === 'categories'" class="flex flex-col gap-2">
              <div
                v-for="option in $filtersElement.value[category]"
                class="flex items-center gap-2"
                v-bind:key="option"
              >
                <input
                  type="checkbox"
                  :key="option"
                  :value="option"
                  class="w-6 h-6 accent-(--color-burgundy)"
                  v-model="store.selectedCategories"
                />
                <label :key="option" class="flex items-center text-(--color-text)">{{
                  option
                }}</label>
              </div>
            </div>
            <div v-if="category == 'sizes'" class="flex items-center gap-2">
              <div
                v-for="option in $filtersElement.value[category]"
                class="border-(--vt-c-gray) border px-3 py-2"
                :key="option"
                @click="store.toggleSize(option)"
                :class="
                  store.selectedSizes.includes(option)
                    ? 'bg-(--color-burgundy) text-white border-(--color-burgundy)'
                    : 'border-gray-400 text-gray-700'
                "
              >
                <div>{{ option }}</div>
              </div>
            </div>
            <div v-if="category == 'colors'" class="flex items-center gap-2 flex-wrap">
              <div v-for="option in $filtersElement.value[category]" :key="option">
                <div
                  @click="store.toggleColor(option)"
                  :style="{
                    backgroundColor: store.selectedColors.includes(option)
                      ? --color - burgundy
                      : option,
                    borderColor: option,
                  }"
                  class="border-(--vt-c-gray) border px-4 py-3"
                  :class="
                    store.selectedColors.includes(option)
                      ? 'bg-(--color-burgundy)! text-white border-(--color-burgundy)!'
                      : 'border-gray-400 text-gray-700'
                  "
                >
                  {{ option }}
                </div>
              </div>
            </div>
            <div v-if="category == 'prices'" class="flex items-center gap-2 flex-wrap">
              <div>
                <div>
                  <Slider
                    :min="$filtersElement.value[category].min"
                    :max="$filtersElement.value[category].max"
                    label="Price Range"
                    fillColor="#a30f37"
                    v-model="store.price"
                  />
                </div>
              </div>
            </div>
            <div v-if="category == 'ratings'" class="flex items-center gap-2 flex-wrap">
              <div
                v-for="option in $filtersElement.value[category]"
                class="flex items-center gap-2"
                v-bind:key="option"
              >
                <input
                  type="checkbox"
                  :key="option"
                  :value="option"
                  class="w-6 h-6 accent-(--color-burgundy)"
                  v-model="store.selectedRatings"
                />
                <label :key="option" class="flex items-center text-(--color-text)">{{
                  option
                }}</label>
              </div>
            </div>
          </Accordion>
        </li>
      </ul>
    </div>
  </div>
</template>
