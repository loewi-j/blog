<!--博客细节-->
<template>
  <div id="articles">
    <articles-nav-bar class="articles-nav" :title="articles.articletitle"
                      @titleClick="titleClick"
                      ref="nav"/>

    <scroll class="articles-content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll">
      <article-author :author="author"/>
      <articles-info :article="articles"/>
    </scroll>

    <next @click.native="nextClick"/>
  </div>
</template>

<script>
import ArticlesNavBar from "./childComps/ArticlesNavBar";
import ArticleAuthor from "./childComps/ArticleAuthor";
import ArticlesInfo from "./childComps/ArticlesInfo";
import Scroll from "../../components/common/scroll/Scroll";
import Next from "../../components/content/next/Next";
import {
  getUserById
} from "network/user";
import {
  getArticles,
  getNext
} from "network/articles";
import {
  addOrUpdateBrowse
} from "network/browse";

// import {getDetail, getRecommend, Goods, GoodsParam, Shop} from "../../../../testmall/src/network/detail";
// import {debounce} from "../../../../testmall/src/common/utils";

export default {
  name: "Articles",
  components: {
    ArticlesNavBar,
    ArticleAuthor,
    ArticlesInfo,
    Scroll,
    Next
  },
  data() {
    return {
      id: null,
      articles: {},
      author: {}
    }
  },
  created() {
    //1、保存传入的id
    this.id = this.$route.params.id

    //2、根据id请求详情数据
    this.getArticles(this.id);
  },
  methods: {
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
    },
    contentScroll(position) {
      //1、获取y值
      const positionY = -position.y

      //2、positionY和主题中值进行对比
      // let length = this.themeTopYs.length
      // // for(let i in this.themeTopYs) {
      // for (let i = 0; i < length; i++) {
      // if (positionY > this.themeTopYs[parseInt(i)] && positionY < this.themeTopYs[parseInt(i)+1]) {
      //   console.log(i);
      // }
      // if (this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[parseInt(i)] && positionY < this.themeTopYs[parseInt(i)+1])
      //   || (i === length -1 && positionY >= this.themeTopYs[parseInt(i)]))) {
      //   this.currentIndex = i
      //   this.$refs.nav.currentIndex = this.currentIndex
      // }
      // if (this.currentIndex !== i && (positionY >= this.themeTopYs[i]
      //   && positionY < this.themeTopYs[i+1])) {
      //   this.currentIndex = i
      //   this.$refs.nav.currentIndex = this.currentIndex
      //   console.log(i);
      //
      // }
      // }

      //是否显示回到顶部
      //判断BackTop是否显示
      // this.isShowBackTop = (-position.y) > 1000;
      //决定tabControl是否吸顶（position：fixed）
      // this.isTabFixed = (-position.y) > this.tabOffsetTop

    },

    getArticles(id) {
      getArticles(id).then(res => {
        this.articles = res.data.data
        getUserById(this.articles.author).then(res => {
          this.author = res.data.data
        })
      })
    },

    nextClick() {
      getArticles(this.articles.nextarticleid).then(res => {
        console.log(res)
        this.$router.replace('/articles/' + res.data.data.id)
        this.id = this.$route.params.id
        this.getArticles(this.id)
        addOrUpdateBrowse(this.id).then(res => {
          this.click++
        })
      })
    }

  },

}
</script>

<style scoped>
#articles {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.articles-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.articles-content {
  height: calc(100% - 44px - 49px);
}
</style>
