<template>
  <n-card title="测试">
    文字测试
    <n-button @click="test">
      naive-ui
    </n-button>
    <n-space>
      <n-tag> 爱在西元前</n-tag>
      <n-tag type="success">
        不该
      </n-tag>
      <n-tag type="warning">
        超人不会飞
      </n-tag>
      <n-tag type="error">
        手写的从前
      </n-tag>
      <n-tag type="info">
        哪里都是你
      </n-tag>
    </n-space>
    <SvgIcon name="test" />
    <n-button @click="createMessage">
      打开信息
    </n-button>
    <n-button
      strong
      secondary
      type="success"
      @click="switchMode()"
    >
      切换主题
    </n-button>
    <mode-switch />
  </n-card>
</template>
<script lang="ts" setup>
import { useMessage } from 'naive-ui';
import { switchMode } from '@/util/switchMode';
import ModeSwitch from '@/components/ModeSwitch/ModeSwitch.vue';
import showMes from './temp';

const message = useMessage();

function createMessage() {
  message.info(
    "I don't know why nobody told you how to unfold your love",
    {
      closable: true,
      duration: 5000,
    },
  );
}

function test() {
  showMes();
}

</script>
