import { defineStore } from 'pinia';
import localStorage_ from '@/utils/storage';

export const useUserStore = defineStore('user', {
  state: () => ({
    isLogin: false,
    token: '',
    userRoles: new Set<string>(),
  }),
  getters: {

  },
  actions: {
    getLoginStatus(): boolean {
      if (this.isLogin) return this.isLogin;
      const token = this.getToken();
      const userRoles = this.getUserRoles();
      if (token !== null && userRoles !== null) {
        this.isLogin = true;
        this.userRoles = userRoles;
        this.token = token;
      }
      return this.isLogin;
    },

    loginHandler(token: string, userRoles: Array<string>) {
      this.token = token;
      this.userRoles = new Set(userRoles);
      this.isLogin = true;
      localStorage_.setItem('userRoles', userRoles);
      localStorage_.setItem('token', token);
    },

    getToken(): string | null {
      if (this.token.length !== 0) return this.token;
      if (localStorage_.getItem('token') !== null) {
        this.token = localStorage_.getItem('token');
        return this.token;
      }
      return null;
    },

    getUserRoles(): Set<string> | null {
      if (this.userRoles.size !== 0) return this.userRoles;
      if (localStorage_.getItem('userRoles') !== null) {
        this.userRoles = new Set<string>(localStorage_.getItem('userRoles'));
        return this.userRoles;
      }
      return null;
    },

    resetState() {
      localStorage_.removeItem('token');
      localStorage_.removeItem('userRoles');
      this.token = '';
      this.isLogin = false;
      this.userRoles = new Set<string>();
    },

    logoutHandler() {
      this.resetState();
    },

  },
});
