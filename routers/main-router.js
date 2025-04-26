const mainRouter = require('express').Router();
const authRouter = require('./public/auth-router');
const userRouter = require('./protected/user-router');
const permissionRouter = require('./protected/permission-router');

mainRouter.use(authRouter);
mainRouter.use(userRouter);
mainRouter.use(permissionRouter);

module.exports = mainRouter;