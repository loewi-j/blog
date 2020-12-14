import {request} from "./request";

export function getArticlesByType(category) {
  return request({
    method: 'get',
    url: '/article/categories',
    params: {
      category
    }
  })
}

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
