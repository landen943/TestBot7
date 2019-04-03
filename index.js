const Discord = require('discord.js');
const { prefix, token } = require(./config.json);
const client = new Discord.Client();

client.once('ready', () => {
  console.log('lift off');
  });
client.on('message', message => {
    if (message.content.startsWith(`${prefix}hello`)) {
      message.channel.send('nothing much how about you?');
  } else if (message.content.startsWith(`${prefix}cool)) {
       message.channel.send(`yo im hungry wanna go grab some lunch ${message.author}?`)
  }
});
client.login(token);
