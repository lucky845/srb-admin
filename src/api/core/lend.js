import request from '@/utils/request'

export default {
  // 展示标的列表
  getList() {
    return request({
      url: `/admin/core/lend/list`,
      method: 'get'
    })
  },
  // 标的详情
  show(id) {
    return request({
      url: `/admin/core/lend/show/${id}`,
      method: 'get'
    })
  },
  // 借款放款
  makeLoan(id) {
    return request({
      url: `/admin/core/lend/makeLoan/${id}`,
      method: 'get'
    })
  }
}
