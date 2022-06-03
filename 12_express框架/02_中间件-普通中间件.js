const express = require('express');

const app = express();

// 编写普通的中间件
// use方式注册一个中间件
app.use((req, res, next) => {
  console.log('注册了第01个普通的中间件');
  next();
});

app.use((req, res, next) => {
  console.log('注册了第02个普通的中间件');
  next()
});

app.use((req, res, next) => {
  console.log('注册了第03个普通的中间件');
  res.end('hello express middleware');
});

app.listen(8000, () => {
  console.log('普通中间件服务器启动成功');
});