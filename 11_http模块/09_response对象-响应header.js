const http = require('http');

// 创建一个web服务器
const server = http.createServer((req, res) => {
  // res.setHeader('Content-Type', 'text/plain;charset=utf8')
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf8'
  })
  res.end("<h2>响应结果</h2>")
});

// 启动服务器，并且指定端口号及主机
server.listen(8000, '127.0.0.1', () => {
  console.log('服务器启动成功~');
});