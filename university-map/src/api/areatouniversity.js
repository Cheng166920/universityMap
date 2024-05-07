import request from '@/utils/request'
// 学校：根据地区获取学校数据
export const getAreatouniversity = (Areaname) =>{
    //构建请求路径
    // 对name参数进行URL编码，确保在请求路径中安全传递
    const encodedName = encodeURIComponent(Areaname);
    const requestUrl = `university/province_detail/${encodedName}`;
    //发起GET请求
    return request.get(requestUrl)
  }