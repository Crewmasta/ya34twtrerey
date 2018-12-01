const Discord = require('discord.js');
const client = new Discord.Client();

const e = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('ready', async() => {
var server = "487652334449590272"; // ايدي السررفر
var channel = "487652334449590274";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**كودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودز **')
    },305);
})

client.on('ready', async() => {
var server = "487652334449590272"; // ايدي السررفر
var channel = "487652334449590274";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },86400);
})








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


const Discord = require('discord.js')
const btts = new Discord.Client()

btts.on("ready", () => {
    console.log(`${btts.user.username} Is now ready!`)
});

btts.on("guildMemberAdd", member => {
    
    if(member.guild.id !== "517345819406368769") return;
    
 var channel = btts.channels.get('517621662271799307')
   channel.send('**.. Welcome To, - Future Community. :leaves::tulip: **')
   
});

btts.login(process.env.BTTS)

e.login(process.env.BOT_TOKEN1); 
client.login(process.env.BOT_TOKEN); 
