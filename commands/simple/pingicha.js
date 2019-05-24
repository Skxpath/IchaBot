const commando = require("discord.js-commando");

class PingIchaCommand extends commando.Command
{

constructor(client)	
{
	super(client,{
		name: 'pingicha',
		group: 'pings',
		memberName: 'pingicha',
		description: 'Pings Icha'
	});
}

async run(message, args)
{
		message.channel.send("<@203772860391620609>");
}

}

module.exports = PingIchaCommand;
