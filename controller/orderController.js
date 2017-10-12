import Order from '../models/order'

export default class OrderController {
  async query(ctx) {
    const orders = await Order.findAll()

    const result = {
      code: 200,
      success: true,
      result: {
        shopcart: orders
      }
    }
    ctx.body = result
  }
  async insert(ctx) {
    const reqBody = ctx.request.body

    const insertResult = await Order.upsert({
      orderId: reqBody.orderId,
      orderName: reqBody.orderName,
      orderMoney: reqBody.orderMoney,
      orderTime: reqBody.orderTime,
      openId: reqBody.openId,
      productIds: reqBody.productIds
    })

    const result = {
      code: 200,
      success: insertResult,
      result: null
    }
    ctx.body = result

  }
}