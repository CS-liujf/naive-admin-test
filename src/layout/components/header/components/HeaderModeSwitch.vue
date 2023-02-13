<template>
  <n-tooltip
    placement="bottom"
    trigger="hover"
  >
    <template #trigger>
      <HoverContainer style="padding:0 2px">
        <ModeSwitch />
      </HoverContainer>
    </template>
    <span>{{ message }}</span>
  </n-tooltip>
</template>

<script lang="ts" setup>
import HoverContainer from '@/components/HoverContainer/HoverContainer.vue';
import ModeSwitch from '@/components/ModeSwitch/ModeSwitch.vue';
import { isDark } from '@/utils/switchMode';
import { computed } from 'vue';

const message = computed(() => (isDark.value ? '切换白天模式' : '切换夜间模式'));
</script>

<style scoped>
</style>
