const app = require("express")();
let count = 0;
require('dotenv').config();
// const Telegram = require('telegraf/telegram')
const Telegraf = require('telegraf');
const session = require('telegraf/session');

// let chats = new Set()
let bot = new Telegraf(process.env.BOT_TOKEN);
// let telegramApi = new Telegram(process.env.BOT_TOKEN)

const interval = process.env.WARNING_INTERVAL * 3600000;

bot.use(session())
bot.start((ctx) => {
  if (!ctx.session.warning && count++ < 1) {
    // chats.add(ctx.chat.id)
    ctx.reply('Se preparem para a coluna SUPREMA!');
    ctx.reply(`em ${interval / 60000} minutos eu boto pra quebrar!`);
    let intervalId = setInterval(() => {
      ctx.reply('POSTURA!');
    }, interval)
    ctx.session.warning = {
      chatId: ctx.chat.id,
      warningId: intervalId
    };
  }
})

bot.command('abort', (ctx) => {
  if (ctx.session.warning) {
    ctx.reply('mamae pq me abortastes 😥');
    clearInterval(ctx.session.warning.warningId);
  }
})

bot.command('arrumei', (ctx) => {
    ctx.reply(`Parabéns ${ctx.message.from.first_name} você arrumou sou postura, fale com o eDUARDO para acresentar mais funcoinalidades para a aplicação 🍰`);
})

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({message: "hello amigos"});
});

app.listen(PORT, () => {
  console.log(`Bot running! At the port ${PORT}`);
  bot.launch();
});