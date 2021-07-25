<template>
    <div v-for="item in list"
         :key="item.sha">
        <div @click="showContent(item)">{{item.name}}</div>
    </div>

    <div>content:{{content}}</div>
</template>



<script>
import { reactive, onMounted, toRefs } from 'vue'
import { getReposContent,getContent } from '@/api/index.js'
export default {
    setup() {
        const data = reactive({
            list: [],
            content:""
        })

        const getData = async () => {
            const response = await getReposContent()
            data.list = response.data
        }

        const showContent = async (params) => {
            const response = await getContent(params.path)
            console.log(response.data)
            data.content = response.data
        }

        onMounted(() => {
            getData()
        })
        return { ...toRefs(data), showContent }
    },
}
</script>