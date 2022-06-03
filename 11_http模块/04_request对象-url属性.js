const http = require('http');
const url = require('url');
const qs = require('querystring');

// 创建一个web服务器
const server = http.createServer((req, res) => {
  // request对象中封装了客户端给服务器传递过来的所有信息
  // if (req.url === '/login') {
  //   res.end('欢迎回来！');
  // }else if (req.url === '/users') {
  //   res.end('用户列表');
  // } else {
  //   res.end('错误请求，请检查！');
  // }
  // console.log(url.parse(req.url));
  const {pathname, query} = url.parse(req.url);
  if (pathname === '/login') {
    const {username, age} = qs.parse(query);
    console.log(`username => ${username}`);
    console.log(`age => ${age}`);
    res.end('请求结果~');
  } else {
    res.end('bad request');
  }
});

// 启动服务器，并且指定端口号及主机
server.listen(8000, '0.0.0.0', () => {
  console.log('服务器启动成功~');
});