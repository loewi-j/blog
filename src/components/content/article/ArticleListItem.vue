<template>
  <div class="articles-item" @click="itemClick">
    <div class="top">
      <div class="articles-title">{{articlesItem.articletitle}}</div>
      <div class="articles-author">作者：{{author.username}}</div>
      <article-tags class="articles-type" :tags="articlesItem.articletags"/>
<!--      <div class="articles-type"><span>{{articlesItem.articletags}}</span></div>-->
    </div>

    <div class="articles-info">
      <p>{{articlesItem.articleabstract}}</p>
    </div>
    <p class="articles-click">点击量： {{articlesItem.click}}</p>
  </div>
</template>

<script>
import {
  addOrUpdateBrowse
} from "network/browse";
import { getUserById } from "network/user";
import ArticleTags from "./ArticleTags";

export default {
  name: "ArticleListItem",
  components: {ArticleTags},
  data() {
    return {
      author: ''
    }
  },
  props: {
    articlesItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {

  },
  created() {
    this.getAuthor()
  },
  methods: {
    itemClick() {
      this.$router.push('/articles/' + this.articlesItem.id)
      addOrUpdateBrowse(this.articlesItem.id).then(res => {
        this.articlesItem.click++
      })
    },
    getAuthor() {
      getUserById(this.articlesItem.author).then(res => {
        this.author = res.data.data
      })
    }
  }
}
</script>

<style scoped>
  .articles-item {
    font-size: 17px;
    padding: 20px;
    position: relative;
    width: 95%;
  }

  .articles-item:before {
    content: "";
    width: 3px;
    height: 65%;
    background-color: var(--color-tint);
    position: absolute;
    left: 7px;
  }

  .articles-item:after {
    content: "";
    width: 100%;
    height: 88%;
    background-color: rgba(88, 99, 148 , 0.15);
    position: absolute;
    left: 0px;
    top: 6%;
    box-shadow: 0 4px 20px rgba(88, 99, 148, 0.17);
    z-index: -1;
    border-radius: 10px
  }

  .articles-item:hover {

  }

  .top {
    display: flex;
  }

  .top div {
    flex: 1;
  }

  .articles-title {
    line-height: 30px;
    font-weight: 550;
    float: left;
  }

  .articles-author {
    font-size: 13px;
    line-height: 30px;
    /*border: #71a8ff 2px solid;*/
    text-align: left;

  }

  .articles-type {
    font-size: 15px;
    line-height: 30px;
    /*border: #71a8ff 2px solid;*/
    text-align: right;
  }

  .articles-info {
    font-size: 15px;
    line-height: 20px;
  }

  .articles-click {
    font-size: 15px;
    float: right;
  }

</style>
