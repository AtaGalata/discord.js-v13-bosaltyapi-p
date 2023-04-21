const Discord = require('discord.js')
 
exports.run = async (client ,message, args) =>{
  
  const Crewembed = new Discord.MessageEmbed()
    .setTitle("Pingim!")
    .setColor("BLACK")
    .setDescription(`${client.ws.ping} ms`)
  message.channel.send({embeds:[Crewembed]})
};
exports.conf = {
    aliases: [],
    komut: "ping"
};