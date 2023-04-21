const Discord = require("discord.js")
const fs = require("fs")

var sayı = 0
const komutlar = []

module.exports = async client => {
  client.commands = new Discord.Collection();
  client.aliases = new Discord.Collection();
  
  fs.readdir(`./komutlar/`, (err, files)=> {
    files.forEach(f => {
      if(!f) return;
      if(!f.endsWith(".js")) return;
      let props = require(`../komutlar/${f}`);
      komutlar.push(props.conf.komut)
      client.commands.set(props.conf.komut, props);
      props.conf.aliases.forEach(alias => {
          client.aliases.set(alias, props.conf.komut);          
      });
    })
    sayı += files.length
  })                 
  setTimeout(()=> {                      
    komutlar.forEach(k => {
      //console.log(`Yüklenen Komut : ${k}`)  //(Komutları görebilmek için aç!)
    })
    console.log(`[✓] - Prefix Komutlar Yüklendi ! (${sayı} tane)`) 
  }, 500)
}