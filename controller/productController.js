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
  async insert(ctx) {
    const reqBody = ctx.request.body

    const insertResult = await Product.upsert({
      productId: reqBody.productId,
      productName: reqBody.productName,
      price: reqBody.price,
      distribution: reqBody.distribution,
      inventory: reqBody.inventory,
      imageUrl: reqBody.imageUrl
    })
    
    const result = {
      code: 200,
      success: insertResult,
      result: null
    }

    ctx.body = result
  }
  async queryOne(ctx) {
    const product = await Product.findOne({
      productId: ctx.params.productId
    })

    const result = {
      code: 200,
      success: 'success',
      result: product
    }

    ctx.body = result
  }
}