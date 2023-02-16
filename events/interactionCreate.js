const { Events } = require('discord.js');
const modals = require("#components/modals");
const buttons = require("#components/buttons");
const selectMenus = require("#components/selectMenus");
const contextMenus = require("#components/contextMenus");
const chalk = require("chalk");

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {

        /* Slash Commands */
        if (interaction.isChatInputCommand()) {
            const command = interaction.client.commands.get(interaction.commandName);

            if (!command) {
                console.error(chalk.red(`No command matching ${interaction.commandName} was found.`));
                return;
            }

            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(chalk.red(`Error executing ${interaction.commandName}`));
                console.error(chalk.red(error));
            }
        }

        /* Autocompletes */
        if (interaction.isAutocomplete()) {
            const command = interaction.client.commands.get(interaction.commandName);

            if (!command) {
                console.error(chalk.red(`No command matching ${interaction.commandName} was found.`));
                return;
            }

            try {
                await command.autocomplete(interaction);
            } catch (error) {
                console.error(chalk.red(error));
            }
        }

        /* Modals */
        if (interaction.isModalSubmit()) await modals.handle(interaction);

        /* Buttons */
        if (interaction.isButton()) await buttons.handle(interaction);

        /* Select Menus */
        if (interaction.isAnySelectMenu()) await selectMenus.handle(interaction);

        /* Context Menus */
        if (interaction.isContextMenuCommand()) await contextMenus.handle(interaction);

    },
};
