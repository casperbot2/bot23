const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("644471173631049729")
setInterval(function() {
channel.send(`يا عباس يا عباس يا عباس يا عباس`);
}, 30)
})

client.on("ready", () => {
let channel =     client.channels.get("644471173631049729")
setInterval(function() {
channel.send(`يا عباس يا عباس يا عباس يا عباس`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
client2.login(process.env.BOT_TOKEN2);
