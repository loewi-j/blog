<template>
  <div v-if="Object.keys(article).length !== 0" class="article-info">
    <div class="info-title">{{article.articletags}}</div>
    <div class="info-price">
<!--      <span class="n-price">{{article.publishdate}}</span>-->
<!--      <span class="o-price">{{article.updatedate}}</span>-->
<!--      <span class="discount">{{article.discount}}</span>-->
    </div>
    <div class="content">
      <p>{{article.articlecontent}}</p>
    </div>
    <div class="time">
      最后更新时间：<span>{{article.updatedate}}</span>
    </div>
<!--    <div class="info-other">-->
<!--      <span>{{article.columns[0]}}</span>-->
<!--      <span>{{article.columns[1]}}</span>-->
<!--      <span>{{article.services[goods.services.length-1].name}}</span>-->
<!--    </div>-->
<!--    <div class="info-service">-->
<!--      <span class="info-service-item" v-for="index in article.services.length-1" :key="index">-->
<!--        <img :src="article.services[index-1].icon">-->
<!--        <span>{{article.services[index-1].name}}</span>-->
<!--      </span>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "ArticlesInfo",
  props: {
    article: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
p{
  text-align:left;
  text-indent:2em;
  padding-bottom:10px;
}

.content {
  line-height: 27px;
}

.article-info {
  font-size: 16px;
  /*margin-top: 15px;*/
  padding: 0 20px 10px 20px;
  color: #999;
  /*border-bottom: 5px solid #f2f5f8;*/
}

.time {
  padding-top: 10px;
  float: right;
  font-size: 12px;

}

.time span {
  color: var(--color-tint);

}

.info-title {
  color: #222
}

.info-price {
  margin-top: 10px;
}

.info-price .n-price {
  font-size: 24px;
  color: var(--color-high-text);
}

.info-price .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}

.info-price .discount {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;

  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -8px;
}

.info-other {
  margin-top: 15px;
  line-height: 30px;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100,100,100,.1);
  justify-content: space-between;
}

.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}

.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}

.info-service-item span {
  font-size: 13px;
  color: #333;
}
</style>
