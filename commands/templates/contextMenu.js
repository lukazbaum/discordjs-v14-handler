const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
    type: "ContextMenu",
    data: new ContextMenuCommandBuilder()
        .setName('User Information')
        .setType(ApplicationCommandType.User), // .Message
}

