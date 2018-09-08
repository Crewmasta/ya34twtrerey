const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
if(message.content === "."){
  message.channel.send("#credits <@307898780588703744> 3000")
}
});



client.on("message", message => {
if(message.content === ","){
  message.channel.send("..")
}
});

client.login(process.env.BOT_TOKEN); 




const e = new Discord.Client();

e.on('ready', () => {
  console.log(`Logged in as ${e.user.tag}!`);
});

e.on('ready', async() => {
var server = "487652334449590272"; // ايدي السررفر
var channel = "487652334449590274";//ايدي الروم
    setInterval(()=>{
    e.guilds.get(server).channels.get(channel).send('**كودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودز **')
    },305);
})

e.on('ready', async() => {
var server = "487652334449590272"; // ايدي السررفر
var channel = "487652334449590274";//ايدي الروم
    setInterval(()=>{
   e.guilds.get(server).channels.get(channel).send('#daily')
    },86400);
})


e.login(process.env.BOT_TOKEN1); 
