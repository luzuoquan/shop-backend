import Router from 'koa-router'
import { baseApi } from '../config'
import UserController from '../controller/userController'
import ShopcartController from '../controller/shopcartController'
import ProductController from '../controller/productController'
import OrderController from '../controller/orderController'
import UserInfoController from '../controller/userInfoController'

const userController = new UserController()
const shopcartController = new ShopcartController()
const productController = new ProductController()
const orderController = new OrderController()
const userInfoController = new UserInfoController()

const router = new Router({prefix: `/${baseApi}`})

router.get('/login/:code', userController.wxLogin, userController.upsert)

router.get('/shopcart/:uuid', shopcartController.query)

router.post('/shopcart', shopcartController.insert)

router.get('/product', productController.query)

router.get('/product/:productId', productController.queryOne)

router.get('/product/banner', productController.bannerQuery)

router.get('/order', orderController.query)

router.post('/order', orderController.insert)

router.post('/product', productController.insert)

router.get('/userInfo/address/:uuid', userInfoController.query)

router.put('/userInfo/address', userInfoController.insertAddress)

router.get('/test', orderController.prePay)

export default router