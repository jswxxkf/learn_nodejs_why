const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const multer = require('koa-multer');

const app = new Koa();
const upload = multer({});

// 解析json以及x-www-form-urlencoded
app.use(bodyParser());
// 解析form-data
app.use(upload.any());

app.use((ctx, next) => {
  console.log(ctx.req.body);
  ctx.response.body = 'hello koa';
});

app.listen(8000, () => {
  console.log('koa服务器启动成功');
});