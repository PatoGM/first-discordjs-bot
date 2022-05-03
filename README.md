# first-discordjs-bot

## Bot explanation

This bot is configured to be used purely for testing and debugging purposes on a special dev channel. Things to keep note of:

1. Most of this code is copied straight from https://discordjs.guide/creating-your-bot
2. Bot tokens are normally not meant to be casually shared
3. In order for a bot to work, someone must be running it! I'm currently doing so myself.
4. I might/will mess up the code inside this repo (accidentaly) at some point!

## Setting up bot for local development

1. git clone https://github.com/PatoGM/first-discordjs-bot.git
2. npm install
3. Take secret bot token from our private discord dev server and place into a file called "config.json" as follows:

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

7. Take secret client id from our private discord dev server (this id would normally appear as "Application ID" inside Discord's Dev Web Page) and add it to "config.json"

{
	"token": "secret token",
    "guildId": "server id",
    "clientId": "id you just copied
}

8. Open one terminal inside the folder you just cloned and run "tsc -w"
9. Open another terminal and run "node index.js" whenever you want to run the bot.
10. Code away!

## Explanation of "deploy-commands.js"

The file deploy-commands.js does not have to be run often. This file only has to be run when updating/editing the commands
listed inside the script. As per the guide:

"Once you fill in these values, run node deploy-commands.js in your project directory to register your commands to a single guild. It's also possible to register commands globally."

link to info on registering commands globally: https://discordjs.guide/interactions/slash-commands.html#global-commands

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