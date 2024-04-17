<script setup>
import { useItemsStore } from '../../stores/chat';


const { history, addItem, clearItems, addHistory } = useItemsStore();
const createChat = () => {
  addHistory()
  //clearHistory()
  clearItems()
}
const restoreChat = (chat) => {
    addHistory()
    clearItems()
  chat.forEach(item => {
    addItem(item)
  })
}
</script>

<template>
    <el-button type="primary" @click="createChat" round>新建对话</el-button>
  <el-scrollbar>
        
          <el-menu>
            <el-menu-item v-for="chat in history" :key="chat" @click="restoreChat(chat)">{{ chat.length > 0 ? chat[0].message.slice(0, 10) : ''}}</el-menu-item>
          </el-menu>
</el-scrollbar>
</template>

<style scoped>
.el-menu {
  border-right: none;
}
.el-button {
  width: 100%;
}
</style>