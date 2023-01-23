<template>
  <!--  <input-->
  <!--    v-model="name"-->
  <!--    type="text"-->
  <!--  >-->
  <!--  <input-->
  <!--    v-model="password"-->
  <!--    type="text"-->
  <!--  >-->
  <!--  <button-->
  <!--    type="button"-->
  <!--    @click="submit(2)"-->
  <!--  >-->
  <!--    提交-->
  <!--  </button>-->
  <div class="login-page-container">
    <div style="width:350px;margin-top: 18vh;height:400px">
      <n-card
        style="height:100%"
        hoverable
      >
        <n-tabs
          type="segment"
          :theme-overrides="themeOverrides"
        >
          <n-tab-pane
            name="qrcode"
            tab="二维码"
          >
            <login-qrcode />
          </n-tab-pane>
          <n-tab-pane
            name="account"
            tab="账号密码"
          >
            <login-account />
          </n-tab-pane>
          <n-tab-pane
            name="chap3"
            tab="手机验证码"
          >
            <login-phone />
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/auth/user';
import { ref } from 'vue';
import { router } from '@/router';
import { TabsProps } from 'naive-ui';
import LoginQrcode from '@/views/login/components/loginQrcode.vue';
import LoginAccount from '@/views/login/components/loginAccount.vue';
import LoginPhone from '@/views/login/components/loginPhone.vue';

type TabsThemeOverrides = NonNullable<TabsProps['themeOverrides']>
const themeOverrides:TabsThemeOverrides = {
  colorSegment: 'rgba(255,173,41,1)',
};

const name = ref('li');
const password = ref('123');
const userStore = useUserStore();
const submit = function (value:number) {
  userStore.loginHandler(name.value + password.value, ['admin']);
  router.push('/test1');
};
</script>

<style>
.login-page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height:100vh;
  width:100%;
  background-color: darkseagreen;
  opacity: 0.6;
}
</style>
