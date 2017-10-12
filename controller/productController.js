import Product from '../models/product'

export default class ProductController {
  async query(ctx) {
    const product = await Product.findAll()

    const result = {
      code: 200,
      success: true,
      result: {
        product: product
      }
    }

    ctx.body = result
  }
  async bannerQuery(ctx) {
    const product = await Product.findAll({
      limit: 5
    })

    const result = {
      code: 200,
      success: true,
      result: {
        product: product
      }
    }

    ctx.body = result
  }
}