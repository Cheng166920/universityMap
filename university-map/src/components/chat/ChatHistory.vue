<script setup>
import { useItemsStore } from '../../stores/chat';
import { ref } from 'vue';

const { history, clearItems, restoreItems, deleteHistory } = useItemsStore();
const createChat = () => {
    clearItems()
}
const restoreChat = (index) => {
    restoreItems(index)
}
const hoverIndex = ref(null)
const deleteChat = (index) => {
    deleteHistory(index)
}
</script>

<template>
<el-button type="primary" @click="createChat" round>新建对话</el-button>
<el-scrollbar>
    <el-menu>
        <el-menu-item 
            v-for="chat, index in history" 
            :key="chat" 
            @click="restoreChat(index)"
            @mouseover="hoverIndex = index"
            @mouseleave="hoverIndex = null"
            >
            {{ chat.length > 0 ? chat[0].message.slice(0, 10) : ''}}
            <el-button
                v-show="hoverIndex === index"
                icon="Delete"
                @click.stop="deleteChat(index)"
                class="delete-icon-color"
            >
            </el-button>
        </el-menu-item>
    </el-menu>
</el-scrollbar>
</template>

<style lang="less" scoped>
.el-menu {
    border-right: none;
}
.el-button {
    width: 100%;
    margin-bottom: 10px;
    background-color: @primary-color;
    border-color: @primary-color;
}
// 鼠标悬浮 .el-button 颜色变浅
.el-button:hover {
    background-color: @primary-color-light;
    border-color: @primary-color-light;

}
.el-scrollbar .el-button {
    right: 5px; 
    width: 5px;
    border: 0cap;
    position: absolute;
    background-color: #ffffff00;
}

.delete-icon-color {
  color: @primary-color;
}
</style>