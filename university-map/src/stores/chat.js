import { defineStore } from 'pinia';
import { ref } from 'vue';
//import { usePersistedState } from 'pinia-plugin-persistedstate';

export const useItemsStore = defineStore('chat', () => {
    const items = ref([]);
    const history = ref([]);
    const addItem = (item) => {
        items.value.push(item);
    };
    // 清空items
    const clearItems = () => {
        items.value.splice(0, items.value.length); 
    };
    const addHistory = () => {
        if (items.value.length === 0) return;
        history.value.push([...items.value]);
        console.log(history.value);
    };
    // 清空history
    const clearHistory = () => {
        history.value.splice(0, history.value.length); 
    };
    return {
        items,
        history,
        addItem,
        clearItems,
        addHistory,
        clearHistory
    };
    
},
{
    persist: true
}
);

// // 应用持久化插件
// useItemsStore().$persist = usePersistedState();
