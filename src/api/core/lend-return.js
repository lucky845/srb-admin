import request from '@/utils/request'

export default {
  // 获取还款计划列表
  getList(lendId) {
    return request({
      url: `/admin/core/lendReturn/list/` + lendId,
      method: 'get'
    })
  }
}
