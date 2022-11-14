<template>
  <div class="login-panel">
    <h1 class="title">cms后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'
const accountRef = ref<InstanceType<typeof loginAccount>>()
const phoneRef = ref<InstanceType<typeof loginPhone>>()
const currentTab = ref<string>('account')

const isKeepPassword = ref<boolean>(false)

const handleLoginClick = () => {
  /**
   * @method 立即登陆
   */
  if (currentTab.value === 'account') {
    accountRef.value?.loginAction(isKeepPassword.value)
  } else {
    console.log('phoneRef调用loginAction')
  }
}
</script>
<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
