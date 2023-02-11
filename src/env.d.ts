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
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
//代码中获取这些以 VITE_ 为前缀的用户自定义环境变量的 TypeScript 智能提示
interface ImportMetaEnv {
  VITE_APP_TITLE: string,
  VITE_APP_BASEURL: string,
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
