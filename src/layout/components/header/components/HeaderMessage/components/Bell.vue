<template>
  <div>
    <n-tooltip
      placement="bottom"
      trigger="hover"
    >
      <template #trigger>
        <HoverContainer style="padding:0 2px;width: 40px">
          <n-badge
            :value="10"
            :max="15"
            :offset="[4,0]"
          >
            <svg-icon
              name="消息"
              size="21"
              :color="iconColor"
            />
          </n-badge>
        </HoverContainer>
      </template>
      <span>消息通知</span>
    </n-tooltip>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { isDark } from '@/utils/switchMode';
import HoverContainer from '@/components/HoverContainer/HoverContainer.vue';

const iconColor = computed(() => (isDark.value ? '#e6e6e6' : '#515151'));
</script>
<style scoped>
</style>
