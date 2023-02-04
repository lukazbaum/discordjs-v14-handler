const { ShardingManager } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

/* Create Sharding-Manager */
const manager = new ShardingManager('./bot.js', { token: process.env.CLIENT_TOKEN });

manager.on('shardCreate', shard => console.debug(`Launched shard ${shard.id}`));
manager.spawn();