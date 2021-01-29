const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setThumbnail('https://cdn.discordapp.com/attachments/788128103536918529/792022244598874112/ALOUESBOT.jpg')
.setColor("RANDOM")
.setTitle(`Aloues Guard`)
.setURL('https://discord.com/oauth2/authorize?client_id=792091393044512780&scope=bot&permissions=2080931007')
.setDescription(`


             :white_small_square: **=**  \`a-botbilgi\` 
             :white_small_square: **=**  \`a-antiraid aç\`  
             :white_small_square: **=**  \`a-capsengel aç\`  
             :white_small_square: **=**  \`a-emojikoruma aç\` 
             :white_small_square: **=**  \`a-everengel aç\`  
             :white_small_square: **=**  \`a-kanalkoruma aç\`  
             :white_small_square: **=**  \`a-küfürengel aç\`  
             :white_small_square: **=**  \`a-modlog #kanal\`  
             :white_small_square: **=**  \`a-reklamengel aç\` 
             :white_small_square: **=**  \`a-rolkoruma aç\`  
             :white_small_square: **=**  \`a-sohbet-aç\`  
             :white_small_square: **=**  \`a-sohbet-kapat\`  
             :white_small_square: **=**  \`a-sil-üye miktar\` 
             :white_small_square: **=**  \`a-sil miktar\`  
             :white_small_square: **=**  \`a-yavaşmod süre\`
             :white_small_square: **=**  \`a-ban @üye sebep\`
             :white_small_square: **=**  \`a-unban @üye sebep\`
             :white_small_square: **=**  \`a-kick @üye sebep\`
             :white_small_square: **=**  \`a-bansay\`
             :white_small_square: **=**  \`a-afk\`
             


`)
      .setFooter(
      "AlouesCode Tarafından Geliştirilmiştir.",
      client.user.avatarURL()




  
   
  
 )
    
  

  return message.channel.send(yardım);
};




  
   
  


exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};