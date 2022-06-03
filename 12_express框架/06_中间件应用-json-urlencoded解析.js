const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   if (req.headers["content-type"] === 'application/json') {
//     req.on('data', (chunk) => {
//       req.body = JSON.parse(chunk.toString());
//     });
//     req.on('end', () => {
//       next();
//     });
//   } else {
//     next();
//   }
// });

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.post('/login', (req, res, next) => {
  console.log(req.body);
  res.end('Kaifeng Xue, Welcome back!~');
});

app.post('/products', (req, res, next) => {
  console.log(req.body);
  res.end('Upload product info succeeded');
});

app.listen(8000, () => {
  console.log('普通中间件服务器启动成功');
});