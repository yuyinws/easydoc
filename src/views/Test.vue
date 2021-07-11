<template>
    <div v-for="item in _data"
         :key="item.sha">
        <div>{{item.name}}</div>
        <div>{{item}}</div>
    </div>
</template>



<script>
import { reactive, ref,onMounted,toRefs } from 'vue'
import axios from 'axios'
import config from '../config'
export default {
    setup() {
        const list = reactive({
          _data:[]
        })

        const getData = () => {
            axios({
                method: 'GET',
                url: `https://api.github.com/repos/${config.userName}/${config.repo}/contents/doc?ref=gh-pages&client_id=${config.clientId}&client_secret=${config.secrets}`,
            }).then((res) => {
                console.log(res)
                list._data = res.data
            })
        }

        onMounted(() => {
          getData()
        })
        return { ...toRefs(list) }
    },
}
</script>