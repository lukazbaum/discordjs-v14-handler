const { Events, ActivityType } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);

        client.user.setStatus("dnd"); /* online, idle, dnd, invisible */
        client.user.setActivity('Development', { type: ActivityType.Watching });
    },
};