<template>
  <div class="scene">
    <div class="box" ref="box">
      <img :src="src" alt="Product Image" class="w-full h-full object-cover" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const box = ref(null)

onMounted(() => {
  if (window.innerWidth >= 768) {
    gsap.to(box.value, {
      x: 0,
      rotationY: 360, // 3D rotation
      duration: 2,
      ease: 'power2.inOut',
      repeat: -1, // infinite
      yoyo: true,
    })
  }
})
defineProps({
  src: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.scene {
  perspective: 400px; /* Needed for 3D effect */
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d; /* 3D transforms work */
}
</style>
