import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import { staticRoutes } from '@/router/route_module/static';

function isPermission(userRoles: Set<string>, page_roles: Array<string>): boolean {
    const pageRoles = page_roles.reduce((prev, cur) => { if (prev.length == 0) return '(' + cur + ')'; return prev + '||' + '(' + cur + ')' }, '')
        .replace(/\s*/g, "");

    let temp: string = '';
    let ans: string = ''

    for (let i = 0; i < pageRoles.length; ++i) {
        if (pageRoles[i] == '&' || pageRoles[i] == '|' || pageRoles[i] == '(' || pageRoles[i] == ')') {
            if (temp.length != 0) {
                ans += userRoles.has(temp);
                temp = '';
            }
            ans += pageRoles[i];
        } else {
            temp += pageRoles[i];
        }
    }

    return eval(ans);
}

export function filterDynamicRoutes(dynamicRoutes: Array<RouteRecordRaw>, userRoles: Set<string>): Array<RouteRecordRaw> {
    const res: Array<RouteRecordRaw> = []

    dynamicRoutes.forEach(route => {
        if (isPermission(userRoles, route.meta?.roles as Array<string>)) {
            const tmp = { ...route };
            if (tmp.children) {
                tmp.children = filterDynamicRoutes(route.children as Array<RouteRecordRaw>, userRoles);
                if (tmp.children.length == 0) {
                    delete tmp.children
                }
            }

            res.push(tmp)
        }
    })
    return res;
}

export const useRouteStore = defineStore('routePermission', {
    state: () => {
        return {
            isGetUserInfo: false,
            userRoutes: [] as Array<RouteRecordRaw>, //用户完整路由表
            filteredRoutes: [] as Array<RouteRecordRaw>, //过滤后用户完整的动态路由表
            userRoles: {} as Set<string>
        }
    },
    getters: {

    },
    actions: {
        generateRoutes(dynamicRoutes: Array<RouteRecordRaw>): Array<RouteRecordRaw> {
            return filterDynamicRoutes(dynamicRoutes, this.userRoles)
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
            console.log(this.filteredRoutes)
        }
    }
})