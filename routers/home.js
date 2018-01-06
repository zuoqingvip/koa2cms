const router = require('koa-router')()

const HomeIndexController = require('../controller/home/index')
 module.exports = (app) => {
    router.get( '/', HomeIndexController.index )
    app.use(router.routes())
      .use(router.allowedMethods())
  }
