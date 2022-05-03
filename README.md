# first-discordjs-bot

## Setting up bot for local development

1. git clone https://github.com/PatoGM/first-discordjs-bot.git
2. npm install
3. Take secret bot token from discord server and place into a file called "config.json" as follows:

{
	"token": "token goes here"
}

4. Open one terminal inside the folder you just cloned and run "tsc -w"
5. Open another terminal and run "node index.js" whenever you want to run the bot.
6. Code away!

## Commands used to setup this repo

1. npm init
2. npm install discord.js
- This is the bare minimum to have a "bot", although it won't do anything
3. npm install @discordjs/builders @discordjs/rest discord-api-types
- Allows for bare minimum bot "slash commands"
4. tsc --init
5. Uncomment tsconfig line 36 ("resolveJsonModule": true,) to remove tsc errors
- Can probably do this earlier!