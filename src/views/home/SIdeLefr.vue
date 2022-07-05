<template>
  <div>
    <!-- dididididii -->
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      router
    >
      <ItemOne
        v-for="(item, index) in props.lister"
        :key="index"
        :list="item"
      ></ItemOne>
    </el-menu>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
import ItemOne from './ItemOne.vue'

const props = defineProps({
  lister: {
    type: Array,
    default: () => []
  }
})
console.log(props.lister)
</script>
