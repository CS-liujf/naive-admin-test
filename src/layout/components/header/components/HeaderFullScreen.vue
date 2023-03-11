<template>
  <n-tooltip
    placement="bottom"
    trigger="hover"
  >
    <template #trigger>
      <HoverContainer
        style="padding:0 2px;width: 30px"
        @click="toggle"
      >
        <svg-icon
          v-if="!isFullscreen"
          name="全屏"
          size="24"
        />
        <svg-icon
          v-else
          name="退出全屏"
          size="24"
        />
      </HoverContainer>
    </template>
    {{ isFullscreen? '退出全屏':'全屏' }}
  </n-tooltip>
</template>
<script lang="ts" setup>
import HoverContainer from '@/components/HoverContainer/HoverContainer.vue';
import SvgIcon from '@/components/SvgIcon/index.vue';
import { useFullscreen } from '@vueuse/core';

const { isFullscreen, toggle } = useFullscreen();
</script>
<style scoped>
</style>
