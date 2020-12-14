import {request} from "./request";

export function getArticles(id) {
  return request({
    method: 'get',
    url: '/article/' + id
  })
}

//按文章分类查找
export function getArticlesByType(category) {
  return request({
    method: 'get',
    url: '/article/categories',
    params: {
      category
    }
  })
}

//关键词查找
export function getArticlesByKey(key, category) {
  return request({
    method: 'get',
    url: '/article/key',
    params: {
      key,
      category
    }
  })
}

//查找下一篇
export function getNext(id) {
  return request({
    method: 'get',
    url: '/article/next',
    params: {
      id
    }
  })
}

//查找博客数
export function getStateCount(id) {
  return request({
    method: 'get',
    url: '/article/stateCount',
    params: {
      id
    }
  })
}


//点击文章 click+1 查看记录+1

// export function getRecommend() {
//   return request({
//     url: '/recommend'
//   })
// }

// export class Goods {
//     constructor(itemInfo, columns, services) {
//       this.title = itemInfo.title
//       this.desc = itemInfo.desc
//       this.newPrice = itemInfo.price
//       this.oldPrice = itemInfo.oldPrice
//       this.discount = itemInfo.discountDesc
//       this.columns = columns
//       this.service = services
//       this.realPrice = itemInfo.lowNowPrice
//     }
// }

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;
    this.realPrice = itemInfo.highNowPrice;
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}
