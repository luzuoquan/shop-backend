import Router from 'koa-router'
import { baseApi } from '../config'
import UserController from '../controller/userController'
import ShopcartController from '../controller/shopcartController'

const userController = new UserController()
const shopcartController = new ShopcartController()

const router = new Router({prefix: `/${baseApi}`})

router.get('/login/:code', userController.wxLogin, userController.upsert)

router.get('/shopcart/:openId', shopcartController.query)

router.post('/shopcart/insert', shopcartController.insert)

export default router