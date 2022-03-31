/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  import type { MessageProviderInst, DialogProviderInst, NotificationProviderInst, LoadingBarProviderInst } from 'naive-ui'
  // 增加全局类型
  global {
    interface Window {
      $message: MessageProviderInst,
      $dialog: DialogProviderInst,
      $notification: NotificationProviderInst,
      $loadingBar: LoadingBarProviderInst
    }
    //这里必须增加该接口，否则编译器认为环境变量不存在于ImportMeta类型中
    interface ImportMetaEnv {
      VITE_APP_TITLE: string,
      VITE_APP_BASEURL: string,
      [propName: string]: number | string | boolean | Array<string>
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
