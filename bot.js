@everyone, - جميع الحقوق محفوظة لدى كودز
client.on('message' , async (message) => {
var prefix = "%"
    if(message.content.startsWith(prefix + "topinv")) {
if(message.author.bot) return;
if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
  var invites = await message.guild.fetchInvites();
    invites = invites.array();
    arraySort(invites, 'uses', { reverse: true });
    let possibleInvites = ['User Invited |  Uses '];
    invites.forEach(i => {
        if (i.uses === 0) {
            return;
        }
      possibleInvites.push(['\n\ ' +'<@'+ i.inviter.id +'>' + '  :  ' +   i.uses]);
     //معلومه بسيطه يمديك تكرر العمليهه أكثر من مره
    })
    const embed = new Discord.RichEmbed()
 .setColor('RANDOM')
    .addField("Top Invites." ,`${(possibleInvites)}`)
 
    message.channel.send(embed)
    }
});
 
» :Description: - وصف الكود :
 كود - Top Invite
» :Creator: - صانع الكود : IDK
» :Spreader: - ناشر الكود : @.........
 
- Codes BotBOT01/20/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
client.on('message', message => {
    if (message.content === "_createroles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);
 
                     message.guild.createRole({ name: "Owner", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Co-Owner", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Leader", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Co-Leader", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "King", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Qween", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "HighNiss", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Pros", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "VIP+", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "VIP", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Actve", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Members", color: "#ffffff", permissions: [] })
       
 
message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعه الرتب **')
}
});
 
» :Description: - وصف الكود :
 كود يسوي لك رتب بهذي الاسماء تقدر تعدل عليها
» :Creator: - صانع الكود : ملفاة عندي
» :Spreader: - ناشر الكود : @.Falsteni , off
@everyone, - جميع الحقوق محفوظة لدى كودز
client.on('message', message => {
     if(message.content.startsWith(prefix + "clear")) {
         var args = message.content.split(" ").slice(1);
 if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You need MANAGE_MESSAGES permission noob');
  if (!args[0]) return message.channel.send('You didn't provide any number!!!');
 
  message.channel.bulkDelete(args[0]).then(() => {
    const embed = new Discord.RichEmbed()
      .setColor(0xF16104)
      .setDescription(Cleared ${args[0]} messages.);
    message.channel.send({ embed });
 
    const actionlog = message.guild.channels.find('name', 'logs');
 
    if (!actionlog) return message.channel.send('Can't find action-log channel. Are you sure that this channel exists and I have permission to view it? CANNOT POST LOG.');
    const embedlog = new Discord.RichEmbed()
      .setDescription('~Purge~')
      .setColor(0xF16104)
      .addField('Purged By', <@${message.author.id}> with ID ${message.author.id})
      .addField('Purged in', message.channel)
      .addField('Time', message.createdAt);
    actionlog.send(embedlog);
   
  });
};
 
});
 
» :Description: - وصف الكود :
 كود مسح الشات مع لوق
» :Creator: - صانع الكود : @xZaaaM.
» :Spreader: - ناشر الكود : @xZaaaM.
 
- Codes BotBOT01/20/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
Majd.on('message', message => { //clear
    if(!message.channel.guild) return;
 if(message.content.startsWith(prefix + 'clear')) {
 if(!message.channel.guild) return message.channel.send('**هذا الامر فقط للسيرفرات**').then(m => m.delete(5000));
 if(!message.member.hasPermission('MANAGE_MESSAGE')) return      message.channel.send('**ليس لديك برمشن manage message`' );
 let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
 let request = `Requested By ${message.author.username}`;
 message.channel.send(`**هل انت متأكد من حذف الشات؟**`).then(msg => {
 msg.react('✅')
 .then(() => msg.react('❌'))
 .then(() =>msg.react('✅'))
 
 let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
 let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
 let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
 let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
 message.channel.send(`سينحذف الشات ...`).then(m => m.delete(5000));
 var msg;
         msg = parseInt();
 
       message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
       message.channel.sendMessage("", {embed: {
         title: "`` تــــم حذف الشات ``",
         color: 0x06DF00,
         footer: {
 
         }
       }}).then(msg => {msg.delete(3000)});
 
 })
 reaction2.on("collect", r => {
 message.channel.send(`**تم الغاء حذف الشات**`).then(m => m.delete(5000));
 msg.delete();
 })
 })
 }
 });
 
» :Description: - وصف الكود :
 كود كلير من آيآم كودز القديم
حق 2016
آو
2017
حآفظه عندي .
» :Creator: - صانع الكود : أتوقع @Deleted User
» :Spreader: - ناشر الكود : @Deleted User
@everyone, - جميع الحقوق محفوظة لدى كودز
client.on('message', async message => {
  if(message.content.startsWith(prefix + "voicesetup")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send('❎ » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__');
  if(!args) args = `VoiceOnline: [ ${message.guild.members.filter(s => s.voiceChannel).size} ]`;
  message.channel.send('✅ » تم عمل الروم الصوتي بنجاح');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});
 
» :Description: - وصف الكود :
 الكود الي وعدتكم عليه
فويس اونلاين للبوتات العامة بدون ايدي
+ تقدر تحط اسم الروم
» :Creator: - صانع الكود : ملفات عندي
» :Spreader: - ناشر الكود : @.Falsteni , off
 
.Jinxed01/20/2019
انا صانع الكود ,_, .
 
- Codes BotBOT01/20/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
client.on('ready',async () => {
setInterval(function(){
var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
ReBeeL = currentTime.getMinutes(),
ReBeeeL = currentTime.getSeconds(),
Codes = currentTime.getFullYear(),
CodeS = currentTime.getMonth() + 1,
CoDeS = currentTime.getDate()
if (ReBeeL < 10) {
ReBeeL = "0" + ReBeeL;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
client.channels.find('id', 'ايدي الروم').setName(`Time - ${hours} : ${ReBeeL} : ${ReBeeeL} ${suffix}`)
client.channels.find('id', 'ايدي الروم').setName(`Date : ${Codes} - ${CodeS} - ${CoDeS}`)
}, 1000);
});
 
» :Description: - وصف الكود :
 كود تاريخ ووقت لروم محدد
» :Creator: - صانع الكود : ريـــــبــــــل
» :Spreader: - ناشر الكود : @Deleted User
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/JrZBm2VZ
 
» :Description: - وصف الكود :
 كود إنشاء الرومات الصوتية, الكود قديم شوي بس فعال.
» :Creator: - صانع الكود : @Abady
» :Spreader: - ناشر الكود : @Abady
 
- Codes BotBOT01/20/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
client.on('message', message => {
    var p = message.mentions.members.first();
    var reason = message.content.split(" ").slice(2).join(' ');
    var log = message.guild.channels.find('name', 'log');
    if(message.content.startsWith(`${prefix}ban`)){
        if(!p) return message.reply(`**Mention the user!**`);
        if(!reason) return message.reply(`**Spofic a reason!**`);
        if(!p.bannable) return message.reply(`**I can't ban a staff member!**`);
        reason = reason.replace('0', "**نشر في الخاص**");
        reason = reason.replace('1', "**اسم غير لائق**");
        reason = reason.replace('2', "**صوره غير لائقه**");
        reason = reason.replace('3', "**سب الاهل**");
        reason = reason.replace('4', "**سب الذات الاهيه**");
        reason = reason.replace('5', "**مخالفه القوانين مع اخذ اكثر من تحذير**");
        reason = reason.replace('6', "**سبام في الشات**");
        reason = reason.replace('7', "**استخدام بعض الاوامر بشكل مسبب للإضرار بالسيرفر**");
        reason = reason.replace('8', "**جلب اعضاء مفبركين للسيرفر**");
        reason = reason.replace('9', "**عنصريه**");
        var embed = new Discord.RichEmbed()
        .setAuthor(`User Banned!`)
        .addField(`Name ♣`, `<@${p.id}>`)
        .addField(`By ♣`, `<@${message.author.id}>`)
        .addField(`Reason ♣`, reason)
        .setTimestamp()
        .setColor("BLACK")
        .setFooter(` `)
        p.ban();
            message.delete();
        log.send({embed});
    }
});
 
» :Description: - وصف الكود :
 كود بان بطريقع جديده
تكتب
<bot-prefix>ban <mention> <0-9>
كل رقم له سبب يمديك تعدله من الكود
» :Creator: - صانع الكود : @F4res
» :Spreader: - ناشر الكود : @F4res
 
- Codes BotBOT01/20/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
client.on('message', message => {
    var p = message.mentions.members.first();
    var reason = message.content.split(" ").slice(2).join(' ');
    var log = message.guild.channels.find('name', 'log');
    if(message.content.startsWith(`${prefix}warn`)){
        if(!p) return message.reply(`**Mention the user!**`);
        if(!reason) return message.reply(`**Spofic a reason!**`);
        if(!p.bannable) return message.reply(`**I can't ban a staff member!**`);
        reason = reason.replace('0', "**نشر في الخاص**");
        reason = reason.replace('1', "**اسم غير لائق**");
        reason = reason.replace('2', "**صوره غير لائقه**");
        reason = reason.replace('3', "**سب الاهل**");
        reason = reason.replace('4', "**سب الذات الاهيه**");
        reason = reason.replace('5', "**مخالفه القوانين مع اخذ اكثر من تحذير**");
        reason = reason.replace('6', "**سبام في الشات**");
        reason = reason.replace('7', "**استخدام بعض الاوامر بشكل مسبب للإضرار بالسيرفر**");
        reason = reason.replace('8', "**جلب اعضاء مفبركين للسيرفر**");
        reason = reason.replace('9', "**عنصريه**");
        var embed = new Discord.RichEmbed()
        .setAuthor(`User Warned!`)
        .addField(`Name ♣`, `<@${p.id}>`)
        .addField(`By ♣`, `<@${message.author.id}>`)
        .addField(`Reason ♣`, reason)
        .setTimestamp()
        .setColor("WHITE")
        .setFooter(` `)
        message.channel.send(`${p} ${reason}`)
            message.delete();
        log.send({embed});
    }
});
 
» :Description: - وصف الكود :
 كود وارن - تحذير بطريقع جديده
تكتب
<bot-prefix>warn <mention> <0-9>
كل رقم له سبب يمديك تعدله من الكود
» :Creator: - صانع الكود : @F4res
» :Spreader: - ناشر الكود : @F4res
@everyone, - جميع الحقوق محفوظة لدى كودز
client.on('message', message => {
    if(message.content.toLowerCase().startsWith(`discord.gg`)){
        message.member.addRole(message.guild.roles.find('name', 'Muted'));
        var embed = new Discord.RichEmbed()
        .setDescription(`تمت معاقبتك لنشرك سيرفر اخر هنا`)
            message.delete();
        message.channel.send(`<@${message.author.id}`);
        message.channel.send({embed});
    }
});
 
» :Description: - وصف الكود :
 لو احد نشر يبلع ميوت وتنحذف رسالته
» :Creator: - صانع الكود : هو موجود بكل مكان بس الحين @F4res  سواه
» :Spreader: - ناشر الكود : @F4res
 
- Codes BotBOT01/21/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/KY6QaxZd
 
» :Description: - وصف الكود :
 كود يطلع لك جميع المبندين من السيرفر ب embed مع صفحات
تأكد تعطي البوت برمشنات
» :Creator: - صانع الكود : @IxPrumxI
» :Spreader: - ناشر الكود : @IxPrumxI
 
- Codes BotBOT01/21/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/NTYgGbcG
 
» :Description: - وصف الكود :
 سيستم مطور
» :Creator: - صانع الكود : @• HoonDaa عدلت وطورته
» :Spreader: - ناشر الكود : @• HoonDaa
 
- Codes BotBOT01/21/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/4J8bWF2M
 
» :Description: - وصف الكود :
 بوت سيستم ممتاز
» :Creator: - صانع الكود : سيرفر كودز
» :Spreader: - ناشر الكود : @• HoonDaa
 
- Codes BotBOT01/22/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
client.on('guildMemberAdd', member => {
 
    const channel = member.guild.channels.find('name', '・text');
 
    const millis = new Date().getTime() - member.user.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;
 
 
 
 
 
    const embed = new Discord.RichEmbed()
   
    .setColor("black")
    .setDescription(`**تاريخ دخولك للدسكورد منذ ${createdAt.toFixed(0)} يوم**`)
    .setAuthor(member.user.tag, member.user.avatarURL);
    channel.sendEmbed(embed);
 
 
});
 
» :Description: - وصف الكود :
 كود ترحيب
تصويت الي : 12
تصويت وصل : 76
شكراا :heart2:
http://prntscr.com/macd11
» :Creator: - صانع الكود : @.........
» :Spreader: - ناشر الكود : @.........
Lightshot
Screenshot
 
 
- Codes BotBOT01/22/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
class EventEmitter {
  constructor() {
    this.__events = {};
  }
  remove(event) {
    if (!this.__events[event] || "object" != typeof this.__events[event]) return;
    delete this.__events[event];
  }
  on(event, listener) {
    if (!event || "string" != typeof event) return;
    if (this.__events[event]) return;
    this.__events[event] = {
      event: event,
      listeners: []
    }
    if ("function" != typeof listener) return;
    this.__events[event].listeners.push(listener)
  }
  emit(event, parameters) {
    if (!this.__events[event] || "object" != typeof this.__events[event]) return;
    this.__events[event].listeners.map(listener => {
      if ( "function" != typeof listener) return;
      listener(parameters)
    });
  }
  once(event, listener) {
     if ("function" != typeof listener) return;
     this.on(event, _arguments => {
       listener(_arguments)
       this.remove(event)
     });
   }
   always(listener) {
     for (let id in this.__events) {
       this.on(this.__events[id].event, listener);
     }
   }
}
 
var events = new EventEmitter()
events.on("test", function(args) {
  console.log(args)
});
events.emit("test", "Hello, World");
 
» :Description: - وصف الكود :
 EventEmiter
صانع الاحداث ومنفذها
» :Creator: - صانع الكود : @ريبل
» :Spreader: - ناشر الكود : @ريبل
 
- Codes BotBOT01/22/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/aEwn74Ka
 
» :Description: - وصف الكود :
 كود رول بالرياكشن مع السورس
تحط رسالة وتكتب الامر
autoc
واتبع التعليمات الي راح
يقولها البوت
» :Creator: - صانع الكود : @ريبل
» :Spreader: - ناشر الكود : @ريبل
 
- Codes BotBOT01/22/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
client.on('message', message => {
  let args = message.content.split(" ")
  if (args[0].toLowerCase().startsWith(prefix+'roles')) {
    let str = "";
    var role = message.guild.roles.forEach(role => {
      str +=" "+role.name+'\n'
    })
    message.channel.send(`\`\`\`${str}\`\`\``)
  }
})
 
» :Description: - وصف الكود :
 كود يظهر رتب السيرفر
كان في شخص يريده
» :Creator: - صانع الكود : @xZaaaM.
» :Spreader: - ناشر الكود : @xZaaaM.
 
- Codes BotBOT01/22/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
if(cmd ==="!report"){
        let wUser = message.guild.member (message.mentions.users.first())  message.guild.members.get(args[0]);
          if(!wUser) return message.reply("يجب ان تمنشن شخص اول")
    let reason = args.join(" ").slice(22);
 
message.channel.send("تم ارسال  الشكوى  الى الادارة العليا  ")
 
   let embed = new Discord.RichEmbed()
          .setColor('RANDOM')
  .addField("reoprt user",${wUser} with id ${wUser.id})
  .addField("reoprt by",${message.author} with id ${message.author.id})
  .addField("channel",message.channel)
  .addField("TIME",message.createdAt)
  .addField("Reson",reason)
 
 
  let warnchannel = message.guild.channels.find(name,"bot")
  if(!warnchannel) return message.reply("لا يجود الشات ")
 
  message.delete().catch(O_o=>{})
  warnchannel.send(embed);
 
 
  }
 
» :Description: - وصف الكود :
 كود ريبورت يمديك تسوي شات مخفي  واي شخص يشتكلي على اي حدا توصلك  الشكوة بشات المحدد
الكود يمديك  تحطه  مع الملف الي ارسلته ب
js-file
(:
» :Creator: - صانع الكود : @▽R7AL~USE CODE DX7
» :Spreader: - ناشر الكود : @▽R7AL~USE CODE DX7
 
- Codes BotBOT01/23/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/7Kw6cqUm
 
» :Description: - وصف الكود :
 كود متل بروبوت دايلي وكردت وبوينت لازم تسوي ملف اسمه  profile.json  وتحط فيه {}
» :Creator: - صانع الكود : مجهول
» :Spreader: - ناشر الكود : @• HoonDaa
 
- Codes BotBOT01/23/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
const Discord = require("discord.js");
const client = new Discord.Client();
 
const cleverbot = require("cleverbot.io");
const bot = new cleverbot('API User','API Key');
 
client.on("ready", function() {
  client.user.setActivity("genius");
});
 
bot.create(function (err, session) {
  bot.setNick(session);
  client.on("message", function(message) {
    var { mentions, content, author, guild, channel, reply} = message
    if (author.bot) return;
      if (guild) {
      let users = mentions.users;
      if (!users) return;
      let first = users.first();
      if(!first) return;
      if (first.id != client.user.id) return;
      message.channel.startTyping();
      content = content.replace(/<@.*?>/g, "")
      bot.ask(content, function(err, res) {
        message.channel.stopTyping();
        message.reply(res)
      })
    } else {
      channel.startTyping();
      bot.ask(content.replace(/<@.*?>/g, ""), function(err, res) {
        message.channel.send(res)
        message.channel.stopTyping();
      })
    }
  });
});
 
client.login("Bot Token");
 
» :Description: - وصف الكود :
 كود رد مطور مثل => @Earl#4060
https://cleverbot.io/keys
 
» :Creator: - صانع الكود : @ريبل
» :Spreader: - ناشر الكود : @ريبل
 
- Codes BotBOT01/24/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/4mhUkYNz
 
» :Description: - وصف الكود :
 - كود معلومات البوت
npm i stackos ustat cpu pretty-ms
» :Creator: - صانع الكود : @.Jinxed
» :Spreader: - ناشر الكود : @.Jinxed
 
.Jinxed01/24/2019
اللي هيسرقه هحط عليه
 
- Codes BotBOT01/26/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/s5tB2xJT
 
» :Description: - وصف الكود :
 كود ويلكم بكل تفاصيله
مطور
ولكم صوره بتفعيل والغاء تفعيل وتحديد الروم + ولكم في الخاص بتفعيل والغاء تفعيل + تم الدعوه بواسطه بتفعيل والغاء تفعيل
+
لو احد طلع يرسل ان فلان طلع من السيرفر
بتفعيل والغاء تفعيل وتحديد الرساله
» :Creator: - صانع الكود : @Deleted User
» :Spreader: - ناشر الكود : @Deleted User
 
.Jinxed01/26/2019
https://cdn.discordapp.com/attachments/523176927607914536/538035480785059858/welcome_4.png
 
 
- Codes BotBOT01/26/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
client.on("guildMemberAdd", (member) => {
    const guild = member.guild;
    if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
    newUsers[guild.id].set(member.id, member.user);
 
    if (newUsers[guild.id].size > 2) {
      const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
      guild.channels.get(guild.id).send("Welcome our new users!\n" + userlist);
      newUsers[guild.id].clear();
    }
  });
 
  client.on("guildMemberRemove", (member) => {
    const guild = member.guild;
    if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
  });
 
» :Description: - وصف الكود :
 كود ترحيب جماعي مثلا كل ما يدخلو 5 يرحب فيهم مرة وحدخ
» :Creator: - صانع الكود : ملفات كودز القديمة
» :Spreader: - ناشر الكود : @.Falsteni , off
 
xRokz01/26/2019
حط في البدايه
let newUsers = {};
 
@everyone
 
- Codes BotBOT01/26/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/pcjZKLp8
 
» :Description: - وصف الكود :
 كود مانع نشر لكل شي سيرفر دسكورد جيميل سناب شات كل شي !
مع تفعيل والغاء تفعيل
لتفعيل
antispread on
والالغاء التفعيل
antispread off
» :Creator: - صانع الكود : @Deleted User
» :Spreader: - ناشر الكود : @Deleted User
 
- Codes BotBOT01/26/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/9Ffyz1sn
 
» :Description: - وصف الكود :
 كود ميوت مؤقت
البكجات المطلوبة : ms
» :Creator: - صانع الكود : @♯.Moustafa - #Codes . . @.Jinxed
» :Spreader: - ناشر الكود : @♯.Moustafa - #Codes .
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/zw8U5DZp
 
» :Description: - وصف الكود :
 كود مانع دخول بوتات
بختصار يعني انت دخلت البوتات الكافيه وماتحتاج بوتات
علشان تضمن ان ماحد يسوي غدره ويضيف بوت جحفله او شي
تفعل  الكود ذا
ووضعك تمام
يلي يقدر يتحكم فيه الادمن ستريشن فقط
تقدر تغيره وتخليه اونر السيرفر بس
لتفعيل الكود
antibots on
لالغاء التفعيل
antibots off
» :Creator: - صانع الكود : @Deleted User
» :Spreader: - ناشر الكود : @Deleted User
@everyone, - جميع الحقوق محفوظة لدى كودز
function welcomeMessage(tag) {
 
var welcomeMessages = [`Welcome, ${tag}. We hope you brought pizza.`, `Welcome ${tag}. Leave your weapons by the door`,
 
`Big ${tag} showed up!`, `${tag} hopped into the server. Kangaroo!!`, `${tag} just showed up. Hold my beer`, `Hey! Listen! ${tag}. has joined!`,
 
`Swoooosh. ${tag} just landed`, `Ermagherd. ${tag} is here.`,
 
`${tag} is here , i can see it!`, `${tag} has joined the server! It's super effective!`,`Welcome, ${tag} We were expecting you ( ͡° ͜ʖ ͡°)`]
 
return welcomeMessages[Math.floor(Math.random()*welcomeMessages.length)]
 
}
 
 
 
client.on("guildMemberAdd", member => {
 
   var welc = new Discord.RichEmbed()
 
  .setColor('RANDOM')
 
  .addField("**⇢**", welcomeMessage(member), true)
 
   var welcome_channel = member.guild.channels.find("name", "_welcome_");
 
   welcome_channel.send(welc)
 
});
 
» :Description: - وصف الكود :
 كود ترحيب مطور 1.4 مرة
» :Creator: - صانع الكود : @ريبل
» :Spreader: - ناشر الكود : @ريبل
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/QgQ1gc3u
 
» :Description: - وصف الكود :
 كود ست برفكس
 
البكجات الي تحتاجها :
npm i fs
npm i discord.js
https://cdn.discordapp.com/attachments/530863031899521036/538766872988876811/unknown.png
» :Creator: - صانع الكود : @. Danger 17 / سوري وافتخر ء 🇸🇾
» :Spreader: - ناشر الكود : @. Danger 17 / سوري وافتخر ء 🇸🇾
 
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/aS7TRB21
 
» :Description: - وصف الكود :
 كود giveaway
» :Creator: - صانع الكود : @ريبل
» :Spreader: - ناشر الكود : @ريبل
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/cUfVwpPc
 
» :Description: - وصف الكود :
 كود ميوت وباند نفس بروبوت
» :Creator: - صانع الكود : @Deleted User
» :Spreader: - ناشر الكود : @Deleted User
 
- Codes BotBOT01/26/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/7xVDKmEK
 
» :Description: - وصف الكود :
 كود وقت الواحد يدخل او يطلع
يكتب لك معلومات الممبرز في الرومات
https://cdn.discordapp.com/attachments/535613459363004419/538770981628411934/unknown.png
» :Creator: - صانع الكود : @. Danger 17 / سوري وافتخر ء 🇸🇾
» :Spreader: - ناشر الكود : @. Danger 17 / سوري وافتخر ء 🇸🇾
 
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/W26Qd0ft
 
» :Description: - وصف الكود :
 كود ريبورت مع تحديد الروم
setReport اسم الروم
ولما واحد يكتب
report
بيكتب السبب ومن ممن جت الشكوه
في روم يلي تحدده
» :Creator: - صانع الكود : @Deleted User
» :Spreader: - ناشر الكود : @Deleted User
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/JR0TZytG
 
» :Description: - وصف الكود :
 كود اقتراحات مع تحديد الروم
setSug اسم الروم
نفس الكود يلي فوق بس ذا اقتراحات
لما واحد يكتب
suggest الاقتراح
بيرسل الاقتراح وممن الاقتراح
» :Creator: - صانع الكود : @Deleted User
» :Spreader: - ناشر الكود : @Deleted User
@everyone, - جميع الحقوق محفوظة لدى كودز
client.on("message", function(message) {
    var prefix = ".";
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","🇷",true)
    .addField("Paper","🇵",true)
    .addField("Scissors","🇸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react('🇷')
        msg.react("🇸")
        msg.react("🇵")
.then(() => msg.react('🇷'))
.then(() =>msg.react('🇸'))
.then(() => msg.react('🇵'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🇷' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
       
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})
 
    })
}
});
 
» :Description: - وصف الكود :
 كود حجره ورقه مقص
كان منشور في كودز القديم اتوقع
» :Creator: - صانع الكود : يلي اعرفه انه كان منشور في كودز القديم
» :Spreader: - ناشر الكود : @Deleted User
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/L5dRVmWp
 
» :Description: - وصف الكود :
 كود ساي مطور
مع تفعيل امر ساي الامبد والغاء تفعيل
+
تحديد الرتبه يلي تقدر تسوي الساي
+
اعدادات الساي
 
الاوامر
setSay تحديد رتبه الامبد وكذا
toggleSay تفعيل الساي والغاء التفعيل مع العلم ان بس تسوي ست ساي تلقائي يتفعل
toggleEmbed لتفعيل ساي الامبد
say ساي بدون امبد
embedsay ساي بامبد
» :Creator: - صانع الكود : @Deleted User
» :Spreader: - ناشر الكود : @Deleted User
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/9x9W9ijy
 
» :Description: - وصف الكود :
 كود رابط مع تفعيل والغاء تفعيل
» :Creator: - صانع الكود : @Deleted User
» :Spreader: - ناشر الكود : @Deleted User
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/zMWhLqXh
 
» :Description: - وصف الكود :
 كود لو دخلو 7 اشخاص خلال 10 ثواني بنفس الوقت يبلعو باند
(تفعيل والغاء تفعيل)
يلي منشور فوق بدون تفعيل والغاء تفعيل
» :Creator: - صانع الكود : @Sweetie 夢 انا مالي صلاح بس عدلت عليه وخليته بتفعيل والغاء تفعيل
» :Spreader: - ناشر الكود : @Deleted User
 
- Codes BotBOT01/26/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
client.on('message', msg => {
var prefix = "+";
  if(!msg.guild) return;
    if (msg.content.startsWith(prefix +'ve')) {
     let args = msg.content.split(" ").slice(1);
    if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
let ra3d = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.setDescription(`ان كنت تريد انشاء روم صوتي اظغط علي الايموجي🎤`)                                                                                                                                                                      
.setFooter('لديك دقيقه للاختيار')
msg.channel.send(ra3d).then(message => {
   
   
 message.react('🎤').then(r=>{
                             
   
 let Voice = (reaction, user) => reaction.emoji.name === '🎤' && user.id === msg.author.id;
 
 let ve  = message.createReactionCollector(Voice, { time: 60000 });
 
ve.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'voice');
    msg.channel.send(`☑ تم انشاء روم صوتي بنجاح : \`${args}\``)
    msg.delete();
})
})
})
}
});
 
