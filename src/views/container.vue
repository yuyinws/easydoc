<template>
  <v-md-preview :text="text"></v-md-preview>
</template>

<script setup>
const props = defineProps({
  text:String
})
</script>
<style scoped lang="scss">
</style>