const express = require('express');
const userRouter = require('./routers/users');

const app = express();

app.use('/users', userRouter);

app.listen(8000, () => {
  console.log('路由服务器启动成功');
});