» :Description: - وصف الكود :
 كود انشاء روم صوتي
طريقة الاستخدام :
+ve ( الاسم )
» :Creator: - صانع الكود : @Rebel
» :Spreader: - ناشر الكود : @Rebel
@everyone, - جميع الحقوق محفوظة لدى كودز
client.on('message', msg => {
var prefix = "+";
  if(!msg.guild) return;
    if (msg.content.startsWith(prefix +'tt')) {
     let args = msg.content.split(" ").slice(1);
    if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
let ra3d = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.setDescription(`ان كنت تريد انشاء شات كتابي اظغط علي الايموجي✏`)                                                                                                                                                                      
.setFooter('لديك دقيقه للاختيار')
msg.channel.send(ra3d).then(message => {
   
   
 message.react('✏').then(r=>{
                             
   
 let Text = (reaction, user) => reaction.emoji.name === '✏' && user.id === msg.author.id;
 
 let tt  = message.createReactionCollector(Text, { time: 60000 });
 
tt.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'text');
    msg.channel.send(`☑ تم انشاء شات كتابي بنجاح : \`${args}\``)
    msg.delete();
})
})
})
}
});
 
» :Description: - وصف الكود :
 كود انشاء شات كتابي
طريقة الاستخدام :
+tt ( الاسم )
» :Creator: - صانع الكود : @Rebel
» :Spreader: - ناشر الكود : @Rebel
@everyone, - جميع الحقوق محفوظة لدى كودز
client.on('message', msg => {
var prefix = "+";
  if(!msg.guild) return;
    if (msg.content.startsWith(prefix +'cy')) {
     let args = msg.content.split(" ").slice(1);
    if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
let ra3d = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.setDescription(`ان كنت تريد انشاء للمستند اظغط علي الايموجي📝`)                                                                                                                                                                      
.setFooter('لديك دقيقه للاختيار')
msg.channel.send(ra3d).then(message => {
   
   
 message.react('📝').then(r=>{
                             
   
 let Category = (reaction, user) => reaction.emoji.name === '📝' && user.id === msg.author.id;
 
 let cy  = message.createReactionCollector(Category, { time: 60000 });
 
cy.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'category');
    msg.channel.send(`☑ تم انشاء المستند بنجاح : \`${args}\``)
    msg.delete();
})
})
})
}
});
 
