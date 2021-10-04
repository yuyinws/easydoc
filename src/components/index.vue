<template>
  <v-header :title="title" @changePop="changePop"></v-header>
  <v-popup :isPopShow="isPopShow">
    <template #default>
      <file-list @getText="getText"></file-list>
    </template>
  </v-popup>
  <v-container :text="text" :iscontainerLoading="iscontainerLoading"></v-container>
  <router-view />
</template>

<script setup>
import { ref, reactive } from 'vue'
import vHeader from './Header.vue'
import vPopup from './Popup.vue'
import FileList from '@/views/fileList.vue'
import vContainer from '@/views/container.vue'
import { getContent } from '@/api/index.js'
const isPopShow = ref(false)
const text = ref('**Empty**')
const title = ref('Home')
const iscontainerLoading = ref(false)
const changePop = () => {
  isPopShow.value = !isPopShow.value
}
const getText = async (params) => {
  title.value = params.name
  changePop()
  iscontainerLoading.value = true
  const response = await getContent(params.path)
  text.value = response
  iscontainerLoading.value = false
}
</script>
<style scoped lang="scss">
</style>