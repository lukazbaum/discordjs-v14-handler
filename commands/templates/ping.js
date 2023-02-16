const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    type: "SlashCommand",
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with a localized Pong!')
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),

    async execute(interaction) {
        /* Localized response */
        /* Discord Language */
        const locales = {
            pl: 'Pang!',
            de: 'Pong!',
        };
        return interaction.reply(locales[interaction.locale] ?? 'Ping');
    },
};