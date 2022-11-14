<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="fromRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'
import { rules } from '../config/login-verify'
import localCache from '@/utils/cache'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
const fromRef = ref<InstanceType<typeof ElForm>>()
const account = reactive({
  name: '',
  password: ''
})
const loginAction = async (isKeepPassword: boolean) => {
  /**
   * @method  表单登陆功能
   */
  try {
    await fromRef.value?.validate()
    if (isKeepPassword) {
      localCache.setCache('name', account.name)
      localCache.setCache('password', account.password)
    } else {
      localCache.deleteCache('name')
      localCache.deleteCache('password')
    }
    await accountLoginRequest({ ...account })
  } catch (error) {
    console.log(error)
  }
}
// eslint-disable-next-line no-undef
defineExpose({ loginAction })
</script>
<style scoped lang="less"></style>
