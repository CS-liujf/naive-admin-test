<template>
  <n-layout-content :content-style="className">
    <router-view v-slot="{Component,route}">
      <transition
        name="content"
      >
        <component
          :is="Component"
          :key="route.path"
        />
      </transition>
    </router-view>
  </n-layout-content>
</template>

<script lang="ts" setup>
import { isDark } from '@/utils/switchMode';
import { computed } from 'vue';
// import SvgIcon from '@/components/SvgIcon/index.vue'
// import ModeSwitch from '@/components/ModeSwitch/ModeSwitch.vue'

const className = computed(() => (isDark.value ? 'padding: 18px 18px;background-color:#101014;min-height:92vh' : 'padding: 18px 18px;background-color:#f6f9f8;height:92vh'));
// const className = 'padding: 18px 18px;background-color:#f6f9f8;min-height:92vh';
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
.content-enter-active{
  animation: fadeIn 0.3s;
}
</style>
