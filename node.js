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
    if(message.content == "adarsh"){ //If you type .test on your channel it will reply "Test".
        message.reply("adarsh gantengg")
    }
    if(message.content == "elsa"){ //If you type .test on your channel it will reply "Test".
        message.reply("elsa cantikkk")
    }
    if(message.content == "pagi"){ //If you type .test on your channel it will reply "Test".
        message.reply("pagi jugaa")
    }
    if(message.content == "siang"){ //If you type .test on your channel it will reply "Test".
        message.reply("siangg jugaa")
    }
    if(message.content == "sore"){ //If you type .test on your channel it will reply "Test".
        message.reply("soree jugaa")
    }
    if(message.content == "malam"){ //If you type .test on your channel it will reply "Test".
        message.reply("malamm jugaa")
    }
})

//Login
Bot.login("DiscordBotToken")