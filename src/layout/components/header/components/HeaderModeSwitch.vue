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
.switch-container{
  padding: 0 3px;
}
</style>
