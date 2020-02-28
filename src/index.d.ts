
// request请求中需要使用到 Message 所以需要导出
declare module 'ant-design-vue/lib/message'{
  import { Message } from 'ant-design-vue/types/message'
  const message: Message
  export default message
}

// 处理图片引入eslint报错问题

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

declare module 'dayjs' {
  const dayjs: any
  export default dayjs
}

