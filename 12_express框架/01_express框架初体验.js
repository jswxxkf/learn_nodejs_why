const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.end('hello express');
});

app.post('/', (req, res, next) => {
  res.end('hello post express');
});

app.post('/login', (req, res, next) => {
  res.end('Welcome back!');
});

app.listen(8000, () => {
  console.log('express初体验服务器启动成功');
});