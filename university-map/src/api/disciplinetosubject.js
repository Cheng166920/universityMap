import request from '@/utils/request'
// 学校：根据学科获取专业数据
export const getSubject = (disciplinename) =>{
    //构建请求路径
    // 对name参数进行URL编码，确保在请求路径中安全传递
    const encodedName = encodeURIComponent(disciplinename);
    const requestUrl = `/subject/discipline/${encodedName}`;
    //发起GET请求
    return request.get(requestUrl)
  }