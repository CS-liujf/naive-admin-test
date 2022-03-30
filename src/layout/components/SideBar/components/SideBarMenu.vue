<template>
  <n-scrollbar>
    <n-menu
      :collapsed="isCollapsed"
      :collapsed-width="54"
      :options="menuOptions"
      :indent="16"
    />
  </n-scrollbar>
</template>
<script lang="ts" setup>
import isCollapsed from '@/layout/components/helper/';
import type { MenuOption } from 'naive-ui';
import { h } from 'vue';
import SvgIcon from '@/components/SvgIcon/index.vue';

function renderIcon(iconName: string, size?:string, color?:string) {
  return () => h(SvgIcon, { name: iconName, size, color });
}
const menuOptions:MenuOption[] = [
  {
    label: '主页',
    key: 'profile',
    icon: renderIcon('home', '22'),
  },
  {
    label: '主页',
    key: 'profile1',
    icon: renderIcon('home', '22'),
  },
  {
    label: '主页',
    key: 'profile2',
    icon: renderIcon('home', '22'),
  },
  {
    label: '主页',
    key: 'profile3',
    icon: renderIcon('home', '22'),
  },
  {
    label: '主页',
    key: 'profile4',
    icon: renderIcon('home', '22'),
  },
];
</script>
<style scoped>

</style>
