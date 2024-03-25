import createError from 'http-errors'; // 导入错误处理模块
import express from 'express'; // 导入 Express 框架
import { fileURLToPath } from 'url';
import path from 'path'; // 导入路径处理模块
import cookieParser from 'cookie-parser'; // 导入 cookie 解析模块
import logger from 'morgan'; // 导入日志记录模块

import indexRouter from './routes/index.js'; // 导入主页路由模块
import usersRouter from './routes/users.js'; // 导入用户路由模块
import universityRouter from './routes/university/university.js'; // 导入大学路由模块

const app = express(); // 创建 Express 应用
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 设置视图引擎和视图文件路径
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev')); // 使用开发环境日志记录器
app.use(express.json()); // 使用 JSON 请求体解析器
app.use(express.urlencoded({ extended: false })); // 使用 URL 编码解析器
app.use(cookieParser()); // 使用 cookie 解析器
app.use(express.static(path.join(__dirname, 'public'))); // 使用静态文件中间件提供公共资源

app.use('/', indexRouter); // 使用主页路由
app.use('/users', usersRouter); // 使用用户路由
app.use('/university', universityRouter); // 使用大学路由
// 捕获 404 并转发到错误处理程序
app.use((req, res, next) => {
  next(createError(404));
});

// 错误处理程序
app.use((err, req, res, next) => {
  // 设置本地变量，仅在开发环境中提供错误信息
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 渲染错误页面
  res.status(err.status || 500);
  res.render('error');
});

export default app; // 导出 Express 应用
