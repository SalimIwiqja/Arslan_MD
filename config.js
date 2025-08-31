const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU5oeU5TaWZqbC9TM0crdC9SRXY2WXVWVkxMS3JEWHowZnNDWGdHMndHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0xoRzBYMGFCVFI2UzBHaHRNNitPcGZ1Q3llRWFwTUpRdE9hdkp6eHVtZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQVdqeGtXYm93cStqTlZjRm50WDkrS1MvcFBsT1BaMXFSejR4RndkNDNZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSQWFWSUdEeVZXUVV5SEhpMFdCUnA1WFgwL3pISGRUMVFUVmRscTZ4cmdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVLNU8zQ0pVbjA0RUpGd3RmQm9CS2VLS0g5MFdYN04zV2FMaHBwTUFCRzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijl1c2R5S2lsbSs3Wm9jaUxtb3ZnMURIbzF2c2dvYlBxZHFOV2NNcUdiZ1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0huZmR2Q1ppeFJ3bmoyWDAvT29ZOTBqV1NnNlNXZXV1Z3lGdldWS01HMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVd1QWF1ZS84TEtJOVlzb0ZGb3NDYzd4Q2hUTGFRLzFwSXlWNU56endRbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjIyUkExeWJQUzFFTDhCZ1VMcXJOVDh4aHZVeUIyTnJ2R2czRmxmT0lHMVlRc0cvSWF2OG83QnNreEYvWmtHZW5ZS1UrZTZ4empEZGwxaHZkVkdQeENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMsImFkdlNlY3JldEtleSI6InczU2llVjJzOXlUQjBsNnYzaCszR2V1akVyNjczZjdmQU0reStaeUdZbUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjEyNjA1MTU4NDIyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNEODlFQjZCNzAyQzU2MDkxMkQ0NEE3QkFGOUQwOUYyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY2NDkxNTJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIxMjYwNTE1ODQyMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCNEFGRjU1RDQyRUUzNjdCNTAyN0Y3QkE0MjUwOTRCNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2NjQ5MTUyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJOTTVYNTJWNiIsIm1lIjp7ImlkIjoiMjEyNjA1MTU4NDIyOjI3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTk3NTMwNTYyMzg4MjIyOjI3QGxpZCIsIm5hbWUiOiJTYWxpbSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUERJeHJRQ0VMbXQwY1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiN0NTNWcwNkN2NTZadjc3blZMZkhnOUY2WVJtNDBRdFVTUTJ1b0FoeldVbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaW9VaXVUSUlXVGRWOFJRNVhCWUMzOUJMUFZaNE9WVVFDT1U5OXkycERrUzlzaTE5bm1xWUdncDRxMFpFZkdZU1RDSFBtOHZNRzYzaEhodHR6UjBEQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IkdDUkIrZHlMM2YzcmhwU2RlUnhPamR1RU0zbjh6OVRMa3k0VTA2QVMvdEpxbU9lM01nYlJ0dGliK2pSeW9SOWxXL0hWZ1pjWHBIZng2Tm1ZV05KcUF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjEyNjA1MTU4NDIyOjI3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmV3a3VZTk9ncitlbWIrKzUxUzN4NFBSZW1FWnVORUxWRWtOcnFBSWMxbEsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjY0OTE0OSwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEdEEifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/twytnq.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || "#",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Aeson-MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Aeson-MD • Salim",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "212605158422",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Salim",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Aeson-MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/twytnq.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive *ghyrha*",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "212605158422",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
