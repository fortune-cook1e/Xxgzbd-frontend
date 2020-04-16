import { message } from 'ant-design-vue'
import axios from 'axios'
import { getToken, setToken } from './cookie'
import router from '@/router'

const baseUrl = process.env.VUE_APP_BASE_URL

const service = axios.create({
  baseURL: baseUrl,
  timeout: 3000
})

service.interceptors.request.use(config => {
  // 登录之后会返回一个token 并且将token加在headers里面
  const token = getToken()
  if (token) {
    config.headers.authorization = 'Bearer ' + token
  }
  return config
}, (error: any) => {
  message.error(error)
  console.log(error)
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  const { data } = response
  // 200 才算请求成功 其余都通过弹框的形式报错
  if (data.code !== 200) {
    message.error(data.msg)
    // 401 代表没授权
    if (data.code === 401) {
      setToken('', {})
      router.push({
        name: 'login'
      })
    }
    return Promise.reject(new Error(data.msg || 'Error'))
  } else {
    return data
  }
}, (error: any) => {
  console.log(error)
  message.error(error)
  return Promise.reject(error)
})

export default service
