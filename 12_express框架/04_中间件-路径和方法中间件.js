const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('common middleware 01');
  next();
});

app.get('/home', (req, res, next) => {
  console.log('home path and method middleware 01');
});

app.post('/login', (req, res, next) => {
  console.log('login path and method middleware 01');
});

app.listen(8000, () => {
  console.log('普通中间件服务器启动成功');
});