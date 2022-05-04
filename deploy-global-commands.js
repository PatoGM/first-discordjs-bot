"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const rest_1 = require("@discordjs/rest");
const v9_1 = require("discord-api-types/v9");
const config_json_1 = require("./config.json");
const global_commands = [
    new builders_1.SlashCommandBuilder().setName('users').setDescription('Replies with user info!'),
    new builders_1.SlashCommandBuilder().setName('pings').setDescription('Replies with pong!'),
    new builders_1.SlashCommandBuilder().setName('servers').setDescription('Replies with server info!'),
].map(command => command.toJSON());
const rest = new rest_1.REST({ version: '9' }).setToken(config_json_1.token);
rest.put(v9_1.Routes.applicationCommands(config_json_1.clientId), { body: global_commands })
    .then((resp) => console.log('Successfully registered global application commands.', resp))
    .catch(console.error);
