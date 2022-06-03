const express = require('express');

const app = express();

const USERNAME_DOSE_NOT_EXIST = 'username dose not exist';
const USERNAME_ALREADY_EXISTS = 'username already exists';

app.post('/login', (req, res, next) => {
  // 加入数据库中查询用户名时，发现不存在
  const isLogin = false;
  if (isLogin) {
    res.json('user login succeeded');
  } else {
    next(new Error(USERNAME_DOSE_NOT_EXIST));
  }
});

app.post('/register', (req, res, next) => {
  const isExists = false;
  if (isExists) {
    res.json('user register succeeded');
  } else {
    next(new Error(USERNAME_ALREADY_EXISTS));
  }
});

app.use((err, req, res, next) => {
  let status = 400;
  let message = '';
  switch (err.message) {
    case USERNAME_DOSE_NOT_EXIST:
      message = 'username dose not exist';
      break;
    case USERNAME_ALREADY_EXISTS:
      message = 'username already exists';
      break;
    default:
      message = 'not found';
  }
  res.status(status);
  res.json({
    errCode: status,
    errMessage: message
  });
});

app.listen(8000, () => {
  console.log('路由服务器启动成功');
});