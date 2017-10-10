import Shopcart from '../models/shopcart'

export default class ShopcartController {
  async query(ctx) {
    const shopcart = await Shopcart.findAll({
      where: {
        openId: ctx.params.openId
      }
    })
    const result = {
      code: 200,
      success: true,
      result: {
        shopcart: shopcart
      }
    }
    ctx.body = result
  }
  async insert(ctx) {
    const reqBody = ctx.request.body

    const newShopcart = await Shopcart.upsert({
      productId: reqBody.productId,
      productAccount: reqBody.productAccount,
      openId: reqBody.openId
    })

    const result = {
      code: 200,
      success: true,
      result: {
        shopcart: newShopcart
      }
    }
    ctx.body = result
  }
}
