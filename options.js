// eslint-disable-next-line no-undef
module.exports = {
  gameOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: '1', callback_data: '1' },
          { text: '2', callback_data: '2' },
          { text: '3', callback_data: '3' }
        ],

        [
          { text: '4', callback_data: '4' },
          { text: '5', callback_data: '5' },
          { text: '6', callback_data: '6' }
        ],
        [
          { text: '7', callback_data: '7' },
          { text: '8', callback_data: '8' },
          { text: '9', callback_data: '9' }
        ],
        [{ text: '0', callback_data: '0' }]
      ]
    })
  },
  againOption: {
    reply_markup: JSON.stringify({
      inline_keyboard: [[{ text: 'One more time', callback_data: '/again' }]]
    })
  },
  comands: [
    { command: '/start', description: 'Will start to work' },
    { command: '/info', description: 'Will show info' },
    { command: '/game', description: 'Will play the game' }
  ],
  stickers: {
    start:
      'https://tlgrm.ru/_/stickers/b0d/85f/b0d85fbf-de1b-4aaf-836c-1cddaa16e002/1.webp',
    info: 'https://tlgrm.ru/_/stickers/711/2ce/7112ce51-3cc1-42ca-8de7-62e7525dc332/2.webp',
    game: 'https://tlgrm.ru/_/stickers/711/2ce/7112ce51-3cc1-42ca-8de7-62e7525dc332/6.webp',
    lose: 'https://tlgrm.ru/_/stickers/711/2ce/7112ce51-3cc1-42ca-8de7-62e7525dc332/192/33.webp',
    win: 'https://tlgrm.ru/_/stickers/711/2ce/7112ce51-3cc1-42ca-8de7-62e7525dc332/192/19.webp'
  }
};
