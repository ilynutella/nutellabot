const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '블바') {
    message.channel.send('픽보');
  }
});

client.on('message', (message) => {
  if(message.content === '누멍텔') {
    message.channel.send('청라이');
  }
});
client.login(token);