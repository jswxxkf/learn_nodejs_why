const Koa = require('koa');
const axios = require('axios');

const app = new Koa();

const middleware1 = async (ctx, next) => {
  ctx.request.message = 'aaa'
  await next();
  ctx.response.body = ctx.request.message;
}

const middleware2 = async (ctx, next) => {
  ctx.request.message += 'bbb';
  await next();
}

const middleware3 = async (ctx, next) => {
  const result = await axios.get('http://123.207.32.32:9001/lyric?id=167876');
  ctx.request.message += result.data.lrc.lyric;
}

app.use(middleware1);
app.use(middleware2);
app.use(middleware3);

app.listen(8000, () => {
  console.log('服务器开启成功');
});