<template>
  <div v-for="item in data.catalog" :key="item.sha">
    <div @click="_getContent(item)">{{ item.name }}</div>
  </div>
  <br />
  <!-- <div class="content">{{data.content}}</div> -->
  <v-md-preview :text="data.content"></v-md-preview>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { getCatalog, getContent } from '@/api/index.js'
import vPopup from '@/components/Popup.vue'
const data = reactive({
  catalog: [],
  content: '',
})

const _getCatalog = async () => {
  const response = await getCatalog()
  console.log(response)
  data.catalog = response
}

const _getContent = async (params) => {
  const response = await getContent(params.path)
  console.log(response)
  data.content = response
}

onMounted(() => {
  _getCatalog()
})
</script>

<style scoped>
.content {
  border: 1px solid;
}
</style>