<template>
  <n-layout-content class="content-container">
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

const backgroundColor = computed(() => (isDark.value ? '#101014' : '#f6f9f8'));
</script>

<style scoped>
/* 给transition组件提供动画的css */
/* 不可删去！*/
.content-enter-active{
  animation: fadeIn 0.3s;
}
.content-container{
  padding: 18px 18px;
  background-color:v-bind(backgroundColor);
  min-height:calc(100vh - 54px);
}
</style>
