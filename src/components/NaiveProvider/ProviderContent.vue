<template>
  <slot/>
</template>

<script setup lang="ts">
// 将对话、信息、通知组件挂载到window对象
import {useLoadingBar, useDialog, useMessage, useNotification} from "naive-ui"
window.$loadingBar=useLoadingBar()
window.$dialog=useDialog()
window.$message=useMessage()
window.$notification=useNotification()
</script>
