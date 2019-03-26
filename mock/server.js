var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();


router.get('/',(ctx,next)=>{
  ctx.body = 'hello koa!'
})

//加前缀
router.prefix('/api');

// 模拟json数据
var user = require('./data/list.js');
router.get('/list',(ctx,next)=>{
  console.log(user)
  ctx.response.body = user
})

router.get('/404', async (ctx, next) => {
  ctx.response.body = '<h1>404 Not Found</h1>'
})

// 开始服务并生成路由
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(4000, ()=>{
  console.log('server is running at http://localhost:4000')
})
