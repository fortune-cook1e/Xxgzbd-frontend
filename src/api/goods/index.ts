import request from '@/utils/request'
import { AddGoodsModel } from '@/models/paramsModels'

interface GoodsListParams {
  current: number;
  pageSize: number;
}

/**
 * @description 添加物资
 */
export function addGoods(data:AddGoodsModel) {
  return request({
    url: '/goods/add',
    method: 'post',
    data
  })
}

/**
 * @description 获取物品列表
 */
export function goodsList(params: GoodsListParams) {
  return request({
    url: '/goods/list',
    method: 'get',
    params
  })
}
