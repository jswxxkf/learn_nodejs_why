const http = require('http');

// http发送get请求
// http.get('http://localhost:8000', res => {
//   res.on('data', chunk => {
//     console.log(chunk.toString())
//   });
//   res.on('end', () => {
//     console.log('收到了所有的结果');
//   });
// });

// http发送post请求
const req = http.request({
  method: 'POST',
  hostname: 'localhost',
  port: 8000
}, res => {
  res.on('data', chunk => {
    console.log(chunk.toString())
  });
  res.on('end', () => {
    console.log('收到了所有的结果');
  });
});

req.end();