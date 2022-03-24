<template>
  <n-layout-header class="header-container">
    <div class="header-left">
      <!--      <div>-->
      <HeaderCollapse style="margin-right: 8px"/>
      <HeaderBreadCrumb/>
    </div>
    <div class="container-right">
      <HeaderModeSwitch/>
      <HeaderAvatar/>
    </div>
    <!--    </div>-->
  </n-layout-header>
</template>

<script lang="ts" setup>
import HeaderModeSwitch from './components/HeaderModeSwitch.vue'
import HeaderAvatar from './components/HeaderAvatar.vue'
import HeaderCollapse from "@/layout/components/header/components/HeaderCollapse.vue"
import HeaderBreadCrumb from "@/layout/components/header/components/HeaderBreadCrumb.vue";
// import {computed} from "vue"
// import {isDark} from "@/util/switchMode"

// const className = computed(()=>{
//   return isDark.value ? 'header-container-dark': 'header-container-light'
// })
</script>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /*background-color: #956878;*/
  /*background-color: #18181c;*/
  /*这里用sticky，因此layout中的layout得加上absolute*/
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 54px;
  width: 100%;
  box-shadow: 0 1px 2px rgb(0 21 41 / 8%);
}

.header-container-light {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  opacity: 1;
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 54px;
  width: 100%;
  box-shadow: 0 1px 2px rgb(0 21 41 / 8%);
}

.container-right {
  display: flex;
  justify-content: flex-end;
  height: 100%;
}

.header-left {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
