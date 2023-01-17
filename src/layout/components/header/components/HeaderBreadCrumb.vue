<template>
  <n-breadcrumb>
    <n-breadcrumb-item
      v-for="item in breadcrumbItemList"
      :key="item.path"
      @click="navigateTo(item.path)"
    >
      {{ item.title }}
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const router = useRouter();
const breadcrumbItemList = computed(() => {
  const routeMatched = route.matched.map(
    (item) => {
      const title = item.meta.title as string;
      const path = item.path as string;
      const href = `#${path}`;
      return { title, path, href };
    },
  );
  routeMatched.shift();
  return routeMatched;
});

function navigateTo(path:string) {
  // console.log(path);
  router.push(path);
}

// console.log(route.matched);
</script>

<style scoped>

</style>
