import { useRouteStore } from '@/store/route/permission';
import { Router, isNavigationFailure } from 'vue-router';
import { useUserStore } from '@/store/auth/user';
import { whiteList } from '@/router/route_module/static';
import { dynamicRoutes } from './dynamic';

export function setBeforeEach(router: Router): any {
  router.beforeEach((to, from, next) => {
    window.$loadingBar.start();
    const routeStore = useRouteStore();
    const userStore = useUserStore();

    if (userStore.getLoginStatus()) {
      if (to.path === '/login') {
        // 如果已经登录了则重定向到主页
        next({ path: '/' });
      } else {
        if (routeStore.hasRoutes()) {
        // 此时代表用户的路由表已经生成好了，访问权限不够的页面也会导向404，该如何导向403？
          next();
          return;
        }
        // console.log(to.path);
        // console.log('create routes');
        try {
          routeStore.setUserRoles(userStore.userRoles);
          const filteredRoutes = routeStore.generateRoutes(dynamicRoutes);
          filteredRoutes.forEach((route) => {
            router.addRoute(route);
          });
          routeStore.setIsGetUserInfo(true);
          routeStore.setUserRoutes(filteredRoutes);
          // console.log('routes have been successfully created');
          next({ ...to, replace: true });
        } catch (error) {
          console.log('guard error: ');
          userStore.resetState();
          next(`/login?redirect=${to.path}`);
        }
      }
    } else if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  });

  router.afterEach((to, from, failure) => {
    if (isNavigationFailure(failure)) {
      console.log('failed navigation', failure);
    } else {
      window.$loadingBar.finish();
    }
  });
}
