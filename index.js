const { ShardingManager } = require('discord.js');
const dotenv = require('dotenv');
const chalk = require("chalk");
dotenv.config();

/* Create Sharding-Manager */
const manager = new ShardingManager('./bot.js', { token: process.env.CLIENT_TOKEN });

manager.on('shardCreate', shard => console.debug(chalk.gray(`Launched shard ${shard.id}`)));
manager.spawn();