<template>
  <!--  <n-tooltip placement="right" trigger="hover">-->
  <!--    <template #trigger>-->
  <HoverContainer
    style="padding: 0 10px"
    @click="test"
  >
    <SvgIcon
      v-if="!isCollapsed"
      name="收起"
      size="1.6em"
    />
    <SvgIcon
      v-else
      name="展开"
      size="1.6em"
    />
  </HoverContainer>
<!--    </template>-->
<!--    <span>{{message}}</span>-->
<!--  </n-tooltip>-->
</template>

<script lang="ts" setup>
import SvgIcon from '@/components/SvgIcon/index.vue';
import HoverContainer from '@/components/HoverContainer/HoverContainer.vue';
import isCollapsed from '@/layout/components/helper/';
// const isCollapsed=ref(true)
function test() {
  isCollapsed.value = !isCollapsed.value;
  // console.log(isCollapsed.value)
}
// const message = computed(() => (isCollapsed.value ? '展开侧边栏' : '收起侧边栏'));
</script>
<style scoped>
</style>
