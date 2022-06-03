const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const userRouter = new Router({prefix: '/users'});

userRouter.get('/:id', (ctx, next) => {
  console.log(ctx.request.params);
  console.log(ctx.request.query);
  ctx.response.body = 'hello koa-router';
});

app.use(userRouter.routes());

app.listen(8000, () => {
  console.log('koa服务器启动成功');
});