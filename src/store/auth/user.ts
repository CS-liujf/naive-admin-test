import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isLogin: false,
    token: '',
    userRoles: {} as Set<string>,
  }),
  getters: {

  },
  actions: {
    getIsLogin(): boolean {
      // 还没写自动登录功能
      return this.isLogin;
    },

    loginHandler(token: string, userRoles: Array<string>) {
      this.token = token;
      localStorage.setItem('token', token);
      this.userRoles = new Set(userRoles);
      this.isLogin = true;
      localStorage.setItem('userRoles', JSON.stringify(this.userRoles));
    },

    getToken(): string | null {
      return this.token != null ? this.token : localStorage.getItem('token');
    },

    getUserRoles(): Set<string> | null {
      return this.userRoles.size !== 0 ? this.userRoles : JSON.parse(localStorage.getItem('userRoles') as string);
    },

    resetState() {
      localStorage.removeItem('token');
      localStorage.removeItem('userRoles');
      this.token = '';
      this.userRoles = {} as Set<string>;
    },

    loginoutHandler() {
      this.resetState();
      this.isLogin = false;
    },

  },
});
