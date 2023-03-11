<template>
  <div>
    <input
      ref="inputRef"
      type="file"
      accept="image/*"
      style="display: none"
      @change="handleChange"
    >
    <n-tooltip trigger="hover">
      <template #trigger>
        <n-avatar
          round
          :size="220"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          @click="openFileWindow"
        />
      </template>
      点击上传新头像
    </n-tooltip>

    <!--    头像编辑弹窗-->
    <n-modal
      v-model:show="showEditModal"
      preset="card"
      style="width: 700px"
      title="头像编辑"
      size="huge"
      :bordered="false"
    >
      <!--      内容-->
      <template #default>
        <div class="content-container">
          <div class="left-container">
            <vueCropper
              ref="cropper"
              :img="option.img"
              :output-size="option.size"
              :output-type="option.outputType"
              :auto-crop="true"
              :fixed="true"
              :fixed-box="true"
              :center-box="true"
              @real-time="previewHandler"
            />
            <n-space
              justify="space-between"
              style="margin-top: 8px"
            >
              <n-button
                type="info"
                size="small"
                text
                @click="openFileWindow"
              >
                重新上传
              </n-button>
              <n-space>
                <n-button
                  circle
                  size="small"
                  text
                  @click="rotateLeft"
                >
                  <template #icon>
                    <svg-icon
                      size="25"
                      name="逆时针旋转"
                    />
                  </template>
                </n-button>
                <n-button
                  circle
                  size="small"
                  text
                  @click="rotateRight"
                >
                  <template #icon>
                    <svg-icon
                      size="25"
                      name="顺时针旋转"
                    />
                  </template>
                </n-button>
              </n-space>
            </n-space>
          </div>

          <!--          预览区-->
          <div class="preview-container">
            <span>预览</span>
            <div :style="previewStyle1">
              <div :style="previews.div">
                <img
                  :src="previews.url"
                  :style="previews.img"
                >
              </div>
            </div>
          </div>
        </div>
      </template>

      <!--      底部按钮-->
      <template #footer>
        <n-space justify="end">
          <n-button @click="showEditModal=false">
            取消
          </n-button>
          <n-button
            strong
            secondary
            type="primary"
            @click="confirm"
          >
            确认
          </n-button>
        </n-space>
      </template>
    </n-modal>
  </div>
</template>
<script lang="ts" setup>
import 'vue-cropper/dist/index.css';
import { VueCropper } from 'vue-cropper';
import { defineEmits, reactive, ref } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import SvgIcon from '@/components/SvgIcon/index.vue';

interface Opt{
  img:Blob|string|null,
  size:1,
  outputType:'jpg'
}

const option = reactive<Opt>({
  img: null,
  size: 1,
  outputType: 'jpg',
});
const inputRef = ref<HTMLInputElement>();
function openFileWindow() {
  inputRef.value!.click();
}
const showEditModal = ref(false);
function handleChange() {
  if (inputRef.value && inputRef.value.files?.length !== 0) {
    const file = inputRef.value!.files![0];
    showEditModal.value = true;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      option.img = e.target!.result as string; // base64
    };
    // const URL = window.URL || window.webkitURL;
    // option.img = URL.createObjectURL(file);
  }
}

const previews: any = ref({});
const previewStyle1 = ref<any>({});
const previewHandler = useDebounceFn((data:any) => {
  previews.value = data;
  previewStyle1.value = {
    width: `${previews.value.w}px`,
    height: `${previews.value.h}px`,
    overflow: 'hidden',
    margin: '0',
    borderRadius: '50%',
    zoom: 200 / previews.value.w,
  };
}, 100);

interface Emits{
  (event:'confirm', img:any):void
}
const emit = defineEmits<Emits>();
const cropper = ref();
const confirm = () => {
  cropper.value.getCropData((data:any) => {
    // do something
    console.log(data);
    emit('confirm', data);
  });
};

// const reSelect
const rotateLeft = () => cropper.value.rotateLeft();
const rotateRight = () => cropper.value.rotateRight();

</script>
<style scoped>
.content-container {
  width: 100%;
  height:360px;
  display: flex;
}

.left-container{
  flex:3;
  padding-left: 8px;
  padding-right: 8px;
}

.preview-container{
  width:200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 6px;
}

</style>
