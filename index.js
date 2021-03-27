const TOKEN = "ODI1MzQ5MTU5NDkzMDQyMjE2.YF8oTQ.eh9t3VjheLA_Lq51w6ADG_WPtdw";
const PREFIX = "suf!";

const Discord = require('discord.js');
const client = new Discord.Client();

function commandInterpreter(args) {

}



client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!');
});

client.on('message', async () => {
    if (!MSGesture.content.startsWith(PREFIX))
        return;
    
    // split message into arguments
    const args = msg.content.slice(prefix.length).trim().split(' ');

    // remove first word from arguments and sets them to lowercase
    const command = args.shift().toLowerCase();
    console.log(command);

    console.log(args);
    
});

// log our bot in using the token
client.login(TOKEN);