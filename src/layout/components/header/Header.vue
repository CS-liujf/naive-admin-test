<template>
<n-layout-header>
  <div class="container">
    <HeaderModeSwitch/>
  </div>
</n-layout-header>
</template>

<script lang="ts" setup>
import HeaderModeSwitch from './components/HeaderModeSwitch.vue'
</script>

<style scoped>
n-layout-header{
  display: flex;
  align-items: center;
  padding: 9px;
}
.container {
  display: flex;
  justify-content: flex-end;
  height: 40px;
}

</style>
