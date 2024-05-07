import request from '@/utils/request'
// 地区：获取双一流学校信息
export const getDoublefirst = () => {
    // 构建请求路径
    const requestUrl = `university/double_first_class`;  
    // 发起GET请求
    return request.get(requestUrl)
  }