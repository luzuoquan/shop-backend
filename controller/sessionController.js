import Session from '../models/session'

export default class SessionController {
  async check(ctx) {
    const session = await Session.findOne({
      sessionId: ctx.sessionId
    })

    return session
  }
  async insert(ctx) {
    const insertResult = await Session.upsert({
      sessionId: ctx.sessionId,
      sessionKey: ctx.sessionKey,
      openId: ctx.openId
    })
    
    return insertResult
  }
}