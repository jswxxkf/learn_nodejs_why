const Koa = require('koa');
const koaStatic = require('koa-static');

const app = new Koa();

// 静态资源可以用于临时建立维护页
app.use(koaStatic('./build'));

app.listen(8000, () => {
  console.log('koa服务器启动成功');
});
