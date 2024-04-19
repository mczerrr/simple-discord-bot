//Dependencies
const Discord = require("discord.js")

//Variables
const Bot = new Discord.Client()

//Main
Bot.on("ready", ()=>{
    console.log("Bot Telah Aktif!.")
})

Bot.on("message", (message)=>{
    if(message.content == "halloo"){ //If you type .test on your channel it will reply "Test".
        message.reply("Hiiiii")
    }
    if(message.content == ".halloo"){ //If you type .test on your channel it will reply "Test".
        message.reply("Hiiiii")
    }
    if(message.content == ".halloo"){ //If you type .test on your channel it will reply "Test".
        message.reply("Hiiiii")
    }
    if(message.content == ".halloo"){ //If you type .test on your channel it will reply "Test".
        message.reply("Hiiiii")
    }
})

//Login
Bot.login("DiscordBotToken")