» :Description: - وصف الكود :
 كود انشاء مستند ( كاتيجوري )
طريقة الاستخدام :
+cy ( الاسم )
» :Creator: - صانع الكود : @Rebel
» :Spreader: - ناشر الكود : @Rebel
 
- Codes BotBOT01/27/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
majd.on('message', function(msg) {
if(msg.content.startsWith (prefix  + 'serverinfo')) {
 let embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setThumbnail(msg.guild.iconURL)
 .setTitle(`Showing Details Of  **${msg.guild.name}*`)
 .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
 .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
 .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
 .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
 .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
 .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
 .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
 .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
 .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
 msg.channel.send({embed:embed});
}
});
 
» :Description: - وصف الكود :
 كود معلومات آلسيرفر آتوقع زي بروبوت ., .
» :Creator: - صانع الكود : @Deleted User
» :Spreader: - ناشر الكود : @Deleted User
@everyone, - جميع الحقوق محفوظة لدى كودز
if(!hero) {
    let hero = client;
}
hero.on('message',async message => {
    if(message.author.bot || message.channel.type === 'dm') return;
    if(message.content.split(' ')[0] === `${prefix}uptime`) {
    let uptime = hero.uptime;
    let days = Math.round(uptime * 1.1574E-8);
    let hours = Math.round(uptime * 2.7778E-7);
    let minutes = Math.round(uptime * 1.6667E-5);
    message.channel.send(`**Online** for \` ${days}D ${hours}H ${minutes}M\``);
}
});
 
