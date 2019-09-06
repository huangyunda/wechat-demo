const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const wechat = require('co-wechat');

const routes = require('./router');
const { wechatConfig } = require('./config');
const handleMessage = require('./handleMessage');

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(wechat(wechatConfig).middleware(handleMessage));

app.on('error', err => {
  console.log('server error', err)
});

routes.forEach(({ method, fn, path }) => router[method](path, fn));

app.listen(2333);