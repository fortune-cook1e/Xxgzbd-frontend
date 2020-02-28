import { message } from 'ant-design-vue'
import axios from 'axios'

const baseUrl = process.env.VUE_APP_BASE_URL

const service = axios.create({
  baseURL: baseUrl,
  timeout: 3000
})

service.interceptors.request.use(config => {
  return config
}, (error: any) => {
  message.error(error)
  console.log(error)
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  const { data } = response
  if (data.status !== 1) {
    message.error(data.msg)
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

