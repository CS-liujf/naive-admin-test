<template>
  <div class="qrcode-container">
    <qrcode-vue
      :value="qrcodeValue"
      :size="size"
      level="H"
    />
    <span style="margin-top: 6%">打开微信小程序，扫码登录</span>
  </div>
</template>

<script lang="ts" setup>
import QrcodeVue from 'qrcode.vue';
import { onDeactivated } from 'vue';

const qrcodeValue = 'baidu.com';
const size = 180;
onDeactivated(() => {
  console.log('xiaohui');
});
</script>

<style scoped>
.qrcode-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 13%;
}
</style>
