<template>
  <v-header @changePop="changePop"></v-header>
  <v-popup :isPopShow="isPopShow">
    <template #default>
      <file-list @getText="getText"></file-list>
    </template>
  </v-popup>
  <v-container :text="text"></v-container>
  <router-view />
</template>

<script setup>
import { ref, reactive } from 'vue'
import vHeader from './Header.vue'
import vPopup from './Popup.vue'
import FileList from '@/views/fileList.vue'
import vContainer from '@/views/container.vue'
import { getCatalog, getContent } from '@/api/index.js'
const isPopShow = ref(false)
const text = ref('123123')
const changePop = () => {
  isPopShow.value = !isPopShow.value
}
const getText = async (params) => {
  const response = await getContent(params.path)
  console.log(response)
  text.value = response
  changePop()
}
</script>
<style scoped lang="scss">
</style>