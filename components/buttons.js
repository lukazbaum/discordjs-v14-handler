async function handle(interaction) {

    if(interaction.customId === "primary") {
        return interaction.reply("You clicked primary");
    }

}

module.exports = { handle };