"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const rest_1 = require("@discordjs/rest");
const v9_1 = require("discord-api-types/v9");
const config_json_1 = require("./config.json");
const commands = [
    new builders_1.SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
    new builders_1.SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
    new builders_1.SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
]
    .map(command => command.toJSON());
const rest = new rest_1.REST({ version: '9' }).setToken(config_json_1.token);
rest.put(v9_1.Routes.applicationGuildCommands(config_json_1.clientId, config_json_1.guildId), { body: commands })
    .then((resp) => console.log('Successfully registered application commands.', resp))
    .catch(console.error);
