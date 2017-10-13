import Order from '../models/order'
import fetch from 'node-fetch'
import uuidV4 from 'uuid/v4'
import moment from 'moment'
import md5 from 'md5'
import { appid, wxPrePay, mchId } from '../config'

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
  async prePay(ctx) {
    const reqBody = ctx.request.body
    const params = {
      'appid': appid,
      'mch_id': mchId,
      'device_info': 'WEB',
      'nonce_str': uuidV4(),
      'sign_type': 'MD5',
      'body': reqBody.orderName,
      'attach': reqBody.orderName,
      'out_trade_no': moment().format('YYYYMMDDHHmmss'),
      'fee_type': 'CNY',
      'total_fee': reqBody.money,
      'spbill_create_ip': reqBody.ip,
      'time_start': moment(new Date(reqBody.startTime)).format('YYYYMMDDHHmmss'),
      'time_expire': moment(new Date(reqBody.expireTime)).format('YYYYMMDDHHmmss'),
      'notify_url': 'localhost:3001/api/order/callback',
      'trade_type': 'JSAPI',
      'limit_pay': 'no_credit',
      'openid': reqBody.openId
    }

    const postParams = Object.keys(params).sort().map(item => item + '=' + params[item]).join('&')

    ctx.body = Object.assign({}, params, {
      'sign': md5(postParams)
    }) // sign value

    // todo: 

    // const prePay = await fetch(`${wxPrePay}?appid=${appid}`)
    //   .then(res => {
    //     if (res.status >= 200 && res.status < 300) {
    //       return res.json()
    //     }
    //   })

  }

  async test(ctx) {
    ctx.body = moment(new Date(1507886552639)).format('YYYYMMDDHHmmss')
    console.info(new Date())
  }
}