import {request} from "./request";

export function getUserById(id) {
  return request({
    method: 'get',
    url: '/users/'+id
  })
}

export function login(user) {
  return request({
    method: 'get',
    url: '/users/checkLogin',
    params: {
      username: user.username,
      password: user.password
    }
  })
}

export function logout() {
  return request({
    method: 'get',
    url: '/users/logout',
  })
}

export function register(user) {
  return request({
    method: 'post',
    url: '/users/register',
    params: {
      username: user.username,
      password: user.password
    }
  })
}
