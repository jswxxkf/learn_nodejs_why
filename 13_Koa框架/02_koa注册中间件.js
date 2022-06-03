const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  if (ctx.request.url === '/login') {
    if (ctx.request.method === 'GET') {
      ctx.response.body = 'other requests';
    }
  } else {
    ctx.response.body = 'other requests.';
  }
});

app.listen(8000, () => {
  console.log('koa服务器启动成功');
});