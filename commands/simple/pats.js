const commando = require("discord.js-commando");

class PatsCommand extends commando.Command
{

constructor(client)	
{
	super(client,{
		name: 'pats',
		group: 'simple',
		memberName: 'pats',
		description: 'Pats @Somebody'
	});
}

async run(message, args)
{
		message.channel.send("*pats* " + args);
}

}

module.exports = PatsCommand;
