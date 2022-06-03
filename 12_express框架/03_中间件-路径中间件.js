const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('common middleware 01');
  next();
});

// 路径匹配的中间件
app.use('/home', (req, res, next) => {
  console.log('home middleware 01');
  next();
});

app.use((req, res, next) => {
  console.log('common middleware 02');
  next();
});

app.use('/home', (req, res, next) => {
  console.log('home middleware 02');
});

app.use('/home', (req, res, next) => {
  console.log('home middleware 03');
});

app.listen(8000, () => {
  console.log('普通中间件服务器启动成功');
});