const { REST, Routes } = require('discord.js');
const chalk = require("chalk");
const fs = require('node:fs');

async function deployCommands(type) {
    let applicationType;
    if(type === "global") applicationType = "applicationCommands";
    if(type === "guild") applicationType = "applicationGuildCommands";

    /* Grab all the command files from the directories "commands" */
    const commands = [];
    fs.readdirSync("./commands").forEach(dir => {
        const commandFiles = fs.readdirSync(`./commands/${dir}`).filter(file => file.endsWith(".js"));
        for (const file of commandFiles) {

            const command = require(`../commands/${dir}/${file}`);
            commands.push(command.data.toJSON());
        }
    });

    /* Construct and prepare an instance of the REST module */
    const rest = new REST({ version: '10' }).setToken(process.env.CLIENT_TOKEN);

    /* Deploy your commands */
    await (async () => {
        try {
            console.debug(chalk.gray(`Started refreshing ${commands.length} application commands (${type})`));

            const data = await rest.put(
                Routes[applicationType](process.env.CLIENT_ID, process.env.GUILD_ID),
                { body: commands }
            );

            console.debug(chalk.green(`Successfully reloaded ${data.length} application commands (${type})`));
        } catch (err) {
            console.error(chalk.red(err));
        }
    })();
}

module.exports = { deployCommands };