<template>
    <n-loading-bar-provider>
      <n-message-provider>
        <n-dialog-provider>
          <n-notification-provider>
            <provider-content>
              <slot/>
            </provider-content>
          </n-notification-provider>
        </n-dialog-provider>
      </n-message-provider>
    </n-loading-bar-provider>
</template>

<script setup lang="ts">
// 引入的组件是为了给window对象挂载方法
import ProviderContent from "./ProviderContent.vue";
</script>

