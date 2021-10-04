<template>
  <van-loading class="loading" color="#1989fa" v-if="isLoading"></van-loading>
  <div v-else>
    <div v-for="item in data.catalog" :key="item.sha">
      <div @click="emits('getText', item)">{{ item.name }}</div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref } from 'vue'
import { getCatalog } from '@/api/index.js'

const emits = defineEmits(['getText'])
const data = reactive({
  catalog: []
})
const isLoading = ref(false)

const _getCatalog = async () => {
  isLoading.value = true
  const response = await getCatalog()
  data.catalog = response
  isLoading.value = false
}

onMounted(() => {
  _getCatalog()
})
</script>
<style scoped>
.loading {
  width: 20%;
  left: 40%;
  top: 40%;
}
</style>