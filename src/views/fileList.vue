<template>
  <div v-for="item in data.catalog" :key="item.sha">
    <div @click="emits('getText',item)">{{ item.name }}</div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { getCatalog, getContent } from '@/api/index.js'

const emits = defineEmits(['getText'])
const data = reactive({
  catalog: [],
  content: '',
})

const _getCatalog = async () => {
  const response = await getCatalog()
  data.catalog = response
}

onMounted(() => {
  _getCatalog()
})
</script>
<style scoped lang="scss">
</style>