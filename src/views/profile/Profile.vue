<!--个人界面-->
<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">个人中心</div>
      <img slot="right" @click="loginOut" src="~assets/img/profile/loginOut.svg">
    </nav-bar>
    <back-board :name="user.username"/>
    <info-card :infos="infos"/>

    <div class="four-text">
      <ul class="four-ul">
        <li style="background: linear-gradient(to left bottom, rgba(82, 86, 255, 0.5), rgba(82, 86, 255, 0.9));margin-right: 0.35rem;">
          <div class="back-text">
            <div class="box-text">
              <i class="iconfont zise icon-4"></i>
              <p>博客管理</p>
            </div>
            <div class="box-text_2">
              <p>已有博客</p>
              <p>10</p>
            </div>
          </div>
        </li>
        <li style="background: linear-gradient(to left bottom, rgba(254, 81, 150, 0.5), rgba(254, 81, 150, 0.9));">
          <div class="back-text">
            <div class="box-text">
              <i class="iconfont hongse icon-08_zizhanghaoguanli"></i>
              <p>个人信息修改</p>
            </div>
            <div class="box-text_2">
              <p>个人简介</p>
              <p>10</p>
            </div>
          </div>
        </li>

      </ul>
      <ul>
        <li style="background: linear-gradient(to left bottom, rgba(255, 177, 153, 0.5), rgba(255, 177, 153, 0.9)); margin-right: 0.35rem;">
          <div class="back-text">
            <div class="box-text">
              <i class="iconfont fense icon-zhanghuguanli"></i>
              <p>历史登录</p>
            </div>
            <div class="box-text_2">
              <p>登录次数</p>
              <p>10</p>
            </div>
          </div>
        </li>
        <li style="background: linear-gradient(to left bottom, rgba(0, 114, 255, 0.5), rgba(0, 114, 255, 0.9));">
          <div class="back-text">
            <div class="box-text">
              <i class="iconfont lanse icon-youhuiquan"></i>
              <p>收藏</p>
            </div>
              <div class="box-text_2">
                <p>我的收藏</p>
                <p>10</p>
              </div>

          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import img from "../../assets/img/common/curve.svg"

import {mapMutations, mapState} from "vuex";
import {
  getUserById,
  logout
} from '../../network/user'
import {
  getStateCount,
} from '../../network/articles'
import {
  getDailyBrowse,
} from '../../network/browse'
import NavBar from "../../components/common/navbar/NavBar";
import BackBoard from "./childComps/BackBoard";
import InfoCard from "./childComps/InfoCard";

export default {
  name: "Profile",
  data() {
    return {
      user: {},
      infos:{
        "博客数": 0,
        "今日浏览量": 0,
        "垃圾数": 0
      }
    }
  },
  components: {
    InfoCard,
    BackBoard,
    NavBar
  },
  computed:mapState(['userId']),
  created() {
    getUserById(this.userId).then(res => {
      this.user = res.data.data

      //获得博客数，浏览量，垃圾数
      this.getStateCount(this.userId)
      this.getDailyBrowse(this.userId)
    })


  },
  methods: {
    ...mapMutations(['remove']),

    loginOut(){
      this.remove();
      logout();
      alert('退出成功');
      this.$router.push('/home');
    },

    /*网络请求相关*/
    getStateCount(id) {
      getStateCount(id).then(res => {
        console.log(res)
        if (res.data.list.length > 1) {
          this.infos["垃圾数"] = res.data.list[0].count
          this.infos["博客数"] = res.data.list[1].count
        } else {
          this.infos["博客数"] = res.data.list[0].count
        }

      })
    },

    getDailyBrowse(id) {
      getDailyBrowse(id).then(res => {
        console.log(res)
        this.infos["今日浏览量"] = res.data.count

      })
    }
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
}

*, ::after, ::before {
  box-sizing: border-box;
}

ul{
  list-style:none;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: center;
}

.four-text{
  background: #fff;
  padding: 0.5rem 0.4rem;
  margin-bottom: 4%;
  font-size: 16px;
  /*line-height: 24px;*/

}
.four-text ul{
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: center;
}
.four-text ul li{
  width: 48%;
  border-radius: 8px;
  padding: 20px 12px;
}
.four-ul{
  margin-bottom: 8px;
}

.four-text ul li .box-text p{
  display: inline-block;
  color: #fff;
  margin-left: 12px;
  line-height: 30px;
}
.four-text ul li .box-text_2{
  padding-left: 0.4rem;
  margin-top: 0.3rem;
}
.four-text ul li .box-text_2 p{
  color: #fff;
}
.four-text ul li i{
  display: inline-block;
  width: 34px;
  height: 34px;
  margin: 0 auto;
  background: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 34px;
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
