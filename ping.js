const Discord = require('discord.js')

module.exports = {
    name: "ping",
    aliases: [],
    desc: "Ver ping del bot",

    run: async (client, message, args, prefix, cmd) => {

        let pingBot = Date.now() - message.createdTimestamp;
        const embed = new Discord.MessageEmbed()
        .setTitle(`Pong! 🏓`)
        .setColor('BLURPLE')
        .addFields({name: 'Latencia del Bot <:WiFi_Maintenance:995402526327328828> ', value: `${pingBot}ms`}, {name: 'Latencia API', value: `${client.ws.ping}ms`})
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        return message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });
    }
};