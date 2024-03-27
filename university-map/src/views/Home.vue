<script setup>
import MapEntrance from '@/components/MapEntrance.vue';
</script>

<template>
    <div class="container">
      <div class="entrance">
        <MapEntrance />
      </div>
      <div class="images">
        <img style="width: 10%; " src="../assets/images/where.jpg" alt="Where image">
        <img style="width: 50%;" src="../assets/images/entrance-img.jpg" alt="Entrance image">
      </div>
    </div>
  </template>
  
  <style scoped>
 .container {
  display: flex;
  height: 100vh; 
  overflow: hidden;
}

.entrance {
  flex: 1; /* 占据左半边剩余空间 */

}

.images {
    flex:1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
 
}

.images img {
  flex: 1; /* 占据垂直方向剩余空间 */
  
 /* 自动适应宽度 */
  height: auto; /* 自动适应高度 */
  object-fit: cover; /* 填充容器 */
}
  </style>
  