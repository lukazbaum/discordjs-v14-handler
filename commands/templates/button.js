const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('Replies with a Button!')
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),

    async execute(interaction) {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('primary')
                    .setLabel('Click me!')
                    .setStyle(ButtonStyle.Primary),

                new ButtonBuilder()
                    .setCustomId('secondary')
                    .setLabel('Click me!')
                    .setStyle(ButtonStyle.Secondary),

                new ButtonBuilder()
                    .setCustomId('success')
                    .setLabel('Click me!')
                    .setStyle(ButtonStyle.Success)
                    .setDisabled(true),

                new ButtonBuilder()
                    .setCustomId('danger')
                    .setLabel('Click me!')
                    .setStyle(ButtonStyle.Danger)
                    .setEmoji("😱"),

                new ButtonBuilder()
                    .setLabel('Click me!')
                    .setURL("https://youtube.com")
                    .setStyle(ButtonStyle.Link),
            );
        return interaction.reply({ content: 'I think you should,', components: [row] });
    },
};