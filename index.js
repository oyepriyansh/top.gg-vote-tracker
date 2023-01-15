const {Client} = require('discord.js');
const express = require('express')
const Topgg = require('@top-gg/sdk')
const app = express()

// Create a new client instance
const client = new Client({intents: 32767});

//exporting client
module.exports = client;

client.login(process.env.token);

// Recieving Votes
const webhook = new Topgg.Webhook('auth123') //It can be anything

app.post('/vote', webhook.listener(async vote => { //ending url
    console.log(`[Vote Logs] ${vote.user} voted for ${vote.bot}`);
}));

app.listen(3000) //port of the console panel
console.log(`[Webhook] Top.gg webhook is ready`);