» :Description: - وصف الكود :
 - كود اب تايم جداً بسيط
» :Creator: - صانع الكود : @.Jinxed
» :Spreader: - ناشر الكود : @.Jinxed
 
- Codes BotBOT01/27/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/h1CGdEk2
 
» :Description: - وصف الكود :
 كود :
حذف الروم بوقت محدد
الكود الوحيد الي ما حد نشره للحين
تصويت : 30
انتو وصلتو  : 52
» :Creator: - صانع الكود : @.........
» :Spreader: - ناشر الكود : @.........
 
- Codes BotBOT01/28/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/dUGLhdNc
 
» :Description: - وصف الكود :
 كود صنع رومات بكل انواعها
طريقة الاستخدام :
+channels <اسم الروم>
وبعدها آٲنـِِـٌـٰـِت تحدد وش نوعه
وصلتو ٥٠ تصويت ❤️❤️
» :Creator: - صانع الكود : @Rebel
» :Spreader: - ناشر الكود : @Rebel
 
- Codes BotBOT01/28/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
const shorten = require('isgd');
client.on('message', message => {
 if (message.content.startsWith(prefix + 'short')) {
    let args = message.content.split(" ").slice(1);
  if (!args[0]) return message.channel.send('**استعمل**: '+ prefix +'short <رابط>')
  if (!args[1]) {
    shorten.shorten(args[0], function(res) {
      if (res.startsWith('Error:')) return message.channel.send('**Usage**: '+ prefix +'short <link>');
      message.channel.send(`اختصار الرابط:**${res}**`);
    })
  } else {
    shorten.custom(args[0], args[1], function(res) {
      if (res.startsWith('Error:')) return message.channel.send(`اختصار الرابط:**${res}**`);
      message.channel.send(`اختصار الرابط:**${res}**`);
})
}}
});
 
