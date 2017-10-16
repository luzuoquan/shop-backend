import Shopcart from '../models/shopcart'
import User from '../models/user'
import Product from '../models/product'

Shopcart.belongsTo(Product, {foreignKey: 'productId'})

export default class ShopcartController {
  async query(ctx) {
    const user = await User.findOne({
      where: {
        uuid: ctx.params.uuid
      }
    })
    const shopcart = await Shopcart.findAll({
      where: {
        openId: user.get('openId')
      },
      attributes: {
        exclude: 'openId'
      },
      include: [{
        model: Product
      }]
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
    const user = await User.findOne({
      where: {
        uuid: reqBody.uuid
      }
    })
    const newShopcart = await Shopcart.upsert({
      productId: reqBody.productId,
      productAccount: reqBody.productAccount,
      openId: user.get('openId'),
      thumbnails: reqBody.thumbnails
    })

    const result = {
      code: 200,
      success: newShopcart,
      result: null
    }
    ctx.body = result
  }
}
