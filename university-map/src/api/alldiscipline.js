import request from '@/utils/request'
// 地区：获取学科信息
export const getAlldiscipline = () => {
    // 构建请求路径
    const requestUrl = `discipline/all`;
  
    // 发起GET请求
    return request.get(requestUrl)
  }