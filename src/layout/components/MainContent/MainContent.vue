<template>
  <n-layout-content :class="className">
    <router-view v-slot="{Component,route}">
      <transition
        name="content"
      >
        <component
          :is="Component"
          :key="route.path"
        />
      </transition>
    </router-view>
  </n-layout-content>
</template>

<script lang="ts" setup>
import { isDark } from '@/utils/switchMode';
import { computed } from 'vue';

const className = computed(() => (isDark.value ? 'night-content-container' : 'light-content-container'));
</script>

<style scoped>
.content-enter-active{
  animation: fadeIn 0.3s;
}
.light-content-container{
  padding: 18px 18px;
  background-color:#f6f9f8;
  min-height:calc(100vh - 54px);
}
.night-content-container{
  padding: 18px 18px;
  background-color:#101014;
  min-height:calc(100vh - 54px);
}
</style>
