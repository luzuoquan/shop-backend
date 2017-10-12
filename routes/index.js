import Router from 'koa-router'
import { baseApi } from '../config'
import UserController from '../controller/userController'
import ShopcartController from '../controller/shopcartController'
import ProductController from '../controller/productController'
import OrderController from '../controller/orderController'

const userController = new UserController()
const shopcartController = new ShopcartController()
const productController = new ProductController()
const orderController = new OrderController()

const router = new Router({prefix: `/${baseApi}`})

router.get('/login/:code', userController.wxLogin, userController.upsert)

router.get('/shopcart/:openId', shopcartController.query)

router.post('/shopcart/insert', shopcartController.insert)

router.get('/product', productController.query)

router.get('/product/banner', productController.bannerQuery)

router.get('/order', orderController.query)

router.post('/order/insert', orderController.insert)

export default router