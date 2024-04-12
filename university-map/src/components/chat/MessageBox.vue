<script setup>
import { defineProps, toRefs } from 'vue'
// 来自父组件的message
const props = defineProps(['message', 'type'])
// 从父组件接收的message
const { message, type } = toRefs(props)

</script>

<template>
 <div class="icon-text-container">
    <div v-if="type === 'You'">
      <el-avatar icon="UserFilled" :size="25"></el-avatar>
    </div>
    <div v-else>
      <el-avatar icon="HelpFilled" :size="25"></el-avatar>
    </div>
    <span class="text">{{ type }}</span>
  </div>
<p> {{ message }}</p>
</template>

<style scoped>
.icon-text-container {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
}

.icon-text-container .el-avatar {
  size: 20;
  color: #fff; /* 根据需要调整图标颜色 */
    background-color: #409EFF; /* 根据需要调整图标背景颜色 */
}

.icon-text-container .text {
margin-left: 10px; /* 调整图标和文字之间的距离 */
  font-size: 14px; /* 调整文字大小 */
  color: #000; /* 根据需要调整文字颜色 */
  font-weight: bold; /* 根据需要调整文字粗细 */
}
</style>