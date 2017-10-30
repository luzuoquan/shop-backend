import UserInfo from '../models/userInfo'
import User from '../models/user'

export default class UserInfoController {
  async query(ctx) {
    let insertResult
    const user = await User.findOne({
      where: {
        uuid: ctx.params.uuid
      }
    })

    if (user) {
      insertResult = await UserInfo.findAll({
        where: {
          openId: user.get('openId')
        }
      })
    } else {
      insertResult = null
    }

    const result = {
      code: 200,
      success: true,
      result: {
        userInfo: insertResult
      }
    }
    ctx.body = result
  }
  async insertAddress(ctx) {
    const reqBody = ctx.request.body
    let insertResult
    const user = await User.findOne({
      where: {
        uuid: reqBody.uuid
      }
    })

    if (user) {
      insertResult = await UserInfo.upsert({
        openId: user.get('openId'),
        address: reqBody.address
      })
    } else {
      insertResult = false
    }

    const result = {
      code: 200,
      success: insertResult,
      result: null
    }
    ctx.body = result
  }
}