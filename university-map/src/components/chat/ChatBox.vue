<script setup>
</script>

<template>
    <el-container class="layout-container-demo" >
      <el-aside width="200px">
        <ChatHistory></ChatHistory>
      </el-aside>
      <el-main>
        <ChatContent></ChatContent>
    </el-main>
    </el-container>
  </template>

  <style scoped>
  .layout-container-demo {
    position: absolute;
    padding: 0;
    top: 50px;
    width: 98%;
    height: 85%;
    overflow: hidden;
  }
.layout-container-demo .el-aside {
  width: 15%;
  color: var(--el-text-color-primary);
  background: #fff;
}

.layout-container-demo .el-main {
  padding: 0;
  padding-left: 10%;
  padding-right: 10%;
  width: 80%;
}

</style>