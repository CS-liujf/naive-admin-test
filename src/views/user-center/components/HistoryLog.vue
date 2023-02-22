<template>
  <n-card title="历史活动">
    <!--    <n-space :size="50">-->
    <n-grid
      cols="5"
      x-gap="30"
      item-responsive
    >
      <n-grid-item :span="1">
        <n-menu
          :options="options"
          default-value="1"
          @update:value="selectYear"
        />
      </n-grid-item>
      <n-grid-item :span="4">
        <div>
          fsdfsdffsadfsdf
        </div>
      </n-grid-item>
    </n-grid>
    <!--    </n-space>-->
  </n-card>
</template>
<script lang="ts" setup>
import { reactive, defineEmits } from 'vue';
import type { MenuOption } from 'naive-ui';

const options = reactive<MenuOption[]>([
  {
    label: '2023年',
    key: '1',
  },
  {
    label: '2022年',
    key: '2',
  },
  {
    label: '2021年',
    key: '3',
  },
]);

const emit = defineEmits(['selectYear']);
const selectYear = async (key:string, item:MenuOption) => {
  console.log(item);
  emit('selectYear', item.label);
};
</script>

<style scoped>
</style>
