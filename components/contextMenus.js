async function handle(interaction) {

    /* Context: "User Information" */
    if(interaction.commandName === "User Information") {
        const { username } = interaction.targetUser;
        return interaction.reply({ content: `Username: ${username}` });
    }

}

module.exports = { handle };