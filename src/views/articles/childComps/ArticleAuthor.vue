<template>
  <div class="articles-author">
<!--    <img :src="author.avatarImgUrl">-->
    <div class="img"><img src="../../../assets/img/common/5.jpg"/></div>
    <div class="author-info">
      <span><b>作者：</b>{{author.username}}</span><br/>
      <span><b>作者简介：</b>{{author.personalbrief}}</span>
    </div>
  </div>
</template>

<script>

export default {

  name: "ArticleAuthor",
  props: {
    author: {
      type: Object,
      default() {
        return {
          avatarImgUrl: require('assets/img/common/5.jpg'),
          username: '作者',
          personalBrief: '个人简介'
        }
      }
    }
  },
}
</script>

<style scoped>
.articles-author {
  font-size: 16px;
  line-height: 30px;
  padding: 20px;
  position: relative;
  width: 90%;
  display: flex;
  /*border-bottom: #71a8ff 2px solid;*/
}

.articles-author:before {
  content: "";
  position: absolute;
  width: 95%;
  height: 3px;
  background-color: var(--color-tint);
  top: 88%;
  left: 5%;
}

.img {
  flex: 1;
}

.img img {
  width: 95%;
  border-radius: 50%;
  margin: auto;
}

.author-info {
  flex: 3;
  padding-left: 15px;
}

</style>
