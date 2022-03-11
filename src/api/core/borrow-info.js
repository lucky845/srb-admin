import request from '@/utils/request'

export default {
  // 获取借款人列表
  getList() {
    return request({
      url: `/admin/core/borrowInfo/list`,
      method: 'get'
    })
  },
  // 借款信息与借款人信息
  show(id) {
    return request({
      url: `/admin/core/borrowInfo/show/${id}`,
      method: 'get'
    })
  },
  // 修改订单信息状态
  approval(borrowInfoApproval) {
    return request({
      url: `/admin/core/borrowInfo/approval`,
      method: 'post',
      data: borrowInfoApproval
    })
  }
}
