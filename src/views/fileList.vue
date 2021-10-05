<template>
  <van-loading class="loading" color="#1989fa" v-if="isLoading"></van-loading>
  <div v-else class="px-3 pt-2">
    <div class="flex flex-row justify-between">
      <div>
        <i class="iconfont icon-houtui" style="font-size:20px" @click="clickBack"></i>
        <span style="font-size:20px">{{ data.pathArr[data.pathArr.length - 1] }}</span>
      </div>
      <i class="iconfont icon-guanbi" style="font-size:20px" @click="emits('changePop')"></i>
    </div>
    <van-divider />
    <div v-for="item in data.fileList" :key="item.sha">
      <div @click="handleClickFile(item)">
        <i
          class="iconfont"
          :class="[item.type === 'dir' ? 'icon-wenjianjia' : 'icon-24gl-fileText']"
        ></i>
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref } from 'vue'
import { getFileList } from '@/api/index.js'
import { Divider } from 'vant';

const emits = defineEmits(['getText', 'changePop'])
const data = reactive({
  fileList: [],
  pathArr: [],
  pathHistory: []
})
const isLoading = ref(false)
const handleClickFile = (item) => {
  if (item.type === 'dir') {
    _getFileList(item.path)
  } else {
    emits('getText', item)
  }
}
const _getFileList = async (path) => {
  isLoading.value = true
  data.pathHistory.push(path)
  data.pathArr = path.split('/')
  const response = await getFileList(path)
  data.fileList = response
  isLoading.value = false
}

const clickBack = () => {
  if (data.pathHistory.length < 2) {
    emits('changePop')
    return
  }
  let path = data.pathHistory[data.pathHistory.length - 2]
  data.pathHistory.pop()
  data.pathHistory.pop()
  _getFileList(path)
}

onMounted(() => {
  _getFileList('doc')
})
</script>
<style scoped>
.loading {
  width: 20%;
  left: 40%;
  top: 40%;
}
</style>