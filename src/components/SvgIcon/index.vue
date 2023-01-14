<template>
  <n-icon
    :color="color"
    :depth="depth"
    :size="size"
  >
    <svg aria-hidden="true">
      <use :href="symbolId" />
    </svg>
  </n-icon>
</template>

<script >
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: undefined,
    },
    size: {
      type: String,
      default: undefined,
    },
    depth: {
      type: 1 | 2 | 3 | 4 | 5,
      default: undefined,
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`);
    return { symbolId };
  },
});
</script>
