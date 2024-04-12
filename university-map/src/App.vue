<script setup>
// import request from './utils/request';

// const getData = async function () {
//   const res = await request.get(`/university/name/${encodeURIComponent('武汉大学')}`)
//   console.log(res.data)
// }

// getData()
</script>

<template>
  <div class="title">
    <el-link :underline="false" type="primary" icon="Opportunity" href="/home">高考地图</el-link>
  </div>
  <router-view/>
</template>

<style scoped>
.title {
  position: absolute;
  top: 10px;
  left: 20px;
}
.el-link {
  font-size: large;
}

</style>
