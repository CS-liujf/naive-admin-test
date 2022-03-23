<template>
  <n-tooltip placement="bottom" trigger="hover">
    <template #trigger>
      <div @click="switchMode()" class="svg-container">
        <SvgIcon v-if="isDark" name="太阳" size="26"></SvgIcon>
        <SvgIcon v-else name="月亮" size="28"></SvgIcon>
      </div>
    </template>
    <span>{{ message }}</span>
  </n-tooltip>
</template>

<script lang="ts" setup>
import SvgIcon from "../SvgIcon/index.vue";
import {isDark, switchMode} from "@/util/switchMode";
import {computed} from "vue";
const message = computed(() => {
  return isDark.value ? '切换白天模式' : '切换夜间模式'
})
</script>

<style scoped>
.svg-container{
  cursor:pointer;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
