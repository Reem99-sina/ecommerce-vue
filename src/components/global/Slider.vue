<template>
  <div class="w-full flex flex-col">
    <label class="font-medium mb-1">{{ label }}</label>

    <div class="relative w-full">
      <!-- Background Track -->
      <div class="absolute top-1/2 -translate-y-1/2 h-2 w-full rounded-full bg-gray-300"></div>

      <!-- Filled Track -->
      <div
        class="absolute top-1/2 -translate-y-1/2 h-2 rounded-full"
        :style="{
          width: fillPercent + '%',
          background: fillColor
        }"
      ></div>

      <!-- Slider Input -->
      <input
        type="range"
        :min="min"
        :max="max"
        v-model="internalValue"
        class="w-full appearance-none bg-transparent z-10 relative slider"
      />
    </div>

    <div class="mt-2 font-semibold">{{ internalValue }}</div>
  </div>
</template>

<script>
export default {
  name: "CustomSlider",
  props: {
    modelValue: Number,
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    label: { type: String, default: "Slider" },
    fillColor: { type: String, default: "#800020" } // Burgundy
  },
  computed: {
    internalValue: {
      get() {
        return this.modelValue;
      },
      set(v) {
        this.$emit("update:modelValue", Number(v));
      }
    },
    fillPercent() {
      return ((this.internalValue - this.min) / (this.max - this.min)) * 100;
    }
  }
};
</script>

<style>
/* --- Custom Thumb --- */
.slider::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  background: white;
  border: 3px solid var(--color-burgundy, #800020);
  border-radius: 9999px;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: white;
  border: 3px solid var(--color-burgundy, #800020);
  border-radius: 9999px;
  cursor: pointer;
}

/* Remove default track */
.slider::-webkit-slider-runnable-track {
  background: transparent;
}
</style>
