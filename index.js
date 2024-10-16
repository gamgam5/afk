const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});

require('dotenv').config();
const { Client } = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require('@discordjs/voice');
const { setTimeout } = require('timers/promises');
////////////////////.   Originals/Kng*Qns  __  11pm's/Psychopats ___ Game Night/LEGENDS ___ Red Box/Chill 1 __ Under World/The Family __ CrowSec/Header ___  LaVilla/LaVillaPark ___     NTL/NTL     __ PNL/ Time to chill 1 ____ PwnCode/General -- 1252421456415952989 _________ Neon City ___
const voiceChannels = ['1294241110599794774','1214053085564117034'];
 

const checkAndJoin = async (client, channelId) => {
  try {
    const channel = client.channels.cache.get(channelId);
    if (!channel) {
      console.error(`Channel not found with ID: ${channelId}`);
      return;
    }

    const guild = channel.guild;
    const member = guild.members.cache.get(client.user.id);

    if (!member) {
      console.error(`Bot is not a member of the guild (${guild.name}) associated with the channel ID: ${channelId}`);
      return;
    }

    const userVoiceState = guild.voiceStates.cache.get(member.id);

    if (!userVoiceState || !userVoiceState.channelId) {
      const voiceConnection = joinVoiceChannel({
        channelId: channel.id,
        guildId: guild.id,
        adapterCreator: guild.voiceAdapterCreator,
        selfMute: true,
        selfDeaf: true,
      });

      voiceConnection.once('stateChange', (state) => {
        if (state.status === 'CONNECTED') {
          console.log(`${member.displayName} is in ${guild.name}`);
          console.log(`Bot joined voice channel ${channel.name} in ${guild.name}`);
        }
      });

      voiceConnection.on('error', (error) => {
        console.error('Error in voice connection:', error);
      });
    }
  } catch (error) {
    console.error('Error checking and joining:', error);
  }
};

voiceChannels.forEach((channelId) => {
  const client = new Client({ checkUpdate: false });

  client.once('ready', () => {
    checkAndJoin(client, channelId);
    setInterval(() => checkAndJoin(client, channelId), 30000);
  });

    
  
  client.login(process.env.token);
});