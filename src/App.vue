<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// 引入自定义的provider组件，该组件由loading-bar、notification、message provider组成
import Layout from '@/layout/layout.vue';
import NaiveProvider from './layout/components/NaiveProvider/NaiveProvider.vue';
</script>

<template>
  <naive-provider>
    <layout />
  </naive-provider>
</template>

<style>
</style>