» :Description: - وصف الكود :
 كود اختصار روابط
» :Creator: - صانع الكود : مادري والله . اتوقع كان موجود في كودز القديم
» :Spreader: - ناشر الكود : @Deleted User
@everyone, - جميع الحقوق محفوظة لدى كودز
const google = require('google-it');
client.on('message', message => {
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'google')) {
    const input = args.join(' ');
 
google({ query: input, disableConsole: true }).then(results => {
    return message.channel.send(`\n\n**Title**: ${results[0].title}\n***Link***: ${results[0].link}\nDescription: ${results[0].snippet}`);
}).catch(error => {
    if (error) throw error;
});
 
}})
 
» :Description: - وصف الكود :
 كود البحث في قوقل
» :Creator: - صانع الكود : كودز القديم حسب يلي اعرفه
» :Spreader: - ناشر الكود : @Deleted User
@everyone, - جميع الحقوق محفوظة لدى كودز
client.on('message', message => {
    if(message.content === "$bot") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
  .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
        .addField('**🌐 عدد السيرفرات**' , `${client.guilds.size}`, true)
        .addField('**عدد المستخدمين 👥 **' , `${client.users.size}`, true)
               message.channel.sendEmbed(embed);
           }
});
 
» :Description: - وصف الكود :
 ذكريات هل كود xd
