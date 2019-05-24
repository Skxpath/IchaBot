//const Discord = require("discord.js");
const Commando = require("discord.js-commando");
const bot = new Commando.Client({
  commandPrefix: 'ken',
  owner: '203772860391620609',
});

const fs = require("fs");
const config = JSON.parse(fs.readFileSync("./configuration/config.json", "utf8"));

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('pings', 'Pings');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(config.token);

bot.on("ready", function() {
  console.log(`Ready as: ${bot.user.tag}`)
})

bot.on("message", function(message) {

if (message.content == "ken") {
  message.channel.send("I'm ken");
}

if (message.content == "ken is smart") {
  message.channel.send("no");
}

if (message.content == "lukey") {
  message.channel.send("Hey Fehgut");
}


})
/*
var command = msg.content.split(" ")[0].slice(config.prefix.length).toLowerCase()
var args = msg.content.split(" ").slice(1);

console.log(command)
console.log(args)

if(msg.author.bot) {
  return;
}

const ken = "ken";



  if(command == "ping") {
    msg.channel.send(`Pinging...`).then(function(m) {
      m.edit(`Pong! Took ${m.createdTimestamp - msg.createdTimestamp}ms`)
    })
  }

  if(command == "ken") {
    msg.channel.send(`My name is Ken Jong Un, and I too am a homosexual.`)
  }

    console.log(`[${msg.createdAt}] by ${msg.author.tag} on ${msg.guild} in #${msg.channel.name}: ${msg.content}`)
*/

