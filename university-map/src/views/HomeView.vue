<script setup>
</script>

<template>
<div class="nav">
    <el-menu
        :default-active="$route.path"
        mode="horizontal"
        :ellipsis="false"
        active-text-color="#74A89B"
        router
    >
      <el-menu-item index="/home">
          <el-icon><User /></el-icon>
          <span>主页</span>
      </el-menu-item>
      <el-menu-item index="/map">
          <el-icon><Coordinate /></el-icon>
          <span>地图</span>
      </el-menu-item>
      <el-menu-item index="/list">
          <el-icon><Document /></el-icon>
          <span>列表</span>
      </el-menu-item>
    </el-menu>
</div>
<ChatBox></ChatBox>

</template>

<style lang="less" scoped>
.nav {
  position: absolute;
  top: 10px;
  right: 10px;
}
.el-menu--horizontal {
  border-bottom: none;
}
.el-menu--horizontal > .el-menu-item {
  width: 50%;
  border-bottom: none;
  height: 50%;
  text-align: center;
  text-decoration: none;
}

.el-menu--horizontal > .el-menu-item:hover {
  border-bottom: none;
  color: @primary-color;
}
</style>

