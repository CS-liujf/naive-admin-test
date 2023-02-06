<template>
  <div style="margin-top:3%">
    <n-form
      ref="formRef"
      :model="formValue"
      :rules="rules"
      size="large"
    >
      <n-form-item
        path="phone"
      >
        <n-input
          v-model:value="formValue.phone"
          placeholder="手机号码"
        />
      </n-form-item>
      <n-form-item
        path="valCode"
        style="margin-top:-20px"
      >
        <n-input
          v-model:value="formValue.valCode"
          placeholder="验证码"
        />
        <n-button
          style="margin-left:8px;padding: 8px;min-width:91px;"
          :disabled="countDown.timing"
          @click="sendCode(30)"
        >
          {{ countDown.timing?`${countDown.count} 秒`:"获取验证码" }}
        </n-button>
      </n-form-item>
      <router-link to="/register">
        注册
      </router-link>
      <n-form-item>
        <n-button
          attr-type="button"
          style="width:100%"
          type="primary"
          @click="handleValidateClick"
        >
          登录
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { FormInst } from 'naive-ui';

const formRef = ref<FormInst | null>(null);
const formValue = ref({
  phone: '',
  valCode: '',
});
const rules = {
  phone: {
    required: true,
    message: '请输手机号',
    trigger: 'blur',
  },
  valCode: {
    required: true,
    message: '请输入验证码',
    trigger: ['input', 'blur'],
  },
};
const handleValidateClick = (e: MouseEvent) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      window.$message.success('yes');
    } else {
      console.log(errors);
      window.$message.error('no');
    }
  });
};

const countDown = reactive<{timing:boolean; count:number}>({ timing: false, count: 0 });
const sendCode = (interval:number) => {
  countDown.timing = true;
  countDown.count = interval;
  const timer = setInterval(() => {
    countDown.count -= 1;
    if (countDown.count === 0) {
      countDown.timing = false;
      countDown.count = 0;
      clearInterval(timer);
    }
  }, 1 * 1000);
};
</script>

<style scoped>

</style>
