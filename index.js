// eslint-disable-next-line no-undef
const TelegramApi = require('node-telegram-bot-api');
const { stickers, gameOptions, againOption, comands } = require('./options');
const bots_token = '7513104019:AAFPsoNN4HZJEsNubZlQkUL8rGFXLVOMD1s';
const chats = {};
const startGame = async (chatId) => {
  const randomCount = Math.floor(Math.random() * 10);
  chats[chatId] = randomCount;
  await telegram_bot.sendMessage(chatId, 'Choisy any number', gameOptions);
};

const telegram_bot = new TelegramApi(bots_token, { polling: true });
const start = () => {
  telegram_bot.setMyCommands(comands);
  telegram_bot.on('message', async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    if (text === '/start') {
      await telegram_bot.sendMessage(chatId, 'Welcom to our chat!');
      return telegram_bot.sendAnimation(chatId, stickers.start);
    }
    if (text === '/info') {
      await telegram_bot.sendMessage(
        msg.chat.id,
        `Your name is ${msg.chat.first_name} `
      );
      await telegram_bot.sendMessage(
        msg.chat.id,
        `Your login is ${msg.chat.username} `
      );
      return telegram_bot.sendAnimation(chatId, stickers.info);
    }
    if (text === '/game') {
      startGame(chatId);
      telegram_bot.on('callback_query', async (msg) => {
        console.log(msg);

        if (msg.data == '/again') return startGame(chatId);
        if (chats[chatId] == msg.data) {
          await telegram_bot.sendAnimation(chatId, stickers.win);
          return telegram_bot.sendMessage(chatId, 'You wan!', againOption);
        } else {
          await telegram_bot.sendAnimation(chatId, stickers.lose);
          return telegram_bot.sendMessage(chatId, 'You losed!', againOption);
        }
      });
      return;
    }
    telegram_bot.sendMessage(chatId, 'I did not understood you');
  });
};
start();
