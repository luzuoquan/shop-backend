import Router from 'koa-router';
import { baseApi } from '../config';
import UserController from '../controller/userController';

const userController = new UserController();

const router = new Router({prefix: `/${baseApi}`});

router.get('/login/:code', userController.wxLogin, userController.upsert);

export default router;