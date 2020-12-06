<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">技术分享平台</div>
    </nav-bar>
    <tab-control :titles="['技术', '资源', '面试']"

                 ref="tabControl1"
                 class="tab-control" v-show="isTabFixed"/>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll"
            @pullingUp="loadMore">
      <home-swiper :banners="banners"
                   @swiperImageLoad="swiperImageLoad"/>
<!--      <recommend-view :recommends="recommends"/>-->
<!--      <feature-view/>-->
      <tab-control :titles="['技术', '资源', '面试']"
                   @tabClick="tabClick"
                   ref="tabControl2"/>
<!--      <goods-list :goods="showGoods"/>-->
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>

  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
// import RecommendView from "./childComps/RecommendView";
// import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
// import GoodsList from "../../components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "../../components/content/backTop/BackTop";

import img1 from 'assets/img/common/1.jpg';
import img2 from 'assets/img/common/2.jpg';
import img3 from 'assets/img/common/3.jpg';
import img4 from 'assets/img/common/4.jpg';
import img5 from 'assets/img/common/5.jpg';

// import {
//   getHomeMultidata,
//   getHomeGoods
// } from "network/home";
import {debounce} from "common/utils";
// import {itemListenerMixin} from "../../common/mixin"

export default {
  name: "Home",
  components: {
    HomeSwiper,
    // RecommendView,
    // FeatureView,
    NavBar,
    TabControl,
    // GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      // result: null,
      banners: [{
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
      },
      {
        "image":img5,
        "link":"#"
      }],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
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
  // computed: {
  //   showGoods() {
  //     return this.goods[this.currentType].list
  //   }
  // },
  // activated() {
  //   this.$refs.scroll.scrollTo(0, this.saveY, 0)
  //   this.$refs.scroll.refresh()
  // },
  // deactivated() {
  //   //1、保存Y值
  //   this.saveY = this.$refs.scroll.getScrollY()
  //
  //   //2、取消全局事件监听
  //   this.$bus.$off('itemImageLoad', this.itemImgListener)
  // },
  // created() {
  //   //1、请求多个数据
  //   this.getHomeMultidata()
  //
  //   //2、请求商品数据
  //   this.getHomeGoods("pop")
  //   this.getHomeGoods("new")
  //   this.getHomeGoods("sell")
  //
  // },
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
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    contentScroll(position) {
      //判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 1000;

      //决定tabControl是否吸顶（position：fixed）
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore() {
      // console.log('上拉加载');
      // this.getHomeGoods(this.currentType)

      //刷新 重新计算滚动高度
      // this.$refs.scroll.scroll.refresh()
    },
    swiperImageLoad() {
      //获取tabControl的offsetTop
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop

    },

    /*
    * 网络请求相关方法
    * */
    // getHomeMultidata() {
    //   getHomeMultidata().then(res => {
    //     // console.log(res);
    //     this.banners = res.data.data.banner.list;
    //     this.recommends = res.data.data.recommend.list;
    //   })
    // },
    // getHomeGoods(type) {
    //   const page = this.goods[type].page + 1
    //   getHomeGoods(type, page).then(res => {
    //     // console.log(res);
    //     this.goods[type].list.push(...res.data.data.list)
    //     this.goods[type].page += 1
    //
    //     //完成上拉加载更多
    //     this.$refs.scroll.finishPullUp()
    //   })
    // }

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
