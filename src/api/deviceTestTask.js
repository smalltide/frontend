import request from '@/utils/request'

export function getDeviceTestTaskList(params) {
  return request({
    method: 'post',
    url: '/deviceTestTask/list',
    params
  })
}
