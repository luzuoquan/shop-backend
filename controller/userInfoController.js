import UserInfo from '../models/userInfo'
import User from '../models/user'

export default class UserInfoController {
  async query(ctx) {
    const user = await User.findOne({
      where: {
        uuid: ctx.params.uuid
      }
    })
    const userInfo = await UserInfo.findAll({
      where: {
        openId: user.get('openId')
      }
    })
    const result = {
      code: 200,
      success: true,
      result: {
        userInfo: userInfo
      }
    }
    ctx.body = result
  }
  async insert(ctx) {

  }
}