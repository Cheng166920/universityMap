<script setup>
</script>

<template>
<div class="nav">
    <el-menu
    :default-active="this.$route.path"
    mode="horizontal"
    :ellipsis="false"
    router
       >
      <el-menu-item index="/UniversityTab">
         <i class="el-icon-menu"></i>
         <span>双一流高校</span>
      </el-menu-item>
      <el-menu-item index="/DisciplineTab">
         <i class="el-icon-menu"></i>
         <span>双一流专业</span>
      </el-menu-item>
      <el-menu-item index="/AreaTab">
         <i class="el-icon-menu"></i>
         <span >省市</span>
      </el-menu-item>
</el-menu>

</div>
</template>
<style scoped>

</style>