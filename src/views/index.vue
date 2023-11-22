<template>
    <div class="container">
        hellosssssssssssssss
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
    background-color: $dark-bg-color;
    width: 100%;
    height: 100vh;
}
</style>