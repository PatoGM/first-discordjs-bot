# first-discordjs-bot

Jenkins page (where you can see builds of my bot instance):

https://tomcat9.patogm.net/jenkins/job/Discord%20Bot/

## Bot explanation

This bot is configured to be used purely for testing and debugging purposes on a special dev channel. Things to keep note of:

1. Most of this code is copied straight from https://discordjs.guide/creating-your-bot
2. Bot tokens are normally not meant to be casually shared
3. In order for a bot to work, someone must be running it! I'm currently doing so myself. If more than one person is running the bot, the newest instance should continue working while older instances might crash when a slash command is called.
4. In order to update the currently running instance of this bot, simply push changes to this repo. Make sure index.js is correctly updated by running "tsc -w" whenever you are updating index.ts before pushing your changes.
5. I might/will mess up the code inside this repo (accidentaly) at some point!

## System Requirements

1. Node and NPM -> Version 16.14+ is recommended, I believe 16.6+ is required by Discord.js. Link to page for installation of version 16.15:
https://nodejs.org/en/download/
2. Typescript -> Any version should be fine:
```
npm install -g typescript
```

## Setting up environment for local development / testing

1. Clone this repo:
```
git clone https://github.com/PatoGM/first-discordjs-bot.git
```
2. Get Node Modules:
```
npm install
```
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
9. Open another terminal and run "node index.js" whenever you want to run the bot. Note that this might crash the instance I'm currently running while yours should work just fine. In order to ensure my instance is running, simply push your code changes and it'll automatically restart.
10. Code away!

## Explanation of "deploy-X-commands.js"

There are two of these types of files, with their names describing what they do: one updates commands that the bot can run anywhere, while the other updates commands the bot offers to specific servers/guilds. Essentially, these tell Discord what commands your bot offers and Discord will handle presenting these commands via their apps, although the main bot script "index.js" is the one that actually handles these commands. These scripts you can run locally yourself anytime, but take note of all the following:

The file deploy-global-commands.js should be run with much care. Whenever a bot has its global commands updated, everything should update appropriately, but it may be possible that something "bugs out" and the bot has to be removed and re-added to a server.

As for the deploy-dev-server-commands.js, this must be run after the bot has joined a server of choice, at which point the bot will now have special commands available on that server only. Again, updating this frequently should not be a problem, but perhaps the bot may have to be removed, re-added, and then commands re-registered.

NOTE!!!: These two files were originally one, but were split as running both the global-register-command and the server-register-command at the same time / shortly after each other would result in commands being not properly registered on servers.

link to more info on registering commands: https://discordjs.guide/interactions/slash-commands.html

## Commands used to originally create this repo
```
npm init
```
```
npm install discord.js
```
- This is the bare minimum to have a "bot", although it won't do anything

```
npm install @discordjs/builders @discordjs/rest discord-api-types
```
- Allows for bare minimum bot "slash commands"
```
tsc --init
```

#### Other things:
- Uncomment tsconfig line 36 ("resolveJsonModule": true,) to remove tsc errors
- created index.ts based on guide: https://discordjs.guide/creating-your-bot/#creating-the-main-file
- created deploy-commands.ts based on guide: https://discordjs.guide/creating-your-bot/creating-commands.html#command-deployment-script
- split deploy-commands.ts into two files, one for global commands and one for specific server commands. This was because registering both types of commands in a short span of time would break commands on servers somehow.
- Create and enable systemd service that runs index.js
- Allow Jenkins (actually Tomcat) to restart services (edit tomcat service file to allow "sudo", then edit visudo to allow "sudo service")
- Added webhook to prompt Jenkins server to update my bot instance.