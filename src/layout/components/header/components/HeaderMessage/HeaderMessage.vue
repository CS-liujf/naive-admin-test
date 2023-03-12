<template>
  <div class="my-container">
    <n-popover
      placement="bottom-end"
      to=".my-container"
      trigger="click"
      width="330"
    >
      <!--    铃铛-->
      <template #trigger>
        <bell />
      </template>

      <!--    消息tab展示-->
      <n-tabs
        animated
        justify-content="space-around"
        size="small"
        type="line"
      >
        <n-tab-pane
          name="通知"
          style="height:200px"
          tab="通知"
        >
          <template #tab>
            <span>通知</span>
            <!--          <n-badge-->
            <!--            type="warning"-->
            <!--            :value="0"-->
            <!--            :max="15"-->
            <!--          />-->
          </template>
          <div style="width:100%;background-color: #9C0502;height:30px" />
        </n-tab-pane>
        <n-tab-pane
          name="回复"
          style="height:200px"
          tab="回复"
        >
          <template #tab>
            <span>回复</span>
            <!--          <n-badge-->
            <!--            :value="0"-->
            <!--            :max="15"-->
            <!--          />-->
          </template>
          Hey Jude
        </n-tab-pane>
        <n-tab-pane
          name="私信"
          tab="私信"
        >
          <template #tab>
            <span>私信</span>
            <!--          <n-badge-->
            <!--            type="info"-->
            <!--            :value="3"-->
            <!--            :max="15"-->
            <!--          />-->
          </template>
          <div
            ref="scroller"
            class="scroller"
          >
            <div v-for="item in 12">
              {{ item }}
            </div>
          </div>
        </n-tab-pane>
      </n-tabs>
      <template #footer>
        <n-space
          justify="space-around"
        >
          <n-button
            quaternary
            size="small"
            type="warning"
          >
            全部标记已读
          </n-button>
          <n-button
            quaternary
            size="small"
            type="info"
          >
            查看更多
          </n-button>
        </n-space>
      </template>
    </n-popover>
  </div>
</template>
<script lang="ts" setup>
import { isDark } from '@/utils/switchMode';
import { computed, ref } from 'vue';
import { useInfiniteScroll } from '@vueuse/core';
import Bell from './components/Bell.vue';

const scroller = ref<HTMLElement>();
useInfiniteScroll(
  scroller,
  () => {
    // load more
    console.log('触底了');
  },
  { distance: 10 },
);

const iconColor = computed(() => (isDark.value ? '#e6e6e6' : '#515151'));
const scrollbarThumbColor = computed(() => (
  isDark.value ? 'rgba(195,195,195,0.27)' : 'rgba(0,0,0,0.2)'));
// const scrollbarThumbColor = computed(() => (isDark.value ? 'scroller-dark' : 'scroller-light'));

</script>
<style scoped>
.my-container {
  display: flex;
}

.scroller {
  max-height: 200px;
  overflow-y: scroll;
}

.scroller::-webkit-scrollbar {
  width: 0;
}

.scroller:hover::-webkit-scrollbar {
  width: 5px;
}

.scroller::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: v-bind(scrollbarThumbColor)
}
</style>
