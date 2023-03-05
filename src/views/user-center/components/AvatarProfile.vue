<template>
  <n-card>
    <div class="page-container">
      <AvatarEdit />
    </div>
  </n-card>
</template>
<script lang="ts" setup>
import AvatarEdit from '@/components/AvatarEdit/AvatarEdit.vue';
</script>
<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 400px;
}
</style>
