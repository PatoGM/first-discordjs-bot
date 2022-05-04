import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { clientId, guildId, token } from './config.json';

const commands = [
	new SlashCommandBuilder().setName('boo').setDescription('Replies with boo!'),
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then((resp) => console.log('Successfully registered dev server application commands.', resp))
	.catch(console.error);