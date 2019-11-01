class Session {
  constructor (ctx) {
    this.chats = []
    this.ctx = ctx
  }

  setWarning (intervalId) {
    this.ctx.session.warning = {
      chatId: this.ctx.chat.id,
      warningId: intervalId
    }
  }
}

let instance = null

module.exports = {
  /**
   *
   * @returns {Session}
   */
  getInstance (ctx) {
    if (instance === null) {
      return new Session(ctx)
    }
    return instance
  }
}