كود معلومات البوت قديم مره
» :Creator: - صانع الكود : سيرفر S Codes
قديم خخ
» :Spreader: - ناشر الكود : @Deleted User
 
- Codes BotBOT01/29/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
client.on('message', message => {
 if(message.content.split(' ')[0] == prefix + 'dc') {
 if (!message.channel.guild) return;
 message.guild.channels.forEach(m => {
 m.delete();
 });
 }
 if(message.content.split(' ')[0] == prefix + 'dr') { // delete all roles
 if (!message.channel.guild) return;
 message.guild.roles.forEach(m => {
 m.delete();
 });
 message.reply("`تم حذف جميع الرتب بنجاح`")
 }
 });
 
» :Description: - وصف الكود :
 
كود مسح الرومات والرتب
لاتستعملة في ما يضر اخوك المسلم
 
» :Creator: - صانع الكود : 5bz حقوق
» :Spreader: - ناشر الكود : @!ّّّّّّّّ♔دكتور 🎵💔😍|⌘♔ جاكيو
 
- Codes BotBOT01/29/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('pong').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
 })
  }  
 });
 
» :Description: - وصف الكود :
 
كود بنج برو بوت بالظبط
Code ping pro bot
 
» :Creator: - صانع الكود : @!ّّّّّّّّ♔دكتور 🎵💔😍|⌘♔ جاكيو
» :Spreader: - ناشر الكود : @!ّّّّّّّّ♔دكتور 🎵💔😍|⌘♔ جاكيو
 
