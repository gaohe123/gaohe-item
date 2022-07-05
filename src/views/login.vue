<template>
  <div>
    <el-form
      label-width="100px"
      :model="From"
      :rules="rules"
      style="max-width: 460px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="From.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="From.password" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="From.code" class="elinput" />
        <img class="imgurl" :src="store.state.coid" alt="" @click="imgurl" />
        <!-- <img src="" alt=""> -->
      </el-form-item>
      <el-button type="primary" @click="logi">提交</el-button>
      <el-button>获取密码</el-button>
    </el-form>
    <!-- <img :src="dataurl" alt="" /> -->
    <!-- {{ urltt }} -->
  </div>
</template>
<script setup>
import { ElMessage } from 'element-plus'
import store from '../store'
import { coid, login } from '../api/user'
import { reactive, onBeforeMount } from 'vue'
import router from '.././router/index.js'
// console.log(store.state.coid)

// console.log(router.path)

// setup()
// {
//   console.log('111')
// }
// var dataurl = ref('')
// const urltt = localStorage.getItem('url')
const logi = async () => {
  // console.log(From)
  From.token = localStorage.getItem('token')
  const postyten = await login(From)
  console.log('postyten', postyten)
  if (postyten.data.code === 200) {
    // localStorage.setItem('captchaImg', postyten.data.data.captchaImg)
    // console.log('1')
    // const pon = await list()
    // console.log(pon)

    localStorage.setItem('authorization', postyten.headers.authorization)
    localStorage.setItem('username', From.username)
    ElMessage({
      message: postyten.data.msg,
      type: 'success'
    })
    // console.log(router)
    router.push('/')
  } else {
    ElMessage.error({
      message: postyten.data.msg,
      type: 'warning'
    })
  }
}
const imgurl = () => {
  onhandlef()
  // eslint-disable-next-line
}

const onhandlef = async () => {
  const postyten = await coid()
  console.log(postyten)
  store.commit('setcoid', postyten)
  // return dataurl

  // console.log(dataurl)
}
const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '用户名必须是3到15位', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 5, max: 10, message: '密码必须是5到10位', trigger: 'blur' }
  ],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
})

onBeforeMount(() => {
  onhandlef()
})

// const po = dataurl

const From = reactive({
  username: 'test',
  password: '',
  code: '',
  token: localStorage.getItem('token')
})
</script>
<style>
.imgurl {
  margin-left: 20px;
}
.elinput {
  width: 60%;
}
.el-form {
  margin-top: 200px;
  margin-left: 500px;
}
.el-button{
  margin-left: 200px;
}
</style>
