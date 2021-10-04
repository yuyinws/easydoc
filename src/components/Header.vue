<template>
  <div class="min-w-full bg-gray-100 p-3 grid grid-cols-3">
    <i class="iconfont icon-cebianlan" @click="emits('changePop')"></i>
    <div class="text-center">
      Header
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const emits = defineEmits(['changePop'])
</script>
<style scoped lang="scss">
</style>