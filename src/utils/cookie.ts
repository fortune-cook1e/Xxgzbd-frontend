import Cookies from 'js-cookie'

const token = 'token-key'

// 获取token
export function getToken() {
  return Cookies.get(token)
}

// 设置token
export function setToken(key:string, tokenAttr:Object | null) {
  return Cookies.set(token, key, tokenAttr)
}

