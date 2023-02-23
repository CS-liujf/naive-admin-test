<template>
  <div>
    <n-grid
      cols="4"
      :x-gap="18"
      item-responsive
    >
      <n-grid-item :span="3">
        <n-space
          :size="20"
          vertical
        >
          <heat-map />
          <history-log @change-year="selectYear" />
        </n-space>
      </n-grid-item>
      <n-grid-item :span="1">
        <n-space
          :size="16"
          vertical
        >
          <avatar-profile />
          <n-button @click="selectYear">
            click
          </n-button>
        </n-space>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script lang="ts" setup>
import HeatMap from './components/HeatMap.vue';
import AvatarProfile from './components/AvatarProfile.vue';
import HistoryLog from './components/HistoryLog.vue';

const selectYear = (year:string) => {
  window.$message.success(year);
};
</script>

<style scoped>
</style>
