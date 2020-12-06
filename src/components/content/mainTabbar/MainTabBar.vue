<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="../../../assets/img/tabbar/home.svg" alt="图片">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="图片">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/chart">
      <img slot="item-icon" src="~assets/img/tabbar/chart.svg" alt="图片">
      <img slot="item-icon-active" src="~assets/img/tabbar/chart_active.svg" alt="图片">
      <div slot="item-text">图表</div>
    </tab-bar-item>

    <tab-bar-item path="/profile" activeColor="#287cff">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="图片">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="图片">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
