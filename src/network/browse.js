import {request} from "./request";

export function addOrUpdateBrowse(/*browseTime, */id) {
  return request({
    method: 'post',
    url: '/browse',
    params: {
      // browseTime,
      id
    }
  })
}

export function getDailyBrowse(id) {
  return request({
    method: 'get',
    url: '/browse/dailyBrowse',
    params: {
      id
    }
  })
}
