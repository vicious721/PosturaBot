class Job {
  constructor (ctx) {
    this.ctx = ctx
  }

  definePostureAlert (interval) {
    return setInterval(async () => {
      this.ctx.reply('POSTURA!')
    }, interval)
  }
}

const instance = null

module.exports = {
  /**
   *
   * @returns {Job}
   */
  getInstance (ctx) {
    if (instance === null) {
      return new Job(ctx)
    }
    return instance
  }
}
