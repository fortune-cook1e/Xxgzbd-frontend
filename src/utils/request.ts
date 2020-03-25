import { message } from 'ant-design-vue'
import axios from 'axios'
import { getToken } from './cookie'
import router from '@/router'

const baseUrl = process.env.VUE_APP_BASE_URL

const service = axios.create({
  baseURL: baseUrl,
  timeout: 3000
})

const token = getToken()

service.interceptors.request.use(config => {
  // 登录之后会返回一个token 并且将token加在headers里面
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
  if (data.code !== 200) {
    message.error(data.msg)
    if (data.code === 401) {
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
