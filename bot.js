const Discord = require('discord.js');
const client = new Discord.Client();
const m = new Discord.Client();
const k = new Discord.Client();
const e = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

m.on('ready', () => {
  console.log(`Logged in as ${m.user.tag}!`);
});

k.on('ready', () => {
  console.log(`Logged in as ${k.user.tag}!`);
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

m.on('ready', async() => {
var serverr = "500406374992445450"; // ايدي السررفر
var channell = "500409913890177044";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(serverr).channels.get(channell).send('**كودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودز **')
    },305);
})

m.on('ready', async() => {
var serverr = "500406374992445450"; // ايدي السررفر
var channell = "500409913890177044";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(serverr).channels.get(channell).send('#daily')
    },86400);
})


k.on('ready', async() => {
var serverr = "500406374992445450"; // ايدي السررفر
var channell = "500409913890177044";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(serverr).channels.get(channell).send('**كودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودز **')
    },305);
})

k.on('ready', async() => {
var serverr = "500406374992445450"; // ايدي السررفر
var channell = "500409913890177044";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(serverr).channels.get(channell).send('#daily')
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

e.login(process.env.BOT_TOKEN1); 
m.login(process.env.BOT_TOKEN2);
k.login(process.env.BOT_TOKEN3);
client.login(process.env.BOT_TOKEN); 
