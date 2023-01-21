import { useRouteStore } from '@/store/route/permission';
import { Router, isNavigationFailure } from 'vue-router';
import { useUserStore } from '@/store/auth/user';
import { dynamicRoutes } from './dynamic';

export function setBeforeEach(router: Router): any {
  router.beforeEach((to, from, next) => {
    window.$loadingBar.start();
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
        filteredRoutes.forEach((route) => {
          router.addRoute(route);
        });
        routeStore.setIsGetUserInfo(true);
        routeStore.setUserRoutes(filteredRoutes);
        next({ ...to, replace: true });
      } catch (error) {
        console.log('error: ', error);
        userStore.resetState();
        next(`/login?redirect=${to.path}`);
      }
    } else if (to.path === '/login') {
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
