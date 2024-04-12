<script setup>
import { ref } from 'vue';
import { onUpdated } from 'vue';
import MessageBox from './MessageBox.vue';
import { getUniversity } from '../../api/university';
//获取输入框的值，并将其添加到对话框中
let input = ref('');
const items = ref([]);
const ans = ref([]);
const pushData = async () => {
    if(input.value === '') return;
    items.value.push({ message: input.value, type: 'question'});
    const res = await getUniversity(input.value)
    if(res.data.length > 0) {
        items.value.push({ message: res.data, type: 'answer'});
    }
    console.log(ans.value[0]);
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
    <MessageBox v-for="item in items" :key="item.message" :message=item.message :type="item.type" />
</el-scrollbar>
<el-input
v-model="input"
size="large"
placeholder="Please Input"
@keyup.enter="pushData"
>
<template #append>
    <el-button icon="Top" @click="pushData"/>
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
}
.el-input{
    position: absolute;
    bottom: 0;
    width: 65%;
}
</style>