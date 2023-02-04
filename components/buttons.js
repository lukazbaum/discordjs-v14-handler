async function handle(interaction) {

    if(interaction.customId === "primary") {
        return interaction.reply({ content: "You clicked primary" });
    }
    else if(interaction.customId === "secondary") {
        return interaction.reply({ content: "You clicked secondary" });
    }
    else if(interaction.customId === "success") {
        return interaction.reply({ content: "You clicked success" });
    }
    else if(interaction.customId === "danger") {
        return interaction.reply({ content: "You clicked danger" });
    }

}

module.exports = { handle };