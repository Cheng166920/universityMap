import request from '@/utils/request'

// 大学：获取大学信息
export const getUniversity = (name) => {
  // 对name参数进行URL编码，确保在请求路径中安全传递
  const encodedName = encodeURIComponent(name);
    
  // 构建请求路径
  const requestUrl = `/university/name/${encodedName}`;

  // 发起GET请求
  return request.get(requestUrl)
}