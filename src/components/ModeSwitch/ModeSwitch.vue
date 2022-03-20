<template>
  <n-tooltip placement="bottom" trigger="hover">
    <template #trigger>
      <n-icon size="27" style="cursor:pointer;">
        <SvgIcon v-if="isDark" name="太阳" @click="switchMode()"></SvgIcon>
        <SvgIcon v-else name="月亮" @click="switchMode()"></SvgIcon>
      </n-icon>
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

</style>
