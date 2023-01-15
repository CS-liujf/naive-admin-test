import { useRouteStore } from "@/store/route/permission";
import { Router } from "vue-router";
import { dynamicRoutes } from "./dynamic";
import { useUserStore } from "@/store/auth/user";

export function setBeforeEach(router: Router): any {
    router.beforeEach((to, from, next) => {
        // window.$loadingBar.start();
        const routeStore = useRouteStore();
        const userStore = useUserStore();

        if (userStore.getIsLogin()) {
            if (routeStore.isGetUserInfo) {
                next();
                // window.$loadingBar.finish();
                return;
            }
            try {
                routeStore.setUserRoles(userStore.userRoles);
                const filteredRoutes = routeStore.generateRoutes(dynamicRoutes);
                filteredRoutes.forEach(route => {
                    router.addRoute(route)
                })
                routeStore.setIsGetUserInfo(true)
                routeStore.setUserRoutes(filteredRoutes);
                next({ ...to, replace: true })
            } catch (error) {
                console.log('error: ', error)
                userStore.resetState()
                next(`/login?redirect=${to.path}`)
            }
        } else {
            if (to.path == '/login') {
                console.log('1')
                next()
            } else {
                console.log('2')
                next(`/login?redirect=${to.path}`)
            }
        }

        // window.$loadingBar.finish();
    })
}