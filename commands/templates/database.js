const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const testingModel = require("../../lib/models/testing");
const database = require("../../lib/database");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('database')
        .setDescription('Adds data to the Database!')
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),

    async execute(interaction) {

        try {
            await database.connect("testing").then(async () => {
                const data = {
                    name: "Lukas"
                };
                await new testingModel(data).save();
            })
        }
        catch(err) {
            console.error(err);
        }

        return interaction.reply({ content: 'Information has been sent to the Database!', ephemeral: true });
    },
};