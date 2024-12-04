import request from '@/utils/request'

//picWarehouse图片列表
export function getPicWareHouseList() {
  return request({
    url: '/api/picWareHouse/geturl',
    method: 'get',
  })
}