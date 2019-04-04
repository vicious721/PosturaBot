require("dotenv").config()
const Telegram = require("telegraf/telegram")
const Telegraf = require("telegraf")
let chats = []
bot = new Telegraf(process.env.BOT_TOKEN)
telegram_api = new Telegram(process.env.BOT_TOKEN)

bot.start((ctx)=> {
  if (!chats.includes(ctx.chat.id)) {
    chats.push(ctx.chat.id)
    ctx.reply("Se preparem para a coluna SUPREMA!")
    ctx.reply("POSTURA!")
  } 
})
bot.command("abort",(ctx) => {
  if(chats.length > 0){
    chats = chats.filter((id) => id != ctx.chat.id)
    ctx.reply("mamae pq me abortastes 😥")
}
})
bot.launch()

setInterval(async () => {
  chats.forEach(chat_id => {
    telegram_api.sendMessage(chat_id, "POSTURA!")   
  });
}, process.env.WARNING_INTERVAL);