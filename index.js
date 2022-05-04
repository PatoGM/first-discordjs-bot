"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Require the necessary discord.js classes
const discord_js_1 = require("discord.js");
const config_json_1 = require("./config.json");
// Create a new client instance
const client = new discord_js_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS] });
// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand())
        return;
    const { commandName } = interaction;
    console.log(commandName);
    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    }
    else if (commandName === 'server') {
        await interaction.reply('Server info.');
    }
    else if (commandName === 'user') {
        await interaction.reply('User info.');
    }
    else if (commandName === 'boo') {
        await interaction.reply('boo!');
    }
});
// Login to Discord with your client's token
client.login(config_json_1.token);
