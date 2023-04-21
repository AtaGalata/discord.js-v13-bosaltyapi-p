const {Client} = require("discord.js");
const config = require("./ayarlar");
const client = new Client({intents: 32767});

require("./util/eventLoader")(client)
require("./util/commandHandler")(client)

client.login(config.token);