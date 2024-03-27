#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from '../app.js'; // 导入 Express 应用
import debug from 'debug'; // 导入调试模块
import http from 'http'; // 导入 HTTP 模块

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000'); // 获取环境中的端口号，默认为 3000
app.set('port', port); // 设置 Express 应用的端口

/**
 * Create HTTP server.
 */

const server = http.createServer(app); // 创建 HTTP 服务器

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port); // 服务器监听指定端口
server.on('error', onError); // 监听错误事件
server.on('listening', onListening); // 监听监听事件

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10); // 将端口号转换为整数

  if (isNaN(port)) {
    // named pipe
    return val; // 如果无法转换为数字，则返回原始值
  }

  if (port >= 0) {
    // port number
    return port; // 如果端口号有效，则返回端口号
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
