const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "263717869574" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263780405420";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_36_05_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDM2LFxuICAgICAgICAwLFxuICAgICAgICA4OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEwLFxuICAgICAgICA2MixcbiAgICAgICAgNzcsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjExLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQxLFxuICAgICAgICA5NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDYzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDY3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTksXG4gICAgICAgIDUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjksXG4gICAgICAgIDQwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NixcbiAgICAgICAgNDAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDksXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk4LFxuICAgICAgICA3NixcbiAgICAgICAgMjQsXG4gICAgICAgIDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MixcbiAgICAgICAgMjA4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI4LFxuICAgICAgICA0MixcbiAgICAgICAgMTc4LFxuICAgICAgICA3MCxcbiAgICAgICAgODEsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDcyLFxuICAgICAgICA2LFxuICAgICAgICAxODQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDM3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDcxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTMsXG4gICAgICAgIDM0LFxuICAgICAgICA2NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWkRWRDc2a0J3VkY4em9CMGhycGdIclVqb29lMFBlRkR1alBvenFTSVNYYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3ODA0MDU0MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk2OUI0N0Q1NUJGMkI2NjRDQ0I5NjY1ODk1RDA5OTcxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNDk2Mjk3N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc4MDQwNTQyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTA1ODgyQTU3MDVGRDE1RUY4RjRFMkVERUYwNzFCREVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE0OTYyOTc3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdTOVBFNXNDUWpXWWtlbnhmN2dhR3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzM3Y2FlZDItY2VkNC00YzlkLWE2OTgtY2QyNTBhZjNhNDY2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExLFxuICAgICAgMTk0LFxuICAgICAgMjE3LFxuICAgICAgMTAsXG4gICAgICAxNjIsXG4gICAgICA3MixcbiAgICAgIDc3LFxuICAgICAgNjAsXG4gICAgICA0MixcbiAgICAgIDE1MCxcbiAgICAgIDUzLFxuICAgICAgNDUsXG4gICAgICAxMDgsXG4gICAgICAxMjksXG4gICAgICA5MixcbiAgICAgIDkxLFxuICAgICAgMTIyLFxuICAgICAgMTczLFxuICAgICAgMTc1LFxuICAgICAgMTE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMixcbiAgICAgIDIwOSxcbiAgICAgIDIwMyxcbiAgICAgIDE0LFxuICAgICAgMTI4LFxuICAgICAgMjA0LFxuICAgICAgMTc2LFxuICAgICAgMTE0LFxuICAgICAgNTMsXG4gICAgICA2MixcbiAgICAgIDIwOSxcbiAgICAgIDQ0LFxuICAgICAgODgsXG4gICAgICAxNTAsXG4gICAgICA3OCxcbiAgICAgIDE3MSxcbiAgICAgIDEzNCxcbiAgICAgIDI0MSxcbiAgICAgIDIyMSxcbiAgICAgIDE1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBUlZCVFJFN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzgwNDA1NDIwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MDQ1NzA2NjQ5NzU4OjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTeKCrMKj4oKpXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1Rhc3A0QkVKZUU0YkVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0SmU4Kyt0Ym1tTHFMVzhIenFBdFBMa1hWYUl0eFpxTEQ5NTl4NEdBZGdjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkk2MXVOV1VHTTBLKzVxNGJvLzN0VE9SeWYzZkRrTGtBSndraHphL2w3aU9yWkhHSXJhVVo1VEw0TDN1c24xZnMyMENwNmdJcVdBN1JhZHhjNW9aVURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInk0VUxKOXg1eTd4TytDTjVxRm5QeTRNdmNrMjdmV1V6VVZVUjlDYVloMTR5eVhVdUI0djgvQ0ZpVVhGQXlycTAxM21LaEM2MW5FRk16a2RGN3M5V0FBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4MDQwNTQyMDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTQ5NjI5NzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLL1VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUsvVS5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Lilnem",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
