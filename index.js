const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('Online.');
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

client.on('message', (message) => {
  if(message.content === '세바') {
    message.channel.send('렌보');
  }
});

client.on('message', (message) => {
  if(message.content === '마바') {
    message.channel.send('다보');
  }

client.on('message', (message) => {
  if(message.content === '김정은') {
    message.channel.send('돼지쉑');

});
client.login(token);