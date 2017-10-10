import Shopcart from '../models/shopcart'
import { wxApiUrl } from '../config'

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
}
