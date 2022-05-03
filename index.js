"use strict";
exports.__esModule = true;
// Require the necessary discord.js classes
var discord_js_1 = require("discord.js");
var config_json_1 = require("./config.json");
// Create a new client instance
var client = new discord_js_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS] });
// When the client is ready, run this code (only once)
client.once('ready', function () {
    console.log('Ready!');
});
// Login to Discord with your client's token
client.login(config_json_1.token);
