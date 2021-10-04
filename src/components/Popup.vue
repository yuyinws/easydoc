<template>
  <van-popup style="min-width:30%;height:100%" v-model:show="isPopShow" position="left">
    <slot></slot>
  </van-popup>
</template>

<script setup>
import { ref, reactive } from 'vue'


const props = defineProps({
  isPopShow: Boolean
})
</script>
<style scoped lang="scss">
</style>