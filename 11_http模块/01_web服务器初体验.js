const http = require('http');

// 创建一个web服务器
const server = http.createServer((req, res) => {
  console.log('服务器监听事件被响应')
  res.end('hello nodejs server');
});

// 启动服务器，并且指定端口号及主机
server.listen(8000, '127.0.0.1', () => {
  console.log('服务器启动成功~');
});