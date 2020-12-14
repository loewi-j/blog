<template>
  <div id="login">
      <div class="container">
        <h1>技术分享平台</h1>
        <div class="form">
          <input type="text" v-model="loginForm.username" placeholder="用户名"/>
          <input type="text" v-model="loginForm.password" placeholder="密码"/>
          <div class="btn">
            <button @click="login">登录</button>
            <button @click="register">注册</button>
          </div>
        </div>
      </div>
    <div class="wrapper">
    </div>
  </div>
</template>

<script>
import {
  login,
  register
} from '../../network/user'
import {mapMutations} from 'vuex'

export default {
  name: "Login",
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      userToken:'',
      userId: '',
      hidden: false
    };
  },
  computed: {
    getHidden() {
      return this.hidden? 'hidden': ''
    }
  },
  methods: {
    ...mapMutations(['changeLogin']),
    login () {
      let _this = this;
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        alert('账号或密码不能为空');
      } else {
        login(this.loginForm).then(res => {
          console.log(res.data);
          if (res.data.status == 200) {
            _this.userToken = 'Token ' + res.data.user.username;
            _this.userId = res.data.user.id;
            // 将用户token保存到vuex中
            _this.changeLogin({ /*Authorization: _this.userToken , */userId: _this.userId});
            _this.$router.push('/home');
            alert('登陆成功');
          } else {
            alert('账号或密码错误');
          }
        }).catch(error => {
          alert('验证失败');
          console.log(error);
        });
      }
    },
    register() {
      let _this = this;
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        alert('账号或密码不能为空');
      } else {
        register(this.loginForm).then(res => {
          console.log(res.data);
          if (res.data.status == 200) {
            _this.userToken = 'Token ' + res.data.user.username;
            _this.userId = res.data.user.id;
            // 将用户token保存到vuex中
            _this.changeLogin({ /*Authorization: _this.userToken ,*/ userId: _this.userId});
            _this.$router.push('/home');
            alert('注册成功');
          } else {
            alert('注册失败');
          }
        }).catch(error => {
          alert('验证失败');
          console.log(error);
        });
      }
    }
  }
}
</script>

<style scoped>
#login {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.wrapper {
  background: linear-gradient(to bottom right, var(--color-high-text) 0%, #93bdff 100%);
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 70px 0;
  height: 400px;
  text-align: center;
}
.container h1 {
  margin-top: 40px;
  font-size: 35px;
  font-weight: 400;
  color: #2f4a5e;
}
.form {
  padding: 55px 0;
  position: relative;
  z-index: 2;
}
.form input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.2);
  width: 75%;
  border-radius: 10px;
  padding: 10px 15px;
  margin: 0 auto 20px auto;
  display: block;
  text-align: center;
  font-size: 18px;
  color: white;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  font-weight: 300;
}

.form input:focus {
  background-color: white;
  width: 80%;
  color: var(--color-high-text);
}

.btn {
  margin-top: 60px;
}

.form button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  background-color: white;
  border: 0;
  padding: 10px 10px;
  margin: 0 auto 20px auto;
  color: var(--color-tint);
  border-radius: 20px;
  width: 51%;
  cursor: pointer;
  font-size: 18px;
  -webkit-transition-duration: 0.25s;
  transition-duration: 0.25s;
}

.hidden {
  display: none;
}

</style>
