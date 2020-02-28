import request from '@/utils/request'

/**
 * @description 获取城市所有地区全部数据
 */
export function getCityTotalData() {
  return request({
    url: '/city/total',
    method: 'get'
  })
}
