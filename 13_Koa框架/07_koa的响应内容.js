const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  // 响应体内容可以是 Null、Object、Array、String、Buffer、Stream
  // ctx.status = 400;
  ctx.response.body = {
    name: 'lidan',
    cup: 'A',
    age: 23
  }
});

app.listen(8000, () => {
  console.log('koa服务器启动成功');
});
