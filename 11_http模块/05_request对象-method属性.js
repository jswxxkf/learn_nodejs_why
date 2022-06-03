const http = require('http');
const url = require('url');
const qs = require('querystring');

// 创建一个web服务器
const server = http.createServer((req, res) => {
  const {pathname} = url.parse(req.url);
  if (pathname === '/login') {
    // 注意 请求方式对大小写敏感
    if (req.method === 'POST') {
      req.setEncoding('utf-8');
      // 取到body中的数据
      req.on('data', chunk => {
        // JSON.parse(stringLike) parse String to Object
        const {username, age} = JSON.parse(chunk);
        console.log(`username => ${username}`);
        console.log(`age => ${age}`);
      });
      res.end('hello nodejs server');
    }
  } else {
    res.end('bad request');
  }
});

// 启动服务器，并且指定端口号及主机
server.listen(8000, '127.0.0.1', () => {
  console.log('服务器启动成功~');
});