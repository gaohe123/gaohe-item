<template>
  <div class="el-container">
    <el-container>
      <el-aside width="200px" class="Left">
        <SIdeLefr :lister="tata.tt"></SIdeLefr>
      </el-aside>
      <el-container>
        <el-header class="head">
          <Head></Head>
        </el-header>
        <div class="ViewTop"><HeadFooters></HeadFooters></div>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import HeadFooters from './home/HeadFooters'
import SIdeLefr from './home/SIdeLefr.vue'
import Head from './home/head.vue'
// import store from '../store/index.js'
// import {  } from 'vue'
import { list } from '../api/user'
import { reactive } from 'vue'

const tata = reactive({
  tt: [
    {
      component: '/shouye',
      icon: '',
      id: 0,
      name: 'sys:manage',
      path: '/shouye',
      title: '首页'
    }
  ]
})
const setlist = async () => {
  // console.log('pon', pnsty.value)
  const pnsty = await list()

  // console.log(pnsty.data.data.nav)
  // localStorage.setItem('data', JSON.stringify(pnsty.data.data.nav))
  console.log(tata.tt)
  for (let index = 0; index < pnsty.data.data.nav.length; index++) {
    tata.tt.push(pnsty.data.data.nav[index])
  }
}
setlist()

// console.log(data)
</script>
<style>
.el-container {
  height: 100%;
}
.ViewTop {
  height: 50px;
  background-color: rgb(255, 255, 255);
}
.head {
  position: relative;
  background-color: #17b3a3;
}
.Left {
  background-color: rgb(84, 92, 100);
}
</style>
