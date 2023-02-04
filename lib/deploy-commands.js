const { REST, Routes } = require('discord.js');
const fs = require('node:fs');

async function deployCommands(type) {
    let _type;
    if(type === "global") _type = "applicationCommands";
    if(type === "guild") _type = "applicationGuildCommands";

    const commands = [];
    fs.readdirSync("./commands").forEach(dir => {
        const commandFiles = fs.readdirSync(`./commands/${dir}`).filter(file => file.endsWith(".js"));
        for (const file of commandFiles) {

            const command = require(`../commands/${dir}/${file}`);
            commands.push(command.data.toJSON());
        }
    })

    const rest = new REST({ version: '10' }).setToken(process.env.CLIENT_TOKEN);

    await (async () => {
        try {
            console.debug(`Started refreshing ${commands.length} application commands (${type})`);

            const data = await rest.put(
                Routes[_type](process.env.CLIENT_ID, process.env.GUILD_ID),
                { body: commands },
            );

            console.debug(`Successfully reloaded ${data.length} application commands (${type})`);
        } catch (error) {
            console.error(error);
        }
    })();
}

module.exports = { deployCommands }