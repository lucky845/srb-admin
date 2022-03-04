// @ 符号在vue.config.js 中配置， 表示 'src' 路径的别名
import request from '@/utils/request'

// 路径前缀
const API = '/admin/core/integralGrade'

export default {
  // 查询积分等级列表
  list() {
    return request({
      url: `${API}/list`,
      method: 'get'
    })
  },
  // 根据id删除积分等级数据
  removeById(id) {
    return request({
      url: `${API}/remove/${id}`,
      method: 'delete'
    })
  },
  // 新增数据
  save(integralGrade) {
    return request({
      url: `${API}/save`,
      method: 'post',
      data: integralGrade
    })
  },
  // 根据id获取数据,用于修改界面数据回显
  getById(id) {
    return request({
      url: `${API}/get/${id}`,
      method: 'get'
    })
  },
  // 根据id修改对应的积分等级数据
  updateById(integralGrade) {
    return request({
      url: `${API}/update`,
      method: 'put',
      data: integralGrade
    })
  }
}
