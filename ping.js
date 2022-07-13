const Discord = require('discord.js') //npm i Discord.js
//SI NECESITAS AYUDA MANDAME UN MENSAJE A MI DISCORD: xSteven#0001
module.exports = {
    name: "ping", //nombre del comando
    aliases: [], //alias del comando (por si lo quieren ejecutar 2 veces
    desc: "Ver ping del bot", //descripción del comando

    run: async (client, message, args, prefix, cmd) => {

        let pingBot = Date.now() - message.createdTimestamp;
        const embed = new Discord.MessageEmbed() //Creamos embed
        .setTitle(`Pong! 🏓`)
        .setColor('BLURPLE')
        .addFields({name: 'Latencia del Bot <:WiFi_Maintenance:995402526327328828> ', value: `${pingBot}ms`}, {name: 'Latencia API', value: `${client.ws.ping}ms`})
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        return message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } }); //enviamos embed y quitamos la mencion
    }
};
