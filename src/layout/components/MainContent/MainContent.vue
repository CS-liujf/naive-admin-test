<template>
  <n-layout-content :content-style="className">
    <div style="background-color:#cddf;height:1000px">
      <n-button type="primary">
        测试
      </n-button>
    </div>
    <!--    <n-dropdown :options="options">-->
    <!--      <n-button>用户资料</n-button>-->
    <!--    </n-dropdown>-->
    <!--    <n-icon size="3em" depth="3">-->
    <!--      <SvgIcon name="home" size="2em"></SvgIcon>-->
    <!--    </n-icon>-->
    <!--    <SvgIcon name="moon" size="30"></SvgIcon>-->
    <!--    <div style="width:100px;height:100px;">-->
    <!--    <ModeSwitch></ModeSwitch>-->
    <!--    </div>-->
  </n-layout-content>
</template>

<script lang="ts" setup>
import { isDark } from '@/util/switchMode';
import { computed } from 'vue';
// import SvgIcon from '@/components/SvgIcon/index.vue'
// import ModeSwitch from '@/components/ModeSwitch/ModeSwitch.vue'

const className = computed(() => (isDark.value ? 'padding: 18px 18px;background-color:#101014' : 'padding: 18px 18px;background-color:#f6f9f8'));
// const color = computed(() => (isDark.value ? '#fff' : '#515151'))
// const renderIcon = (iconName: string, size?:string, color?:ComputedRef) => {
//   return () => h(SvgIcon, { name: iconName, size, color })
// }
// const options = [
//   {
//     label: '用户资料',
//     key: 'profile',
//     icon: renderIcon('home', '1.5em', color),
//   },
// ];

</script>

<style scoped>

</style>
