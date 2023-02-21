<template>
  <n-card title="活跃图">
    <div class="chart-container">
      <div
        id="chartDom"
        ref="chartDom"
        style="width:90%;height:250px;"
      />
    </div>
  </n-card>
</template>

<script lang="ts" setup>
import {
  onMounted, ref, watch, computed,
} from 'vue';
import { isDark } from '@/utils/switchMode';
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TitleComponentOption,
  CalendarComponent,
  CalendarComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  VisualMapComponent,
  VisualMapComponentOption,
} from 'echarts/components';
import { HeatmapChart, HeatmapSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  CalendarComponent,
  TooltipComponent,
  VisualMapComponent,
  HeatmapChart,
  CanvasRenderer,
]);

type EChartsOption = echarts.ComposeOption<
    | TitleComponentOption
    | CalendarComponentOption
    | TooltipComponentOption
    | VisualMapComponentOption
    | HeatmapSeriesOption
    >;

function getVirtualData(year: string) {
  const date = +echarts.time.parse(`${year}-01-01`);
  const end = +echarts.time.parse(`${+year + 1}-01-01`);
  const dayTime = 3600 * 24 * 1000;
  const data: [string, number][] = [];
  for (let time = date; time < end; time += dayTime) {
    data.push([
      echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
      Math.floor(Math.random() * 10000),
    ]);
  }
  return data;
}
const option: EChartsOption = {
  title: {
    top: 30,
    left: 'center',
    text: 'Daily Step Count',
  },
  tooltip: {},
  visualMap: {
    min: 0,
    max: 10000,
    type: 'piecewise',
    orient: 'horizontal',
    left: 'center',
    top: 65,
  },
  calendar: {
    top: 120,
    left: 30,
    right: 30,
    cellSize: ['auto', 13],
    range: '2016',
    itemStyle: {
      borderWidth: 0.5,
    },
    yearLabel: { show: false },
  },
  series: {
    type: 'heatmap',
    coordinateSystem: 'calendar',
    data: getVirtualData('2016'),
  },
  backgroundColor: '',
};

const chartDom = ref<HTMLElement>();
let myChart:echarts.ECharts;
const chartTheme = computed(() => (isDark.value ? 'dark' : 'light'));
const renderChart = (element:HTMLElement) => {
  myChart?.dispose();
  myChart = echarts.init(element, chartTheme.value);
  myChart.setOption(option);
};

function debounce(fun:Function, delay = 400) {
  // 定时器容器
  let timer = null;
  // 返回一个函数
  return (...args:any[]) => {
    // 清除定时器  可以保证该函数如果多次连续单位400ms毫秒内调用 ，只执行一次
    if (timer) clearInterval(timer);
    // 定时器
    timer = setTimeout(() => {
      fun.call(this, ...args);
    }, delay);
  };
}

let resizeOb:ResizeObserver;
onMounted(() => {
  renderChart(chartDom.value!);
  resizeOb = new ResizeObserver(
    debounce(() => {
      // 如果容器里有多个图表就可以如下调用
      // entries.forEach((entry) => {
      //   echarts.getInstanceByDom(entry.target as unknown as HTMLElement)?.resize();
      // });
      myChart?.resize();
    }, 14),
  );
  resizeOb.observe(chartDom.value!);
});

watch(isDark, () => { renderChart(chartDom.value!); });

</script>

<style scoped>
.chart-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
