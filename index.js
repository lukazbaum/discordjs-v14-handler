const { Client, Collection, GatewayIntentBits } = require('discord.js');
const path = require('node:path');
const chalk = require("chalk");
const fs = require('node:fs');

const dotenv = require('dotenv');
dotenv.config();

/* Deploy Commands */
const { deployCommands } = require("#lib/deploy-commands");

// Activate this function when adding/removing commands
// Disable this function when testing/changing existing commands (prevents api delay)
deployCommands("guild").then(() => console.debug(chalk.green("Successfully deployed commands"))); // For global commands change type to "global"

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
});
client.commands = new Collection();

/* Command Handling */
fs.readdirSync("./commands").forEach(dir => {
    const commandFiles = fs.readdirSync(`./commands/${dir}`).filter(file => file.endsWith(".js"));

    for (const file of commandFiles) {
        const command = require(`./commands/${dir}/${file}`);

        if ((command.data && command.execute) || (command.data && command.type === "ContextMenu")) {
            client.commands.set(command.data.name, command);
        } else {
            console.error(chalk.red(`The command at ${dir}/${file} is missing a required "data" or "execute" property.`));
        }
    }
})

/* Event Handling */
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

client.login(process.env.CLIENT_TOKEN);