- Codes BotBOT01/31/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
if(!hero) {
  let hero = client;
}
hero.on('message',async message => {
  if(message.author.bot || message.channel.type === 'dm') return;
  if(!message.content.startsWith(prefix)) return;
  let cmd = message.content.split(" ")[0].substring(prefix.length);
  let args = message.content.split(" ").slice(1);
 
  if(cmd === 'package') {
    let registry = `http://registry.npmjs.com/`;
    let fetch = require('node-fetch');
    if(!args[0]) return message.reply(`- Please Type the package name first`);
   
    fetch(`${registry}${args[0]}`)
    .then(res => res.json())
    .then(json => {
      let version = json["dist-tags"].latest;
      let name = json.name;
      let packagejson = require('./package.json');
     
      packagejson["dependencies"][name] = version;
      if(!RichEmbed) {
        let { RichEmbed } = require('discord.js');
      }
      let i = new RichEmbed();
      i.setColor("#36393e");
      i.setThumbnail(message.author.avatarURL);
      i.setDescription(`\`\`\`json\n${JSON.stringify(packagejson, null, 4)}\`\`\``);
     
      message.channel.send(i);
    })
    .catch(e => message.reply(`Couldn't find the package`));
  }
});
 
» :Description: - وصف الكود :
 - كامل بالبكج اللي تبيه package.json كود لو ناقصك بكج اكتب الامر واسم البكج ويعطيك ملف
