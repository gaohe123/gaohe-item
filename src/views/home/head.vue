<template>
  <div>
    <h2 class="title">VueAdmin后台管理系统</h2>
    <div class="headright">
      <img
        class="imgurl"
        src="https://image-1300566513.cos.ap-guangzhou.myqcloud.com/upload/images/5a9f48118166308daba8b6da7e466aab.jpg"
        alt=""
      />
      {{ store.state.username }}

      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item> 个人中心</el-dropdown-item>
            <el-dropdown-item @click="exit"> 退出 </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
import store from '../../store/index'
import route from '../../router/index'
const exit = () => {
  localStorage.removeItem('router')
  localStorage.removeItem('authorization')
  localStorage.removeItem('token')
  route.push('/login')
}
</script>
<style>
.title {
  text-align: center;
  margin-top: 15px;
}
.imgurl {
  margin-left: 5px;
  margin-top: 5px;
  height: 36px;
  border-radius: 50%;
}
.headright {
  position: absolute;
  right: 100px;
  top: 12%;
}
.el-dropdown {
  margin-top: 10px !important;
}
</style>
