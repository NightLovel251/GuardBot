const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Beni Sunucuna Ekle ❤️")
  .setDescription("[__**Davet Et**__]( https://discord.com/oauth2/authorize?client_id=792091393044512780&scope=bot&permissions=2080931007) \n [__**Destek Sunucusu**__](https://discord.gg/xCRMtC2NuY)")
  .setFooter('AlouesCode Tarafından Geliştirilmiştir.', client.user.avatarURL())
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: ''
};