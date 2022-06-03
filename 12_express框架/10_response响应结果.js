const express = require('express');

const app = express();

app.get('/login', (req, res, next) => {
  console.log(req.query);
  // res.type('application/json')
  // res.end(JSON.stringify({name: 'lidan', password: 123}));
  // 设置响应码 204: no content
  res.status(204);
  // 设置内容
  res.json({name: 'lidan', age: 25, cup: 'A'});
});

app.listen(8000, () => {
  console.log('morgan日志服务器启动成功');
});