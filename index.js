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
});

client.on('message', (message) => {
  if(message.content === '김정은') {
    message.channel.send('돼지쉑');
  }
});

client.on('message', (message) => {
  if(message.content === '!블픽') {
    message.channel.send('https://www.youtube.com/channel/UC20D6TQnGxeMxfdx50Ss4-A');
  }
});

client.on('message', (message) => {
  if(message.content === '!누텔라') {
    message.channel.send('https://www.youtube.com/channel/UCrxaG_2J0-cO4FYJsqousug? : 본계\nhttps://www.youtube.com/channel/UC3NobfBM8juUVytevO2NjIw? : 마인크래프트 채널\nhttps://www.youtube.com/channel/UCq26FktMJWSHH8Jpgvt1D7A? : 부계');
  }
});
client.login(token);