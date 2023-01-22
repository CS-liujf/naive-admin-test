<template>
  <div class="qrcode-container">
    <!--/*    <div style="position: relative;">*/-->
    <qrcode-vue
      :value="qrcodeValue"
      :size="179"
      level="M"
      render-as="svg"
    />
    <div
      v-if="isStale"
      class="stale-qrcode-container"
    >
      <svg-icon
        name="刷新"
        size="40"
      />
      <span>二维码过期，请点击刷新</span>
    </div>
    <!--    </div>-->
    <span style="margin-top: 6%">打开微信小程序，扫码登录</span>
  </div>
</template>

<script lang="ts" setup>
import QrcodeVue from 'qrcode.vue';
import { onUnmounted, ref } from 'vue';
import SvgIcon from '@/components/SvgIcon/index.vue';

const optionalArr = ['baidu.com', 'www.zhihu.com', 'jd.com'];

const qrcodeValue = 'baidu.com';

const isStale = ref(false);
setTimeout(() => { isStale.value = true; }, 30 * 1000);
onUnmounted(() => {
  console.log('xiaohui');
});
</script>

<style scoped>
.qrcode-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 13%;
}
.stale-qrcode-container{
  position: absolute;
  opacity:0.95;
  margin-top:-13%;
  background-color:#f7eedf;
  width:180px;
  height:180px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
