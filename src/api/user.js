import request from '@/utils/request'

// 原来的baseURL地址(非修改后的nginx访问地址): http://localhost:9528/dev-api
const baseURL = '/dev-api'

export function login(data) {
  return request({
    baseURL,
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    baseURL,
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    baseURL,
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
