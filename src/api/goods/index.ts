import request from '@/utils/request'

interface AddGoodsData {
  name: string;
  foodType: Array<number>;
  foodInfo: string;
  time: number;
  phone: string;
  area: string;
}

interface GoodsListParams {
  current: number;
  pageSize: number;
}

/**
 * @description 添加物资
 */
export function addGoods(data: AddGoodsData) {
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
