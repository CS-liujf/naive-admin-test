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
import { useDebounceFn } from '@vueuse/core';
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
  // const date = +echarts.time.parse(`${year}-01-01`);
  const date = +echarts.time.parse(getDateRange()[0]);
  const end = +echarts.time.parse(getDateRange()[1]);
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

function getDateRange() {
  const res:string[] = ['', ''];
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  res[1] = `${year}-${month < 10 ? (`0${month}`) : month}-${day < 10 ? (`0${day}`) : day}`;
  date.setDate(date.getDate() - 364);
  year = date.getFullYear();
  month = date.getMonth() + 1;
  day = date.getDate();
  res[0] = `${year}-${month < 10 ? (`0${month}`) : month}-${day < 10 ? (`0${day}`) : day}`;
  return res;
}

const option: EChartsOption = {
  title: {
    top: 30,
    left: 'center',
    text: 'Daily Step Count',
  },
  tooltip: {},
  visualMap: {
    show: false,
    min: 0,
    max: 10000,
    type: 'piecewise',
    orient: 'horizontal',
    left: 'center',
    top: 65,
    pieces: [
      { value: 0, color: 'rgba(179,179,179,0.3)' },
      { gt: 0, lte: 2000, color: '#f5eea3' },
      { gt: 2000, lte: 4000, color: '#edd798' },
      { gt: 4000, lte: 6000, color: '#d58f77' },
      { gt: 6000, lte: 8000, color: '#c86f63' },
      { gt: 8000, color: '#bf444c' },
    ],
  },
  calendar: {
    top: 100,
    left: 30,
    right: 30,
    cellSize: ['auto', 14],
    splitLine: {
      show: false,
    },
    range: getDateRange(),
    itemStyle: {
      color: 'rgb(255,255,255,0)',
      borderWidth: 3,
      borderColor: 'rgba(255, 255, 255, 0)',
    },
    dayLabel: {
      margin: '60%',
      nameMap: ['', '一', '', '三', '', '五', ''],
    },
    yearLabel: { show: false },
  },
  series: {
    type: 'heatmap',
    coordinateSystem: 'calendar',
    data: getVirtualData('2022'),
  },
  backgroundColor: '',
};

const chartDom = ref<HTMLElement>();
let myChart:echarts.ECharts;
const chartTheme = computed(() => (isDark.value ? 'dark' : 'light'));
const renderChart = (element:HTMLElement) => {
  myChart?.dispose();
  myChart = echarts.init(element, chartTheme.value, { locale: 'ZH' });
  myChart.setOption(option);
};

let resizeOb:ResizeObserver;
onMounted(() => {
  renderChart(chartDom.value!);
  resizeOb = new ResizeObserver(
    useDebounceFn(() => {
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
