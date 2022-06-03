const http = require('http');

// 方式1
// 创建一个web服务器
const server1 = http.createServer((req, res) => {
  res.end('Server1');
});

// 启动服务器，并且指定端口号及主机
server1.listen(8000, '127.0.0.1', () => {
  console.log('Server1启动成功~');
});
//
// // 创建第二个服务器
// const server2 = http.createServer((req, res) => {
//   res.end('Server2');
// });
//
// server2.listen(8001, '127.0.0.1', () => {
//   console.log('Server2启动成功~');
// });

// 方式2
const server2 = new http.Server((req, res) => {
  res.end('Server2');
});

// listen()的默认参数：端口找任意空闲，主机 0.0.0.0(本网段下的所有ip)
server2.listen(8001, '127.0.0.1', () => {
  console.log('Server2启动成功~')
  console.log(server2.address().port)
});