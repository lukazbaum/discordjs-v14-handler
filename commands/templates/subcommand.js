const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('subcommand')
        .setDescription('Replies with a Subcommand!')
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages)
        .addSubcommand(subcommand =>
            subcommand
                .setName('one')
                .setDescription('Subcommand One'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('two')
                .setDescription('Subcommand Two')),

    async execute(interaction) {
        return interaction.reply(`${interaction.options.getSubcommand()}`);
    },
};