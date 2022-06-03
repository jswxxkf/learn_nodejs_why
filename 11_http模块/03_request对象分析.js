const http = require('http');

// 创建一个web服务器
const server = http.createServer((req, res) => {
  // request对象中封装了客户端给服务器传递过来的所有信息
  console.log(req.url)
  console.log(req.method)
  console.log(req.headers["user-agent"])
  res.end('hello nodejs server');
});

// 启动服务器，并且指定端口号及主机
server.listen(8000, '0.0.0.0', () => {
  console.log('服务器启动成功~');
});