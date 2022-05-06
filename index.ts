// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js';
import { token } from './config.json';

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	console.log(commandName)

	if (commandName === 'pings') {
		await interaction.reply('Pongsss!');
	} else if (commandName === 'servers') {
		await interaction.reply('Server info.');
	} else if (commandName === 'users') {
		await interaction.reply('User info.');
	} else if (commandName === 'boo') {
		await interaction.reply('boo!');
	}
});

// Login to Discord with your client's token
client.login(token);