import request from '@/utils/request'

// 通用前缀
const API = '/admin/core/dict'

export default {
  // 根据父节点id获取数据字典列表
  listByParentId(parentId) {
    return request({
      url: `${API}/listByParentId/${parentId}`,
      method: 'get'
    })
  }
}
