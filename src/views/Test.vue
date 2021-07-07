<template>
    <div>{{test}}</div>
</template>

<script setup>
import service from '../utils/http'
const t = () => {
    return service({
        url: 'https://api.github.com/repos/yuyinws/easydoc/contents',
    })
}
t().then((res) => {
    console.log(res)
})
</script>
