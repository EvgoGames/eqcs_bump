function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
let token = "OTM1OTI1NDg2ODEzNjAxODU0.YfJGww.0HH2df3RrCdXAAy_uWyKWjrpB6g";
let prefix = "self!";
let BotVersion = "Test Bot";








client.on('ready', () => {
    //client.channels.cache.get(`630995793670701065`).send(`Ready...`)
    console.log(`Logged in as ${client.user.tag}!`);
    //	client.channels.cache.get(`630995793670701065`).send(`Logged in as ${client.user.tag}!`)
});

client.on('message', msg => { 

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    async function run() {
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        while (true) {
            msg.channel.send("!like");
            await sleep(1000);
            msg.channel.send("!d bump");
            await sleep(1000);
            msg.channel.send("!bump"); 
            await sleep(3600000);
    }

    }
    if (msg.content === prefix + 'ping') {
        run();

    };
});
client.login(token);