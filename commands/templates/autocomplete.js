const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    type: "SlashCommand",
    data: new SlashCommandBuilder()
        .setName('autocomplete')
        .setDescription('Replies with an Autocomplete!')
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages)
        .addStringOption(option =>
            option.setName('query')
                .setDescription('Phrase to search for')
                .setAutocomplete(true)),

    async autocomplete(interaction) {
        const focusedValue = interaction.options.getFocused();
        const choices = [
            'Popular Topics: Threads', 'Sharding: Getting started', 'Library: Voice Connections',
            'Interactions: Replying to slash commands', 'Popular Topics: Embed preview'
        ];

        const filtered = choices.filter(choice => choice.startsWith(focusedValue));
        await interaction.respond(
            filtered.map(choice => ({ name: choice, value: choice }))
        );
    },

    async execute(interaction) {
        return interaction.reply({ content: "woah!" });
    }
};