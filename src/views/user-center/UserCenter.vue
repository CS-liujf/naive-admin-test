<template>
  <div>
    <n-grid
      cols="4"
      :x-gap="16"
      item-responsive
    >
      <n-grid-item :span="3">
        <n-space
          :size="16"
          vertical
        >
          <heat-map />
          <history-log />
        </n-space>
      </n-grid-item>
      <n-grid-item :span="1">
        <n-space
          :size="16"
          vertical
        >
          <avatar-profile />
        </n-space>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script lang="ts" setup>
import HeatMap from './components/HeatMap.vue';
import AvatarProfile from './components/AvatarProfile.vue';
import HistoryLog from './components/HistoryLog.vue';
</script>

<style scoped>
</style>
