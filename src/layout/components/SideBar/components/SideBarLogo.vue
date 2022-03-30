<template>
  <div class="logo">
    <SvgIcon
      name="console"
      size="32px"
      :style="margin"
    />
    <h2 v-show="!isCollapsed">
      Admin
    </h2>
  </div>
</template>

<script lang="ts" setup>
import isCollapsed from '@/layout/components/helper';
import SvgIcon from '@/components/SvgIcon/index.vue';
import { computed } from 'vue';

const margin = computed(() => (!isCollapsed.value ? 'margin-right:8px;' : 'margin-right:0px'));
</script>

<style scoped>
.logo  {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 100%;
}
</style>
