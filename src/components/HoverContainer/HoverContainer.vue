<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { isDark } from '@/utils/switchMode';

const className = computed(() => (!isDark.value ? 'hover-container light-container' : 'hover-container dark-container'));
</script>

<style scoped>
.hover-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
}
.light-container:hover {
  background-color: #f6f6f6;
}
.dark-container:hover {
  background-color: #333;
}
</style>
