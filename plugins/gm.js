let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let str = `
Good Morning 🌅  *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*\nMake Your Dream True 🌟
`.trim()
    conn.reply(m.chat, str, m)
    //await conn.sendButton(m.chat, `QUOTES`, '```© Gariox```', '.quotes', m)
    throw 0
}
handler.customPrefix = /^(gm|good morning|Good morning World|GM|VGM|Morning|)$/i
handler.command = new RegExp

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
