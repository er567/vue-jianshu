<template>
    <div class="sign">
        <div class="logo">
            <img src="./../../../assets/images/logo.png" alt="">
        </div>
        <div class="main">
            <h3 class="title">
                <span :class="{active:isActive}" @click="changeLogin()">登录</span>
                <b>·</b>
                <span :class="{active:!isActive}" @click="changeLogin()">注册</span>                
            </h3>
            <el-form :inline="true" class="mod-form-inline">
                <el-input class="ui-input" placeholder="手机号或邮箱" v-model="accounts" clearable></el-input>
                <el-input class="ui-input" placeholder="密码" v-model="password" type="password" clearable></el-input>
                <div class="clearfix">
                    <div class="remember-btn">
                    <input type="checkbox" value="true" checked="checked" name="session[remember_me]" id="session_remember_me"><span>记住我</span>
                    </div>
                    <div class="forget-btn">
                        <a class="" data-toggle="dropdown" href="">{{isActive?'登录':'注册'}}遇到问题?</a>
                        <ul class="dropdown-menu" style="display:none;">
                            <li><a href="/users/password/mobile_reset">用手机号重置密码</a></li>
                            <li><a href="/users/password/email_reset">用邮箱重置密码</a></li>
                            <li><a target="_blank" href="/p/9058d0b8711d">无法用海外手机号登录</a></li>
                            <li><a target="_blank" href="/p/498a9fa7da08">无法用 Google 帐号登录</a></li>
                        </ul>
                    </div>
                </div>
                <div>
              </div>
            </el-form>
            <button v-show="isActive" class="login-btn" @click="login">登录</button>
            <button v-show="!isActive" class="login-btn" @click="register">注册</button>
            <div class="more-sign">
                <h6>社交帐号登录</h6>  
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
let Base64 = require('js-base64').Base64;
export default {
  data() {
    return {
      accounts: "",
      password: "",
      token: "",
      isActive: true
    };
  },
  methods:{
      changeLogin(){
      this.isActive = !this.isActive;
    },
    register() {
      this.$ajax.post('http://192.168.2.166:8000/api/v1/user/register/',{
        username: this.accounts,
        password: this.password
      }).then((res)=>{
        console.log(res)
      })
    },
    login() {
      let password = `${this.accounts}:${this.password}`
      this.$ajax.post('http://192.168.2.166:8000/api/v1/user/login/',{
        
      },{
        authorization: `Basic ${Base64.encode(password)}`
      }).then((res)=>{
        console.log(res)
        this.token = res.token
        this.$router.push({
          path: '/'
        })
      })
    }
  }
};
</script>
<style scoped lang="scss">
.sign {
  height: 100%;
  min-height: 750px;
  text-align: center;
  font-size: 14px;
  background-color: #f1f1f1;
  &::before {
    content: "";
    display: inline-block;
    height: 85%;
    vertical-align: middle;
  }
  .logo {
    position: absolute;
    top: 56px;
    margin-left: 50px;
  }
  .main {
    width: 400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    vertical-align: middle;
    display: inline-block;
    box-sizing: border-box;
    .title {
      margin: 0 auto 20px;
      padding: 10px;
      font-weight: 400;
      color: #969696;
      .active {
        font-weight: 700;
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
      }
      span {
        padding: 10px;
        color: #969696;
      }
    }
  }
  .remember-btn {
    float: left;
    margin: 15px 0;
  }
  .forget-btn {
    float: right;
    position: relative;
    margin: 15px 0;
    font-size: 14px;
  }
  .login-btn {
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #42c02e;
    background: #3194d0;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
  }
  .more-sign {
    margin-top: 50px;
    h6 {
      position: relative;
      margin: 0 0 10px;
      font-size: 12px;
      color: #b5b5b5;
      &::before,
      &::after {
        content: "";
        border-top: 1px solid #b5b5b5;
        display: block;
        position: absolute;
        width: 60px;
        top: 5px;
      }
      &::before {
        left: 30px;
      }
      &::after {
        right: 30px;
      }
    }
  }
}
</style>

