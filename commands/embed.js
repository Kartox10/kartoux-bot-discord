const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('')
            .setTitle('')
            .setDescription('T\'es un mec ou une meuf ? ')
            .setColor('RANDOM')
            .setAuthor('Sexe')
            .setImage('https://cdn.discordapp.com/attachments/828014907349794877/828278132641497128/b57e7de89ed1ce97492856cef44d66e43631b741_hq.png'))
    },
    name: 'embed'
}