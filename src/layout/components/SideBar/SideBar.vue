<template>
  <n-layout-sider
    collapse-mode="width"
    :collapsed="isCollapsed"
    :collapsed-width="54"
    width="210"
  >
    <!--    <SideBarLogo />-->
    <SideBarMenu />
  </n-layout-sider>
</template>

<script lang="ts" setup>
import isCollapsed from '@/layout/components/helper/';
import SideBarMenu from './components/SideBarMenu.vue';
// import SideBarLogo from './components/SideBarLogo.vue';
</script>
<style scoped>

</style>
