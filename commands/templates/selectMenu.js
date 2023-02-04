const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, PermissionFlagsBits} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('selectmenu')
        .setDescription('Replies with a Select Menu!')
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),

    async execute(interaction) {
        const row = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId("select")
                    .setPlaceholder("Nothing selected")
                    .setMinValues(2)
                    .setMaxValues(3)
                    .addOptions(
                        {
                            label: "Select me",
                            description: "This is a description",
                            value: "first_option",
                        },
                        {
                            label: "You can select me too",
                            description: "This is also a description",
                            value: "second_option",
                            emoji: "😱"
                        },
                        {
                            label: 'I am also an option',
                            description: 'This is a description as well',
                            value: 'third_option',
                        },
                    ),
            );
        return interaction.reply({ content: 'Wow!', components: [row] });
    },
};