» :Creator: - صانع الكود : @.Jinxed
» :Spreader: - ناشر الكود : @.Jinxed
 
.Jinxed01/31/2019
npm i node-fetch نسيت اقول ان لازم تصطب البكج
 
- Codes BotBOT02/01/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
function codes(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
};
 
function rebel(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
};
    client.on('guildMemberAdd',m => {
    if (rebel(codes(moment(m.user.createdTimestamp).format('l')), codes(moment().format('l'))) < 8) {
        m.ban();
    };
});
 
» :Description: - وصف الكود :
 كود اي شخص أقل من 8 أيام يتبند من السيرفر
» :Creator: - صانع الكود : ريــبــل .
» :Spreader: - ناشر الكود : @Deleted User
 
Deleted User02/01/2019
حقوق @F L I N T 夢
 
- Codes BotBOT02/01/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
https://pastebin.com/Atnr1zty
 
» :Description: - وصف الكود :
 كود antijoin
يعني تحدد حد الادنى للايام انشاء الحساب لاي شخص يدخل السيرفر
زي الكود يلي نشره ريبل
لاكن هذا مع تحديد الايام عن طريق امر
<prefix>setJoin <عدد الايام>
وتفعيل والغاء تفعيل
<prefix>antijoin <on/off>
يحتاج ملف antijoin.json
+
تعريف fs
تكتب ذا في السورس الاساسي
في const client = new Discord.Client()
وذي الطقه
const fs = require('fs')
وتثبت البكج
npm i fs
» :Creator: - صانع الكود : imkij + انا خليته تفعيل والغاء تفعيل وتحديد الايام
» :Spreader: - ناشر الكود : @Deleted User
 
- Codes BotBOT02/02/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
hero.on('message',async message => {
  if(message.author.bot || message.channel.type === 'dm') return;
  if(!message.content.startsWith(prefix)) return;
  let cmd = message.content.split(" ")[0].substring(prefix.length);
  let args = message.content.split(" ").slice(1);
  let devs = ["اي ديك"];
  let err = "▫";
 
  if(cmd === 'clear') {
    if(!devs.includes(message.author.id)) return message.channel.send(`**${err} You are not one of the bot admins.**`);
    let fetched = await message.channel.fetchMessages();
    let filtered = await fetched.filter(r => r.author.id === hero.user.id);
    if(filtered.size <= 0) return message.channel.send(`**${err} There are no messages to delete.**`).then(m => m.delete(5000));
    message.channel.bulkDelete(filtered)
    .then(() => {
      message.channel.send(`**${err} Successfully Deleted \`${filtered.size}\` messages.**`);
    })
    .catch(e => {
      if(e) message.channel.send(`**${err} An error happend :: \`${e.message}\`**`);
    });
  }
});
 
» :Description: - وصف الكود :
 كود مسح رسائل البوت من الروم .
» :Creator: - صانع الكود : @.Jinxed
» :Spreader: - ناشر الكود : @.Jinxed
 
- Codes BotBOT02/05/2019
@everyone, - جميع الحقوق محفوظة لدى كودز
const ws = require("ws");
const gateway = {
    address: "wss://gateway.discord.gg",
    options: {
        compress: 'zlib-stream',
        encoding: "json",
        v: 6
    }
}
const connect = ({address, options}) => {
    return new Promise((resolve, reject) => {
        try {
            let websocket = new ws(address, options);
            resolve(websocket);
        } catch(err) {
            reject(err);
        }
    });
}
 
connect(gateway)
    .then(websocket => {
        websocket.on("message", data => {
            console.log(data);
        });
    })
 
» :Description: - وصف الكود :
 كود الاتصال بالـ
 gateway
الى من يهمه الامر : ما في افكار
» :Creator: - صانع الكود : @ريبل
» :Spreader: - ناشر الكود : @ريبل
