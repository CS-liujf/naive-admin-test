<template>
  <div
    class="svg-container"
    @click.stop="switchMode()"
  >
    <SvgIcon
      v-if="isDark"
      name="太阳"
      size="26"
    />
    <SvgIcon
      v-else
      name="月亮"
      size="28"
    />
  </div>
</template>

<script lang="ts" setup>
import { isDark, switchMode } from '@/utils/switchMode';
import SvgIcon from '../SvgIcon/index.vue';
</script>

<style scoped>
.svg-container{
  cursor:pointer;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
