<template>
	<div class="login">
    <div class="login-bg">
      <img src="@/assets/timg.jpg" alt="背景图">
    </div>
    <div class="login-form-wrapper">
      <h2 class="title">企业管理系统</h2>
      <el-form 
        class="login-form"
        ref="loginForm" 
        :model="reqData" 
        size="medium" 
        label-width="40px">
          <el-form-item label="账号">
            <el-input v-model="reqData.account"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="reqData.password"></el-input>
          </el-form-item>
          <el-form-item class="login-btn">
            <el-button type="primary" @click="handleLogin">登录</el-button>
          </el-form-item>
      </el-form>
    </div>
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
    position: relative;
    height: 100%;
    .login-bg {
      width: calc(100% - 450px);
      height: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .login-form-wrapper {
      width: 300px;
      position: absolute;
      right: 80px;
      top: 150px;
      .title {
        text-align: center;
      }
    }
    .login-form {
      margin-top: 20px;
    }
    .login-btn {
      text-align: center;
      .el-button {
        width: 100%;
      }
    }
  }
</style>