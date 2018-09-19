<template>
	<div class="login">
    <el-header class="login-header">
      <div class="login_logo">
        <!-- <img src="" alt="" /> -->
        <!-- <i class="el-icon-upload logo"></i> -->
        <span class="logo-title">后台管理系统</span>
      </div>
    </el-header>
    <el-main class="login-main">
      <div class="login-main-left">
        <div class="login-border-top"></div>
        <div class="login_progress">
          <span>40%</span>
        </div>
        <div class="squareBig-container">
          <img class="squareBig" src="static/img/squareBig.png"/>
        </div>
        <div class="login_crul_container">
          <div class="login_crul"></div>
        </div>
        <img class="green" src="static/img/green.png"/>
        <img class="green-logo" src="static/img/green-logo.png"/>
        <img class="blue" src="static/img/blue.png"/>
        <img class="blue-logo" src="static/img/blue-logo.png"/>
        <div class="login-border-bottom"></div>
        <!-- <div class="login-sys-title">
          <h5>模板项目</h5>
          <h4>后台管理系统</h4>
        </div> -->
      </div>
      <div class="login-main-right">
        <h2 class="title">系统登录</h2>
        <el-form 
          class="login-form"
          ref="loginForm" 
          :model="reqData" 
          size="medium">
            <el-form-item>
              <el-input v-model="reqData.account">
                <i
                  class="el-icon-account"
                  slot="suffix"
                  style="margin-right: 10px">
                  <img src="static/img/hui-ren1.png" alt="">
                </i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="password" v-model="reqData.password">
                <i
                  class="el-icon-password"
                  slot="suffix"
                  style="margin-right: 10px">
                  <img src="static/img/iconfont-mimahong1.png" alt="">
                </i>
              </el-input>
            </el-form-item>
            <el-form-item class="login-btn">
              <el-button @click="handleLogin">登录</el-button>
            </el-form-item>
        </el-form>
      </div>
    </el-main>
  </div>
</template>

<script>
export default {
  name: 'login',

  data() {
    return {
      reqData: {
        account: 'admin',
        password: 'admin'
      }
    }
  },
  
  methods: {
    handleLogin() {
      this.$router.push({ name: 'index' });
    }
  }
}
</script>

<style scoped lang="scss">
  .login {
    background-color: #fff;
    width: 100%;
    height: 100%;
    min-width: 1360px;
    .login-header{
      width: 100%;
      height: 60px;
      padding: 0 100px;
      position: relative;
      box-shadow: 0px 0px 12px #ddd;
      background: #fff;
    }
    .login_logo {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      margin: auto;
      .logo {
        display: inline-block;
        font-size: 40px;
      }
      .logo-title {
        font-size: 16px;
        margin-left: 10px;
      }
    }

    /* 主体部分  main */
    .login-main{
      width:83.333%;
      height: calc(100% - 60px);
      margin:0 auto;
      position:relative;
      display:flex;
      flex-wrap:nowrap;
      padding: 0;
    }
    .login-main-left{
      width:61%;
      flex:none;
      height:100%;
      position:relative;
      overflow:hidden;
      .login-border-top{
        position: absolute;
        left: 0;
        top: 86px;
        width: 92px;
        height: 190px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        &:after {
          content: "";
          display: block;
          height: 190px;
          background:url("~static/img/login-border-top.png") no-repeat left top;
          animation:border-top-enlarge .5s linear forwards; 
        }
      }
      .login_progress{
        position: absolute;
        width: 228px;
        height: 8px;
        background: #edf7f2;
        top: 135px;
        left: 70px;
        transform: rotate(-30deg);
        &:after{
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 41%;
          height: 9px;
          background: #179957;
        }
        span{
          position: absolute;
          top: -23px;
          color: #179957;
        }
      }
      .squareBig-container {
        position: absolute;
        left: 100px;
        top: 150px;
        .squareBig{
          animation: loginFloat 3s infinite 1s;
        }
      }
      .login_crul_container{
        position: absolute;
        width: 122px;
        height: 67px;
        top: 230px;
        left: 250px;
        animation: loginFloat 3s infinite 1s;
        .login_crul{
          width: 122px;
          height: 67px;
          position: absolute;
          left:0;
          bottom:0;
          transform: rotate(-31deg);
          &:after {
            content: "";
            display: block;
            height: 67px;
            background: url("~static/img/crul.png")no-repeat 0 0;
            animation:crul-enlarge .5s linear forwards; 
          }
        }
      }
      .blue{
        position: absolute;
        top: 268px;
        left: 430px;
        animation: loginFloat 3s infinite 0.8s;
      }
      .blue-logo{
        position: absolute;
        top: 310px;
        left: 503px;
        animation: loginFloat 3s infinite 0.8s;
      }
      .green{
        position: absolute;
        top: 340px;
        left: 40px;
        animation: loginFloat 3s infinite;
      }
      .green-logo{
        position: absolute;
        top: 388px;
        left: 137px;
        animation: loginFloat 3s infinite;
      }
      .login-border-bottom{
        position: absolute;
        left: 500px;
        top: 165px;
        width: 162px;
        height: 271px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        &:after {
          content: "";
          display: block;
          height: 272px;
          background:url("~static/img/login-border-bottom.png") no-repeat right bottom;
          animation:border-bottom-enlarge .5s linear forwards; 
        }
      }
      .login-sys-title {
        position: absolute;
        left: 400px;
        top: 130px;
        h5 {
          font-size: 14px;
          font-weight: normal;
        }
        h4 {
          font-size: 16px;
          font-weight: normal;
          margin-top: 5px;
        }
      }
    }
    .login-main-right{
      width: 300px;
      padding: 50px 30px;
      position: absolute;
      top: 100px;
      right: 20px;
      background: #fff;
      box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.15);
      .title {
        text-align: center;
        font-size: 18px;
        margin-bottom: 20px;
      }
      .login-btn {
        width: 100%;
        button {
          width: 100%;
        }
      }
    }
    
    @keyframes enlarge{
      from{
        width:70px;
        height:70px;
      }to{
        width:300px;
        height:300px;
      }
    }
    
    @keyframes crul-enlarge{
      from{
        width:0px;
      }to{
        width:122px;
      }
    }
    @keyframes loginFloat{
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0px);
      }
    }
    
    @keyframes border-bottom-enlarge{
      from{
        width:0px;
      }to{
        width:162px;
      }
    }
    
    @keyframes border-top-enlarge{
      from{
        width:0px;
      }to{
        width:92px;
      }
    }
  }
</style>