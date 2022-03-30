<template>
  <n-layout
    has-sider
    position="absolute"
  >
    <SideBar />
    <n-layout>
      <Header />
      <MainContent />
      <!--      <n-layout-header>颐和园路</n-layout-header>-->
      <!--      <n-layout-content content-style="padding: 18px 18px;background-color:#f6f9f8">-->
      <!--        <div style="background-color:#cddf;height:1000px"></div>-->
      <!--      </n-layout-content>-->
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import SideBar from './components/SideBar/SideBar.vue';
import Header from './components/header/Header.vue';
import MainContent from './components/MainContent/MainContent.vue';
</script>

<style scoped>

</style>
