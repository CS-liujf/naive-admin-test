<template>
  <div class="qrcode-container">
    <!--    <div class="wrap">-->
    <qrcode-vue
      :value="qrcodeValue"
      :size="169"
      level="M"
      render-as="svg"
    />
    <div
      v-if="isStale"
      class="stale-qrcode-container"
      @click="refreshCode"
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
import { login } from '@/api/user';

login().then((res) => console.log(res));

const optionalArr = ['baidu.com', 'www.zhihu.com', 'jd.com'];
const qrcodeValue = ref('baidu.com');
let index = 0;
const isStale = ref(false);
const initCode = () => {
  qrcodeValue.value = optionalArr[index];
  setTimeout(() => { isStale.value = true; }, 3 * 1000);
  index = (index + 1) % optionalArr.length;
};
initCode();

const refreshCode = () => {
  isStale.value = false;
  initCode();
};
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
  width:170px;
  height:170px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.stale-qrcode-container:hover {
  cursor: pointer;
}
</style>
