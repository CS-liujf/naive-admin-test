<template>
  <HoverContainer class="switch-container">
    <ModeSwitch></ModeSwitch>
  </HoverContainer>
</template>

<script lang="ts" setup>
import HoverContainer from '@/components/HoverContainer/HoverContainer.vue'
import ModeSwitch from '@/components/ModeSwitch/ModeSwitch.vue'
</script>

<style scoped>
.switch-container {
  /*width: 40px;*/
  padding: 0 4px;
}
</style>
