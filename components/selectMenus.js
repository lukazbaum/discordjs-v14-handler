async function handle(interaction) {

    if (interaction.customId === 'select') {
        return interaction.reply({ content: 'Something was selected!' });
    }

}

module.exports = { handle };