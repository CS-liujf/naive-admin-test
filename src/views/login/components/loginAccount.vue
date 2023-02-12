<template>
  <div style="margin-top:3%">
    <n-form
      ref="formRef"
      :model="formValue"
      :rules="rules"
      size="large"
    >
      <n-form-item
        path="account"
      >
        <n-input
          v-model:value="formValue.account"
          placeholder="邮箱/手机号码"
        />
      </n-form-item>
      <n-form-item
        path="password"
        style="margin-top:-20px"
      >
        <n-input
          v-model:value="formValue.password"
          placeholder="密码"
        />
      </n-form-item>
      <div style="width:100%;display:flex;justify-content:space-between;">
        <router-link to="/register">
          注册
        </router-link>
        <span>忘记密码</span>
      </div>
      <n-form-item>
        <n-button
          :loading="loginLoading"
          attr-type="button"
          style="width:100%"
          type="primary"
          @click="submit"
        >
          登录
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { FormInst } from 'naive-ui';
import { useRequest } from 'vue-request';
import { login as loginRequest } from '@/api/user';
import { useUserStore } from '@/store/auth/user';
import { router } from '@/router';

const formRef = ref<FormInst | null>(null);
const formValue = ref({
  account: '',
  password: '',
});
const rules = {
  account: {
    required: true,
    message: '请输入账号',
    trigger: 'blur',
  },
  password: {
    required: true,
    message: '请输入密码',
    trigger: ['input', 'blur'],
  },
};

const userStore = useUserStore();
const { loading: loginLoading, run: runLoginRequest } = useRequest(loginRequest, {
  manual: true,
  onSuccess: (data:any) => {
    userStore.loginHandler(data.token, data.userRoles);
    router.push('/test1');
  },
});
const submit = (e: MouseEvent) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      // window.$message.success('yes');
      runLoginRequest();
    } else {
      console.log(errors);
      window.$message.error('no');
    }
  });
};
</script>

<style scoped>

</style>
