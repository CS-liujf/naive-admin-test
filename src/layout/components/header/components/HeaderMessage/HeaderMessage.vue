<template>
  <n-popover
    trigger="click"
    width="330"
    placement="bottom-end"
  >
    <!--    铃铛-->
    <template #trigger>
      <n-tooltip
        placement="bottom"
        trigger="hover"
      >
        <template #trigger>
          <HoverContainer style="padding:0 2px;width: 40px">
            <n-badge
              :value="10"
              :max="15"
              :offset="[4,0]"
            >
              <svg-icon
                name="消息"
                size="21"
                :color="iconColor"
              />
            </n-badge>
          </HoverContainer>
        </template>
        <span>消息通知</span>
      </n-tooltip>
    </template>

    <!--    消息tab展示-->
    <n-tabs
      type="line"
      justify-content="space-around"
      size="small"
      animated
    >
      <n-tab-pane
        name="通知"
        tab="通知"
      >
        <div style="width:100%;background-color: #9C0502;height:30px" />
      </n-tab-pane>
      <n-tab-pane
        name="回复"
        tab="回复"
      >
        Hey Jude
      </n-tab-pane>
      <n-tab-pane
        name="私信"
        tab="私信"
      >
        <div
          ref="scroller"
          class="scroller"
          :class="scrollbarThumbColor"
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
        <div>fsdf</div>
        <div>fsdf</div>
        <div>fsdf</div>
      </n-space>
    </template>
  </n-popover>
</template>
<script lang="ts" setup>
import HoverContainer from '@/components/HoverContainer/HoverContainer.vue';
import SvgIcon from '@/components/SvgIcon/index.vue';
import { isDark } from '@/utils/switchMode';
import { computed, ref } from 'vue';
import { useInfiniteScroll } from '@vueuse/core';

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
// const scrollbarThumbColor = computed(() => (
// isDark.value ? 'rgba(195,195,195,0.27)' : 'rgba(0,0,0,0.2)'));
const scrollbarThumbColor = computed(() => (isDark.value ? 'scroller-dark' : 'scroller-light'));

</script>
<style scoped>
.scroller{
  max-height: 200px;
  overflow-y: scroll;
}
.scroller::-webkit-scrollbar{
  width: 0;
}
.scroller:hover::-webkit-scrollbar{
  width: 4px;
}
.scroller::-webkit-scrollbar-thumb{
  border-radius: 11px;
}
.scroller-light::-webkit-scrollbar-thumb{
  background-color: rgba(0,0,0,0.1)
}
.scroller-dark::-webkit-scrollbar-thumb{
  background-color: rgba(195,195,195,0.27)
}
</style>
