const commando = require("discord.js-commando");

class PingMoonieCommand extends commando.Command
{

constructor(client)	
{
	super(client,{
		name: 'pingmoonie',
		group: 'pings',
		memberName: 'pingmoonie',
		description: 'Pings Moonie'
	});
}

async run(message, args)
{
		message.channel.send("<@210271904983023616>");
}

}

module.exports = PingMoonieCommand;
