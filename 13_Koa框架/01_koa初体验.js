const Koa = require('koa');

const app = new Koa();

// abbr. of context => ctx
app.use((ctx, next) => {
  console.log('中间件被执行');
  ctx.response.body = 'hello koa';
});

app.listen(8000, () => {
  console.log('Koa初体验服务器启动成功');
});