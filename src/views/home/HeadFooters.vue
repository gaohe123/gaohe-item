<template>
  <div>
    <el-tabs
      v-model="editableTabsValue"
      @tab-click="hand"
      type="card"
      editable
      class="demo-tabs"
      @tab-remove="removeTab"
    >
      <el-tab-pane
        :name="item.path"
        :label="item.meta.title"
        v-for="(item, index) in store.state.router"
        :key="index"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup>
import { watch, ref } from 'vue'
import { useRouter } from 'vue-router'
import store from '../../store/index.js'
import route from '../../router/index.js'
const editableTabsValue = ref('')
// editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
const router = useRouter()
watch(
  () => router.currentRoute.value,
  (newValue, oldValue) => {
    editableTabsValue.value = newValue.path
    console.log('watch', newValue)
    store.commit('Addroute', newValue)
  },
  { immediate: true }
)
const hand = (tab, event) => {
  // console.log(tab.props.name, event)
  route.push(tab.props.name)
  // rou.push(name)
}
const removeTab = (targetName) => {
  store.commit('deltargetName', targetName)
}
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
