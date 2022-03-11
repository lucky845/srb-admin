import request from '@/utils/request'

export default {
  // 获取借款人展示分页列表
  getPageList(page, limit, keyword) {
    return request({
      url: `/admin/core/borrower/list/${page}/${limit}`,
      method: 'get',
      params: { keyword }
    })
  },
  // 根据id获取借款人信息
  show(id) {
    return request({
      url: `/admin/core/borrower/show/${id}`,
      method: 'get'
    })
  },
  // 修改审批状态
  approval(borrowerApproval) {
    return request({
      url: `/admin/core/borrower/approval`,
      method: 'post',
      data: borrowerApproval
    })
  }
}
