import { defineStore } from 'pinia';
import { RouteRecordRaw } from 'vue-router';
import { staticRoutes } from '@/router/route_module/static';

function isPermission(userRoles: Set<string>, pageRoles_: Array<string>): boolean {
  const pageRoles = pageRoles_.reduce((prev, cur) => (prev.length === 0 ? `(${cur})` : `${prev}||(${cur})`), '')
    .replace(/\s*/g, '');

  let temp: string = '';
  let ans: string = '';

  for (const chr of pageRoles) {
    if (chr === '&' || chr === '|' || chr === '(' || chr === ')') {
      if (temp.length !== 0) {
        ans += userRoles.has(temp);
        temp = '';
      }
      ans += chr;
    } else {
      temp += chr;
    }
  }

  return eval(ans);
}

export function filterDynamicRoutes(dynamicRoutes: Array<RouteRecordRaw>, userRoles: Set<string>): Array<RouteRecordRaw> {
  const res: Array<RouteRecordRaw> = [];

  dynamicRoutes.forEach((route) => {
    if (isPermission(userRoles, route.meta?.roles as Array<string>)) {
      const tmp = { ...route };
      if (tmp.children) {
        tmp.children = filterDynamicRoutes(route.children as Array<RouteRecordRaw>, userRoles);
        if (tmp.children.length === 0) {
          delete tmp.children;
        }
      }

      res.push(tmp);
    }
  });
  return res;
}

export const useRouteStore = defineStore('routePermission', {
  state: () => ({
    isGetUserInfo: false,
    userRoutes: [] as Array<RouteRecordRaw>, // 用户完整路由表
    filteredRoutes: [] as Array<RouteRecordRaw>, // 过滤后用户完整的动态路由表
    userRoles: {} as Set<string>,
  }),
  getters: {

  },
  actions: {
    hasRoutes() {
      return this.filteredRoutes.length > 0;
    },
    generateRoutes(dynamicRoutes: Array<RouteRecordRaw>): Array<RouteRecordRaw> {
      return filterDynamicRoutes(dynamicRoutes, this.userRoles);
    },
    setIsGetUserInfo(value: boolean) {
      this.isGetUserInfo = value;
    },
    setUserRoles(userRoles: Set<string>) {
      this.userRoles = userRoles;
    },
    setUserRoutes(routes: Array<RouteRecordRaw>) {
      this.filteredRoutes = routes;
      this.userRoutes = staticRoutes.concat(routes);
      // console.log(this.filteredRoutes);
    },
  },
});
