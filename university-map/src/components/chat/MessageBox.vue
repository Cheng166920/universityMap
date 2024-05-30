<script setup>
import { defineProps, defineEmits, onUpdated, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router';
import { useItemsStore } from '../../stores/chat';
import { getUniversityRank } from '../../api/university';

const { addItem } = useItemsStore();
// 来自父组件的message
const props = defineProps(['message', 'type'])
// 从父组件接收的message
const { message, type } = toRefs(props)
// const chatMessage = ref('')
const icon = ref('')
if (type.value === 'You') {
  icon.value = 'UserFilled'
} else {
  icon.value = 'HelpFilled'
}

// 图标
const img = ref('')
console.log(message.value[0])
if (message.value[0] !== undefined && message.value[0]['type'] === '985') {
  img.value = '../../src/assets/images/' + message.value[0]['university_name'] + '.png'
} else {
  img.value = '../../src/assets/images/' + 'default' + '.png'
}

const router = useRouter()
const showMap = () => {
  const params = message.value[0]['university_name']
  router.push({ path: '/map', query: { name: params }})
}

const showRank = async () => {
  let content = []
  const res = await getUniversityRank(message.value[0]['university_name'])
  if (res.data[0]['times_2024']) {
    content.push('泰晤士高等教育排名：'+ res.data[0]['times_2024'])
  }
  if (res.data[0]['us_news']) {
    content.push('U.S.News 排名：' + res.data[0]['us_news'])
  }
  let qs_rank = res.data[0]['qs']
  if (qs_rank) {
    const qs = qs_rank.replace('[', '').replace(')', '').split(',')
    if (Number(qs[0]) + 1 === Number(qs[1])) {
      qs_rank = qs[0]
    } else {
      qs_rank = qs.join(' - ')
    }
    content.push('QS 排名：' +  qs_rank)
  }
  addItem({ message: { university_name: message.value[0]['university_name'], desc: content.join('； ')}, type: 'Other'})
}

const showPlan = () => {
  addItem({ message: { university_name: message.value[0]['university_name'], desc: '强基计划、高校专项计划'}, type: 'Other'})
}

const emit = defineEmits(['update'])
onUpdated(() => {
  emit('update')
  console.log('子组件更新了')
})
</script>

<template>
 <div class="icon-text-container">
    <el-avatar :icon=icon :size="25"></el-avatar>
    <slot></slot>
  </div>
  <div v-if="type==='You'">
    <p>{{ message }}</p>
  </div>
  <div v-if="type==='Other'">
    <p><strong>{{ message['university_name'] }}</strong></p>
    <p>{{ message['desc'] }}</p>
  </div>
  <div v-if="type==='Help'" class="card"> 
    <!-- <p v-html="chatMessage"></p> -->
    <div class="base-info">
      <img :src=img style="height:100px;margin:10px">
      <h1 >{{ message[0]['university_name'] }}</h1>
      <p>{{ message[0]['university_nature'] }} | {{ message[0]['university_level'] }} | {{ message[0]['type'] }}</p>
    </div>
    <div class="detail-info">
      <p>武汉大学成立于1893年，位于中国湖北省武汉市，是中国最早的现代国立大学之一。经过数次更名和重组，于1928年正式更名为武汉大学，成为中国著名的综合性高等学府之一。</p>
      <div class="location">
        <el-link @click="showMap">大学位置</el-link>
        <el-link @click="showRank">大学排名</el-link>
        <el-link @click="showPlan">招生计划</el-link>
      </div>
    </div>
    <div class="discipline-info">
      <p><strong>学科: </strong></p>
      <p>{{ message[0]['construction_discipline'] }}</p>
    </div>

  </div>
</template>

<style lang="less" scoped>
.icon-text-container {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
}

.icon-text-container .el-avatar {
  size: 20;
  color: #fff; /* 根据需要调整图标颜色 */
  background-color: @primary-color; /* 根据需要调整图标背景颜色 */
}

.card {
  border-radius: 10px;
  padding: 10px;

  display: flex;
  // align-items: center;
  // justify-content: center;
  gap: 5px;
}
.base-info {
  flex:2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(228, 228, 228);
}
.base-info h1 {
  font-size: 28px;
  margin-top: -5px;
  letter-spacing: 3px;
}
.base-info p {
  margin-top: -15px;
}
.detail-info {
  flex:3;
  background-color: rgb(228, 228, 228);
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px 0 20px;
}

.detail-info p {
  display: -webkit-box; /* 将元素转换为弹性盒子 */
  -webkit-box-orient: vertical; /* 设置弹性盒子的排列方向为垂直 */
  overflow: hidden; /* 隐藏溢出部分 */
  text-overflow: ellipsis; /* 显示省略号 */
  -webkit-line-clamp: 6; /* 设置显示的行数 */
}
.location {
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  margin-bottom: 15px;
}
.location .el-link {
  color: rgb(8, 60, 128);
  font-size: 16
}
.location .el-link:hover {
  border-bottom: 1px solid rgb(8, 60, 128);
}
.discipline-info {
  flex:2;
  background-color: rgb(228, 228, 228);
  height: inherit;
  padding: 0 20px 0 20px;
}
</style>