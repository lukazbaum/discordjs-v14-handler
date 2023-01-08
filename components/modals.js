async function handle(interaction) {

    /* Command: "modal" */
    if (interaction.customId === 'myModal') {
        const favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput');
        return interaction.reply({ content: `Color: ${favoriteColor}` });
    }

}

module.exports = { handle };