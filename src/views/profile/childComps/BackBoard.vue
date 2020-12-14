<template>
  <div class="back-board">
    <div class="back-content">
      <span>{{name}}，欢迎您！</span>
    </div>
  </div>

</template>

<script>

// import {logout} from "../../../network/user";
// import {mapMutations} from "vuex";

export default {
  name: "BackBoard",
  props: {
    name: {
      type: String,
      default() {
        return '用户名'
      }
    }
  },
  methods: {
    // ...mapMutations(['remove']),

    loginOut(){
      console.log("loginOut")
      // this.remove();
      // logout();
      alert('退出成功');
      this.$router.push('/home');
    },

    test() {
      alert('退出成功');

    }
  }
}
</script>

<style scoped>
.back-board{
  /*background: url(../../assets/img/common/dash-bg.jpg) no-repeat center center;*/
  color: #b2d5ff;
  background: linear-gradient(to bottom, var(--color-tint) 0%, #e4eefc 100%) no-repeat center center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  padding: 10px 20px 90px;
}

.back-board:after {
  content: '';
  position: absolute;
  width: 103%;
  height: 100%;
  left: -3px;
  right: 0px;
  bottom: -1px;
  background: url(~assets/img/common/curve.svg) no-repeat bottom;
  z-index: 0;
}
.back-content span{
  display: inline-block;
  color: white;
  font-weight: 400;
  font-size: 25px;
  margin-left: 30px;
}
.notification i{
  font-size: 18px;
  color: #fff
}

.back-content div {
  float: right;
  margin-right: 10px;
}
</style>
