require('dotenv').config()
const Telegram = require('telegraf/telegram')
const Telegraf = require('telegraf')
const session = require('telegraf/session')

let chats = new Set()
let bot = new Telegraf(process.env.BOT_TOKEN)
let telegramApi = new Telegram(process.env.BOT_TOKEN)

bot.use(session())
bot.start((ctx) => {
  if (!chats.has(ctx.chat.id)) {
    chats.add(ctx.chat.id)
    ctx.reply('Se preparem para a coluna SUPREMA!')
    ctx.reply(`em ${process.env.WARNING_INTERVAL / 60000} minutos eu boto pra quebrar!`)
  }
})
bot.command('abort', (ctx) => {
  if (chats.has(ctx.chat.id)) {
    ctx.reply('mamae pq me abortastes 😥')
    chats.delete(ctx.chat.id)
  }
})
bot.command('arrumei', (ctx) => {

})
bot.launch()

setInterval(async () => {
  chats.forEach(chatId => {
    telegramApi.sendMessage(chatId, 'POSTURA!')
  })
}, process.env.WARNING_INTERVAL)
