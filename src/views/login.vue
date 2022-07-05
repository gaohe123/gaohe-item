<template>
  <div>
    <el-form label-width="100px" :model="From" style="max-width: 460px">
      <el-form-item label="用户名">
        <el-input v-model="From.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="From.password" />
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="From.code" />

        <!-- <img src="" alt=""> -->
      </el-form-item>
    </el-form>
    <!-- <img :src="dataurl" alt="" /> -->
    <!-- {{ urltt }} -->
    <img :src="urltt" alt="" @click="onhandlef" />
  </div>
</template>
<script setup>
import { coid } from '../api/user'
import { reactive, onBeforeMount } from 'vue'

// setup()
// {
//   console.log('111')
// }
// var dataurl = ref('')

const onhandlef = async () => {
  const postyten = await coid()
  console.log(postyten)

  // return dataurl
  localStorage.setItem('token', postyten.data.data.token)
  localStorage.setItem('url', postyten.data.data.captchaImg)

  // console.log(dataurl)
}

onBeforeMount(() => {
  onhandlef()
})
const urltt = localStorage.getItem('url')
// const po = dataurl

const From = reactive({
  username: '',
  password: '',
  code: ''
})
</script>
<style>
.el-form {
  margin-top: 200px;
  margin-left: 100px;
}
</style>
