import request from '@/utils/request'
// 地区：获取地区信息
export const getArea = () => {
    // 构建请求路径
    const requestUrl = `university/provinces`;
  
    // 发起GET请求
    return request.get(requestUrl)
  }
