import request from '@/utils/request'
import { LoginModel, RegisterModel } from '@/models/paramsModels'
/**
 * @description 登录
 */
export function userLogin(data:LoginModel) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

/**
 * @description 注册
 */
export function userRegister(data:RegisterModel) {
  return request({
    url: '/user/register',
    method: 'post',
    data
  })
}
