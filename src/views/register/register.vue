<template>
  <n-select
    v-model:value="value"
    filterable
    placeholder="搜索歌曲"
    :options="options"
    :loading="loading"
    clearable
    remote
    @search="handleSearch"
  />
</template>

<script lang="ts" setup>
import { useRequest } from 'vue-request';
import { computed, ref } from 'vue';
import { SelectOption } from 'naive-ui';

function testService() {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      console.log('[vue-request] fetching data...');
      resolve(
        new Array(5).fill(null).map(() => Math.random().toString()),
      );
    }, 3000);
  });
}
const value = ref(null);

const { data, loading, run } = useRequest(testService, {
  throttleInterval: 1000,
  manual: true,
});

const handleSearch = () => {
  run();
};

const options = computed(() => data.value?.map((item, index) => ({
  label: item,
  value: index,
})) || []);
</script>

<style scoped>

</style>
