// 主页路由
import express from 'express'; // 导入 Express 模块
const router = express.Router(); // 创建路由器

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); // 渲染首页模板并传递标题参数
});

export default router; // 导出路由器
