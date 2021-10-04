<template>
    <van-loading v-if="iscontainerLoading" class="loading" color="#1989fa"></van-loading>
    <v-md-preview v-else :text="text"></v-md-preview>
</template>

<script setup>
const props = defineProps({
  text: {
    type:String,
    default:''
  },
  iscontainerLoading: Boolean
})
</script>
<style scoped lang="scss">
.loading {
  width: 10%;
  left: 45%;
  top: 45%;
}
</style>