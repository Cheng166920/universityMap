//一个示例文件，用于展示如何创建一个路由器

import express from 'express'; // 导入 Express 模块
const usersRouter = express.Router(); // 创建路由器

/* GET users listing. */
usersRouter.get('/', function(req, res, next) {
  res.send('respond with a resource'); // 发送响应字符串
});

export default usersRouter; // 导出路由器

