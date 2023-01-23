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
        <n-button style="margin-left:8px;padding: 8px;">
          获取验证码
        </n-button>
      </n-form-item>
      <div>
        注册
      </div>
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
import { ref } from 'vue';
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
</script>

<style scoped>

</style>
