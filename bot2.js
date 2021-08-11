const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`헤헤헤`);
});

client.on('message', msg => {
  if (msg.content === '!액션') {
    msg.reply('무야호~');
  }
});
client.on('message', msg => {
  if (msg.content === '!뼈다귀') {
    msg.reply('와! 샌즈!');
  }
});
client.on('message', msg => {
  if (msg.content === '!제로투') {
    msg.reply('안보이지만 추는 중입니다!');
  }
});
client.on('message', msg => {
  if (msg.content === '!포브스') {
    msg.reply('포브스 선정 멋있는 봇 1위!');
  }
});
client.on('message', msg => {
  if (msg.content === '!슉') {
    msg.reply('슉 슈슉 슈슈슉 슉 슈슉!');
  }
});
client.on('message', msg => {
  if (msg.content === '!멈춰') {
    msg.reply('멈춰!');
  }
});
client.on('message', msg => {
  if (msg.content === '!찬구') {
    msg.reply('크크루삥뽕');
  }
});
client.on('message', msg => {
  if (msg.content === '!빅맥') {
    msg.reply('참깨빵 위에 순쇠고기 패티 두장~');
  }
});
client.on('message', msg => {
  if (msg.content === '!오마에와') {
    msg.reply('모 신데이루~');
  }
});

client.login('ODc0NjE1NTI2OTkzODQyMjA3.YRJjLw.YMnp0C8g5KMkGm-u_XJkC387pgY');