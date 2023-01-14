<template>
  <div>
    {{ a }}
  </div>
  <n-button type="primary">
    你好
  </n-button>
  <n-card title="带封面的卡片">
    <template #cover>
      <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
    </template>
    卡片内容
  </n-card>
  <a href="#/a">跳转</a>
</template>

<script lang="ts" setup>

const a = 3;
</script>

<style scoped>
.n-card {
  max-width: 300px;
}
</style>
