<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">技术分享平台</div>
    </nav-bar>
    <tab-control :titles="['技术', '资源', '面试']" ref="tabControl1" @tabClick="tabClick"
                 class="tab-control" v-show="isTabFixed"/>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true"
            @scroll="contentScroll" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <home-search @searchClick="searchClick"/>
      <tab-control :titles="['技术', '资源', '面试']" @tabClick="tabClick" ref="tabControl2"/>
      <article-list :articles="getArticles"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>

  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeSearch from "./childComps/HomeSearch";
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import ArticleList from "components/content/article/ArticleList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "../../components/content/backTop/BackTop";

import img1 from 'assets/img/common/1.jpg';
import img2 from 'assets/img/common/2.jpg';
import img3 from 'assets/img/common/3.jpg';
import img4 from 'assets/img/common/4.jpg';
import img5 from 'assets/img/common/5.jpg';

import {
  getArticlesByType,
  getArticlesByKey
} from "network/articles";

import {debounce} from "common/utils";
// import {itemListenerMixin} from "../../common/mixin"

export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeSearch,
    NavBar,
    TabControl,
    ArticleList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [
        {
        "image":img1,
        "link":"#"
      },
      {
        "image":img2,
        "link":"#"
      },
      {
        "image":img3,
        "link":"#"
      },
      {
        "image":img4,
        "link":"#"
      }
      ],
      recommends: [],
      articles: {
        '博客': {page: 0, list: []},
        '分享': {page: 0, list: []},
        '面试': {page: 0, list: []}
      },
      currentType: '博客',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      // itemImgListener: null
    }
  },
  // mixins: [
  //   itemListenerMixin
  // ],
  computed: {
    getArticles() {
      return this.articles[this.currentType].list
    }
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    //1、保存Y值
    this.saveY = this.$refs.scroll.getScrollY()

    //2、取消全局事件监听
    // this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  created() {
    //1、请求多个数据
    // this.getHomeMultidata()

    //2、请求商品数据
    this.getArticlesByType("博客")
    this.getArticlesByType("分享")
    this.getArticlesByType("面试")

  },
  // mounted() {
  //
  // },
  methods: {
    /*
    * 事件监听相关方法
    * */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = '博客';
          break;
        case 1:
          this.currentType = '分享';
          break;
        case 2:
          this.currentType = '面试';
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index

      //完成上拉加载更多
      this.$refs.scroll.finishPullUp()
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    searchClick(key) {
      //查询
      this.getArticlesByKey(key, "博客")
      this.getArticlesByKey(key, "分享")
      this.getArticlesByKey(key, "面试")
    },
    contentScroll(position) {
      //判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 1000;

      //决定tabControl是否吸顶（position：fixed）
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore() {
      // this.getHomeGoods(this.currentType)

      // 刷新 重新计算滚动高度
      this.$refs.scroll.scroll.refresh()
    },
    swiperImageLoad() {
      //获取tabControl的offsetTop(元素到offsetParent顶部的距离)
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop

    },

    /*
    * 网络请求相关方法
    * */
    getArticlesByType(categories) {
      getArticlesByType(categories).then(res => {
        this.articles[categories].list.push(...res.data.list.list)
        this.articles[categories].list.reverse()
      })

    },
    getArticlesByKey(key, categories) {
      getArticlesByKey(key, categories).then(res => {
        this.articles[categories].list.splice(0, this.articles[categories].list.length, ...res.data.list.list)
      })
    }

  }
}
</script>

<style scoped>
  #home {
    height: 100vh;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
