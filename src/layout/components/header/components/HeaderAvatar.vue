<template>
<!--<HoverContainer style="line-height:1.5rem">-->
  <n-dropdown trigger="click" :options="options" @select="handleSelect">
    <HoverContainer style="padding:0 8px">
      <SvgIcon name="头像" size="2.2em"></SvgIcon>
      <span class="username-span">username</span>
    </HoverContainer>
  </n-dropdown>
<!--</HoverContainer>-->
</template>

<script lang="ts" setup>
import HoverContainer from '@/components/HoverContainer/HoverContainer.vue'
import {h} from "vue"
import SvgIcon from "@/components/SvgIcon/index.vue"
import {isDark} from "@/util/switchMode"

// const color=computed(()=>{
//   return isDark.value ? '#fff':'#515151'
// })

const renderIcon = (iconName: string,size?:string) => {
  return () => {
    return h(SvgIcon, {name:iconName,size})
  }
}
const options = [
  {
    label: '用户中心',
    key: 'user-center',
    icon: renderIcon('用户','1.3em')
  },
  {
    type: 'divider',
    key: 'divider',
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon('退出','1.3em')
  },
];
const handleSelect = (key:string)=>{
  console.log(key)
  if(key==='logout'){
    window.$dialog.warning({
      title: '提示',
      content: '您确定要退出登录吗？',
      positiveText: '确定',
      negativeText: '取消'
    })
  }
}
</script>

<style scoped>
.username-span{
  padding-left: 8px;
  font-size:medium;
  line-height: 1.5rem;
}
</style>
