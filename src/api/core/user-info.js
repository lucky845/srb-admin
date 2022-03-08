import request from '@/utils/request'

export default {
  // 获取会员列表
  getPageList(page, limit, searchObj) {
    return request({
      url: `/admin/core/userInfo/list/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  // 用户锁定状态解锁与锁定
  lock(id, status) {
    return request({
      url: `/admin/core/userInfo/lock/${id}/${status}`,
      method: 'put'
    })
  },
  // 显示登陆日志
  getUserLoginRecordTop50(userId) {
    return request({
      url: `/admin/core/userLoginRecord/listTop50/${userId}`,
      method: 'get'
    })
  }
}
