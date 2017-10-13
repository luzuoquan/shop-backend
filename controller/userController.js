import User from '../models/user'
import fetch from 'node-fetch'
import uuidV4 from 'uuid/v4'
import { appid, secret, wxApiUrl} from '../config'

export default class UserController {
  async upsert(ctx) {
    const clientUuid = uuidV4()
    const userinfo = await User.upsert({
      openId: ctx.openId,
      sessionKey: ctx.sessionKey,
      uuid: uuidV4()
    })
    const result = {
      code: 200,
      success: userinfo,
      result: {
        uuid: clientUuid
      }
    }
    ctx.body = result
  }
  async wxLogin(ctx, next) {
    const wxRes = await fetch(`${wxApiUrl}/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${ctx.params.code}&grant_type=authorization_code`)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res.json()
        }
      })
    ctx.openId = wxRes['openid']
    ctx.sessionKey = wxRes['session_key']
    await next()
  }
  async test(ctx) {
    console.info(ctx.openId)
  }
}