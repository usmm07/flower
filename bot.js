require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Добро пожаловать в Flower Boutique!', {
    reply_markup: {
      keyboard: [[{ text: 'Открыть магазин', web_app: { url: 'https://flower-boutique.vercel.app/' } }]],
      resize_keyboard: true
    }
  });
});

bot.on('web_app_data', (msg) => {
  const data = JSON.parse(msg.web_app_data.data);
  bot.sendMessage(msg.chat.id, `🌸 Вы выбрали букет: ${data.name} за ${data.price} сум.\nСпасибо за заказ!`);
});
