<template>
    test page
    <div v-for="item in list" :key="item.sha">
      <div>{{item.name}}</div>
      <div>{{item}}</div>
    </div>
</template>

<script setup>
// import service from '../utils/http'
// import config from '../config'
// import axios from 'axios'
// import {reactive} from 'vue'
// let list = reactive([1,2,3])
// const t = () => {
//     return service({
//         url: `https://api.github.com/repos/${config.userName}/${config.repo}/contents/doc?ref=gh-pages`,
//     })
// }

// axios({
//   method:"GET",
//   url:`https://api.github.com/repos/${config.userName}/${config.repo}/contents/doc?ref=gh-pages&client_id=${config.clientId}&client_secret=${config.secrets}`
// }).then(res => {
//   console.log(res)
// })
// t().then(res => {
//   list.value = res.data
  
// console.log(list)
// })

</script>
