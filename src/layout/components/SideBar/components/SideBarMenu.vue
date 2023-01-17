<template>
  <!--  <n-scrollbar>-->
  <n-menu
    :collapsed="isCollapsed"
    :collapsed-width="54"
    :options="menuOptions"
    :root-indent="32"
    :indent="16"
    @update:value="handleMenuSelect"
  />
<!--  </n-scrollbar>-->
</template>
<script lang="ts" setup>
import isCollapsed from '@/layout/components/helper/';
import type { MenuOption } from 'naive-ui';
import { h } from 'vue';
import SvgIcon from '@/components/SvgIcon/index.vue';
import { useRouteStore } from '@/store/route/permission';
import { RouteRecordRaw, RouterLink} from 'vue-router';
import { router } from '@/router';


const routeStore = useRouteStore();

function renderIcon(iconName: string, size?:string, color?:string) {
  return () => h(SvgIcon, { name: iconName, size, color });
}


const getMenus = function (routes: Array<RouteRecordRaw>, basePath: string): MenuOption[] {
    const res: Array<MenuOption> = [];

    routes.forEach(route => {
        const tmp = {} as MenuOption;
        tmp.label = route.meta?.title;
        
        tmp.key = (basePath == '' ? '' : basePath + '/') + route.path;
        
        if (route.meta?.icon) {
            tmp.icon = renderIcon(route.meta?.icon as string, '22');
        }

        if (route.children) {
            tmp.children = getMenus(route.children, tmp.key);
        }
        res.push(tmp);
    })
    return res;
}

function handleMenuSelect(key: string, item: MenuOption): void {
    if (/http(s)?:/.test(key)) {
        window.open(key);
    } else {
        router.push(key)
    }
}

const menuOptions:MenuOption[] = getMenus(routeStore.filteredRoutes, '');

// const menuOptions:MenuOption[] = [
//   {
//     label: '主页',
//     key: 'profile',
//     icon: renderIcon('home', '22'),
//   },
// ];


</script>
<style scoped>

</style>
