<script setup>

import Menu from '@/components/icons/IconMenu.vue'
import Cart from '@/components/icons/IconCart.vue'
import CustomDrawer from '@/components/global/DrawerCustom.vue'
import CustomButton from '@/components/global/Button.vue'
</script>

<template>
  <div class="header flex justify-between">
    <div class="flex gap-3">
      <CustomButton @click="drawerOpen = true">
        <Menu color="var(--color-burgundy)" width="28" height="18" />
      </CustomButton>

      <ul class="md:flex hidden">
        <RouterLink to="/" exact class="text-(--color-burgundy)">{{
          $t('home')
        }}</RouterLink>

      </ul>
    </div>
    <!-- <CustomButton @click="toggleMenu">
      {{ theme?.dark ? 'Light' : 'Dark' }}
    </CustomButton> -->
    <div class="flex relative right-5 items-center">
      <div class="makeClick md:block hidden">
        <RouterLink to="/cart">{{ $t('cart') }}</RouterLink>
      </div>
      <div class="bg-() text-white absolute rounded-full top-0 px-2 right-0">

      </div>
      <div class="roundBorder flex items-center justify-center absolute -right-9 w-12 h-12 z-10">
        <RouterLink to="/cart" class="flex items-center gap-1">
          <Cart color="var(--color-burgundy)" width="45" height="45" />

        </RouterLink>

      </div>

    </div>
  </div>
  <CustomDrawer v-model:open="drawerOpen" direction="left" size="300px" :lock-background-scroll="true"
    :onClose="() => console.log('Drawer closed')" class-name="flex items-center">
    <ul class="flex flex-col">
      <RouterLink to="/" exact class="text-(--color-gray) font-bold! text-xl!">{{
        $t('home')
      }}</RouterLink>

    </ul>
  </CustomDrawer>
</template>

<script>
import theme from '@/theme'
import { ref } from 'vue'

const drawerOpen = ref(false)
export default {
  methods: {
    toggleMenu() {
      theme.dark = !theme.dark
    },
  },
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  gap: 2rem;
  align-items: center;

  ul {
    gap: 20px;

    a {
      font-weight: bold;
    }
  }

  .makeClick {
    background-color: var(--vt-c-burgundy);
    padding: 10px 16px;
    border-radius: 22px;

    a {
      color: var(--vt-c-white);
      font-weight: bold;
    }
  }

  .roundBorder {
    border: 10px solid var(--vt-c-burgundy);

    border-radius: 50%;

    a {
      color: var(--vt-c-white);
      font-weight: bold;
    }
  }
}
</style>
