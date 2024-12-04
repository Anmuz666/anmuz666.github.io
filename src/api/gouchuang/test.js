import request from '@/utils/request'

// 查询登录日志列表
export function list() {
  return request({
    url: '/api/picWareHouse',
    method: 'get',
  })
}