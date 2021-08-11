const Discord = require('discord.js');
const client = new Discord.Client(); 

client.on('ready', () => { 
  console.log(`헤헤헤`); 
});

client.on('message', msg => { 
  if(msg.content.substring(0,3) === "!투표") {
		const description = msg.content.substring(3);


		const embedr = new Discord.MessageEmbed()
		.setTitle("투표ㄱㄱ")
		.setDescription(description)
		.setTimestamp(new Date().setDate(5))
		.setColor("WHITE");

		msg.channel.send(embedr)
		.then((msg) => {
			msg.react("👍")
			msg.react("👎")
		});
	}})

client.login('ODcxMjMzNTk3OTU5NDM4MzU5.YQYVhA.lfYK7pzLcAMY3bXLAit4_6AhMfA'); 