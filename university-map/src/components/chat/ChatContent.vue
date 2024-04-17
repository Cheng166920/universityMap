<script setup>
import { ref } from 'vue';
import { onUpdated } from 'vue';
import MessageBox from './MessageBox.vue';
import { getUniversity } from '../../api/university';
import { useItemsStore } from '../../stores/chat';


const { items, addItem } = useItemsStore();
//获取输入框的值，并将其添加到对话框中
let input = ref('');
//const items = ref([]);
const pushData = async () => {
    if(input.value === '') return;
    const res = await getUniversity(input.value)
    addItem({ message: input.value, type: 'You'});
    if(res.data.length > 0) {
        addItem({ message: res.data, type: 'Help'});
    }

    input.value = '';
}

// 每次更新后滚动到底部
const scrollbar = ref(null);
onUpdated(() => {
  scrollToBottom();
});
const scrollToBottom = () => {
    const scroll = scrollbar.value;
    scroll.setScrollTop(scroll.$el.scrollHeight);
}

</script>

<template>

<el-scrollbar ref="scrollbar">
    <div class="tip" v-if="items.length === 0">
        <el-icon :size="20" ><HelpFilled /></el-icon>
        <strong>How can I help you today?</strong>
    </div>
    <MessageBox v-for="item in items" :key="item" :message=item.message :type="item.type" />
</el-scrollbar>
<el-input
v-model="input"
size="large"

placeholder="Please Input"
@keyup.enter="pushData"
>
<template #append>
    <el-button icon="Top"  @click="pushData"/>
</template>
</el-input>
</template>

<style>
.el-menu {
  border-right: none;
}
.el-scrollbar {
    height: 90%;
    padding: auto;
    padding-bottom: 5px;
}
.tip {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    display: flex;
    gap: 10px;
    flex-direction: column; /* 垂直对齐元素 */
    align-items: center;
    justify-content: center;
}
.el-input{
    position: absolute;
    bottom: 0;
    width: 65%;
}
.el-input-group__append {
    
  background-color: #3385FF;
  color: #FFF;

 }
</style>../../stores/chat