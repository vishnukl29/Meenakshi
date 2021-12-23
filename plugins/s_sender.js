/* Made with ❤ by @souravkl11
For vishnu ser
All rights reserved (c) 
*/
const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const Config = require('../config');
const buffer = require('buffer')

if (Config.S_SENDER === 'true') {

Asena.addCommand({on: 'text', fromMe: false, onlyPm: true, deleteCommand: false}, (async (message, match) => {    
       
  if (message.message.includes('Send') || message.message.includes('Snd') || message.message.includes('Sent')) {
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        if (message.reply_message.jid.endsWith('net')) {
			if (message.reply_message.image) {
            await message.client.sendMessage(message.jid,' ```Please wait a bit``` ',MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync(location), MessageType.image ,{caption: 'Kondu Pokko'  , mimetype: Mimetype.jpg, quoted: message.data,thumbnail: null});
		return 
        }
       else if (message.reply_message.video) { 
                await message.client.sendMessage(message.jid,' ```Please wait a bit``` ',MessageType.text);
                await message.client.sendMessage(message.jid,fs.readFileSync(location), MessageType.video , {caption: 'Kondu pookko'  , mimetype: Mimetype.mp4, quoted: message.data,thumbnail: null});
        return 
	   }
		}}}));
  
}
