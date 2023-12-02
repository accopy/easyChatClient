<template>
    <div class="container">

    </div>
</template>

<script setup>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
const data = reactive({
    name: '',
})

</script>
<style scoped lang='scss'>
.container {
    width: 100%;
    height: 100vh;
}
</style>