<template>
  <template
    v-if="props.list && props.list.children && props.list.children.length > 0"
  >
    <el-sub-menu :index="props.list.component + ''">
      <template #title>
        <span>{{ props.list.title }}</span>
      </template>
      <ItemOne
        v-for="(item, index) in props.list.children"
        :key="index"
        :list="item"
      >
      </ItemOne>
    </el-sub-menu>
  </template>

  <template
    v-if="
      props.list && (!props.list.children || props.list.children.length <= 0)
    "
  >
    <el-menu-item :index="props.list.path + ''">
      <span>{{ props.list.title }}</span>
    </el-menu-item>
  </template>
</template>
<script setup>
import { defineProps } from 'vue'
// import ItemOne from "./ItemOne";
const props = defineProps({
  list: {
    type: Object,
    default: () => {}
  }
})
console.log(props.list)
</script>
