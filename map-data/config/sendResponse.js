// 封装响应函数
export const sendResponse = (res, data) => {
    res.status(200).json({
      status: 200,
      message: '成功',
      data: data
    });
  };
  