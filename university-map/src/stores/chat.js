import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useItemsStore = defineStore('chat', () => {
    const items = ref([]);
    const history = ref([]);
    let curIndex = 0;
    const addItem = (item) => {
        if (items.value.length === 0) {
            items.value.push(item);
            addHistory()
        } else {
            const curItem = history.value[curIndex]
            curItem.push(item)
            items.value.push(item);
        }   
    };
    // 清空items
    const clearItems = () => {
        items.value.splice(0, items.value.length); 
        console.log(items.value);
    };
    const restoreItems = (index) => {
        curIndex = index;
        const chat = history.value[index];
        clearItems();
        chat.forEach(item => {
            items.value.push(item);
        });
    };
    const addHistory = () => {
        if (items.value.length === 0) return;
        history.value.unshift([...items.value]);
        console.log(history.value);
    };
    // 清空history
    const clearHistory = () => {
        history.value.splice(0, history.value.length); 
    };
    const deleteHistory = (index) => {
        clearItems();
        curIndex = 0;
        history.value.splice(index, 1);
        console.log(history.value);
    };
    return {
        items,
        history,
        addItem,
        clearItems,
        restoreItems,
        addHistory,
        clearHistory,
        deleteHistory
    };
    
},
{
    persist: true
}
);
