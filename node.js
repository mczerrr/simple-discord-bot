//Dependencies
const Discord = require("discord.js")

//Variables
const Bot = new Discord.Client()

//Main
Bot.on("ready", ()=>{
    console.log("Bot is running.")
})