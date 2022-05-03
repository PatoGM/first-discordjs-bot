# first-discordjs-bot

## Bot explanation

This bot is configured to be used purely for testing and debugging purposes on a special dev channel. Things to keep note of:

1. Most of this code is copied straight from https://discordjs.guide/creating-your-bot
2. Bot tokens are normally not meant to be casually shared
3. I might/will mess up the code inside this repo (accidentaly) at some point!

## Setting up bot for local development

1. git clone https://github.com/PatoGM/first-discordjs-bot.git
2. npm install
3. Take secret bot token from discord server and place into a file called "config.json" as follows:

{
	"token": "token goes here"
}

4. Go to discord.com, User settings, "Advanced" under "App Settings" and turn on "Developer Mode"
5. Right click server of choice, in this case our dev server, and click "Copy ID" at bottom of menu
6. Save id inside "config.json" as "guildId":

{
	"token": "secret token",
    "guildId": "id you just copied"
}

7. Right click on user of choice, in this case yourself, and click "Copy ID" at bottom of menu
8. Save id inside "config.json" as "clientId":

{
	"token": "secret token",
    "guildId": "server id",
    "clientId": "id you just copied
}

9. Open one terminal inside the folder you just cloned and run "tsc -w"
10. Open another terminal and run "node index.js" whenever you want to run the bot.
11. Code away!

## Adjusting Commands

The file deploy-command.ts

## Commands used to setup this repo

1. npm init
2. npm install discord.js
- This is the bare minimum to have a "bot", although it won't do anything
3. npm install @discordjs/builders @discordjs/rest discord-api-types
- Allows for bare minimum bot "slash commands"
4. tsc --init
5. Uncomment tsconfig line 36 ("resolveJsonModule": true,) to remove tsc errors
- Can probably do this earlier!
6. created index.ts based on guide: https://discordjs.guide/creating-your-bot/#creating-the-main-file
7. created deploy-commands.ts based on guide: https://discordjs.guide/creating-your-bot/creating-commands.html#command-deployment-script