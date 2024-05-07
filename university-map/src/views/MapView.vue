<script setup>
import { useRoute} from 'vue-router'
const route = useRoute()
const query = route.query

console.log(query)

</script>

<template>
    <div>map</div>
</template>