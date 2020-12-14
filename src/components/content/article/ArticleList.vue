<template>
  <div class="articles">
    <article-list-item v-for="item in articles" :articles-item="item"/>
  </div>
</template>

<script>
import ArticleListItem from "./ArticleListItem";

export default {
  name: "ArticleList",
  components: {
    ArticleListItem
  },
  props: {
    articles: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .articles {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>
