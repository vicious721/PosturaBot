module.exports = {
  defineCommands (bot) {
    bot.command('abort', (ctx) => {
      if (ctx.session.warning) {
        ctx.reply('Mamae pq me abortastes 😥')
        clearInterval(ctx.session.warning.warningId)
      } else {
        ctx.reply('Me bote para quebrar antes de tentar me abortar!')
      }
    })

    bot.command('arrumei', (ctx) => {

    })
  }
}
