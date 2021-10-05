<template>
  <van-loading class="loading" color="#1989fa" v-if="isLoading"></van-loading>
  <div v-else>
    <!-- <div v-for="item in data.catalog" :key="item.sha">
      <div @click="emits('getText', item)">{{ item.name }}</div>
    </div>-->
    <n-tree
      block-line
      :data="data.catalog"
      selectable
      key-field="sha"
      label-field="name"
      :on-update:selected-keys="test"
    ></n-tree>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref } from 'vue'
import { getCatalog } from '@/api/index.js'
import { NTree } from 'wowjoy-vui'

const emits = defineEmits(['getText'])
const data = reactive({
  catalog: []
})
const isLoading = ref(true)

const renderList = async (path,index = null) => {
  const list = await _getCatalog(path)
  let loadingFlag = false
  if(index){
    data.catalog[index].children = list
  } else {
    data.catalog = list
  }
  list.forEach((item,index) => {
    if(item.type === 'dir') {
      loadingFlag = true
      renderList(item.path,index)
    }
  })
  isLoading.value = loadingFlag
}

const _getCatalog = async (path) => {
  const response = await getCatalog(path)
  return response
}

const test = (event) => {
  console.log(event)
}

onMounted(() => {
  renderList()
})
</script>
<style scoped>
.loading {
  width: 20%;
  left: 40%;
  top: 40%;
}
</style>