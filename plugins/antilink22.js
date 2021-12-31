const { MessageType } = require('@adiwajshing/baileys')
let handler = async function(m, { conn , args, text, isAdmin, isBotAdmin, groupMetadata }) {

  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let asu = m.sender
  let vir = asu.split("@s.whatsapp.net")[0]
  if (!m.isGroup) { 
    await m.reply('_Dont Send Links !?!?_')
    conn.blockUser(m.sender, "add")
  } else {
    await conn.reply(m.chat, `
*[ ANTI LINK ]*
_Detected *@${asu.split("@")[0]}* send Link!_
Sorry you will be kicked by *BY_SANG*
`.trim(), m, { 
      contextInfo: {  
        mentionedJid: [asu]
      }
    })
 if (isBotAdmin) {
   conn.groupRemove(m.chat, [asu])
     } else { 
     	m.reply('```MAKE BOT_SANG AS ADMIN !!!```')
    }
  } conn.sendMessage(vir + '@s.whatsapp.net', `${m.text}`, MessageType.text)
}
handler.customPrefix = /https|youtu.be|https||https|vt.tiktok.com|https/i
handler.command = new RegExp

handler.fail = null

module.exports = handler
