const Discord = require("discord.js");
const bot = new Discord.Client();

const prefix = "`";

const userToken = "MzY0MjE2MTIyNDgxODM2MDMy.DLMiQw.EMmJ2TxID3xw9-VcqgrzQnWoPhw";

bot.login(userToken);

bot.on("ready", function(){
  console.log(`Ready as: ${bot.user.tag}`)
})

bot.on("message", function(msg){

  if(msg.content == prefix + "ping") {
    msg.channel.send("Ping command used!");
  }

  console.log(`[${msg.createdAt}] by ${msg.author.tag} on ${msg.guild} in #${msg.channel.name}: ${msg.content}`)
})
