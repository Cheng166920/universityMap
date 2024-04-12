import createError from 'http-errors'; // 导入错误处理模块
import express from 'express'; // 导入 Express 框架
import { fileURLToPath } from 'url';
import path from 'path'; // 导入路径处理模块
import cookieParser from 'cookie-parser'; // 导入 cookie 解析模块
import logger from 'morgan'; // 导入日志记录模块

import indexRouter from './routes/index.js'; // 导入主页路由模块
import universityRouter from './routes/university.js'; // 导入大学路由模块
import subjectRouter from './routes/subject.js'; // 导入学科路由模块
import disciplineRouter from './routes/discipline.js'; // 导入学科路由模块

const app = express(); // 创建 Express 应用
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/api-docs', express.static('apidoc'));
app.use(logger('dev')); // 使用开发环境日志记录器
app.use(express.json()); // 使用 JSON 请求体解析器
app.use(express.urlencoded({ extended: false })); // 使用 URL 编码解析器
app.use(cookieParser()); // 使用 cookie 解析器
app.use(express.static(path.join(__dirname, 'public'))); // 使用静态文件中间件提供公共资源

app.use('/', indexRouter); // 使用主页路由
app.use('/university', universityRouter); // 使用大学路由
app.use('/subject', subjectRouter); // 使用学科路由
app.use('/discipline', disciplineRouter); // 使用学科路由

// 捕获 404 并转发到错误处理程序
app.use((req, res, next) => {
  next(createError(404));
});


// 自定义错误处理中间件
const errorHandler = (err, req, res, next) => {
      // 如果错误对象中没有状态码，则默认为 500
    const statusCode = err.statusCode || 500;
    // 如果错误对象中没有消息，则默认为 "Internal Server Error"
    const message = err.message || "Internal Server Error";
    // 构造要发送给客户端的响应对象
    const response = {
      status: statusCode,
      message: message
    };
    // 如果错误对象中有结果，则将结果添加到响应对象中
    if (err.result) {
      response.result = err.result;
    }
    // 发送带有状态码、消息和结果的响应
    res.status(statusCode).json(response);
    
};

// 在应用中使用错误处理中间件
app.use(errorHandler);

export default app; // 导出 Express 应用
