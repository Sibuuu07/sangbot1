let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let str = `
So Jaiyee 😊 Subha Savere bhi to uthna hai aapko 😊 Aur phir Mobile bhi to chalana hoga Aapko 😂
`.trim()
    conn.reply(m.chat, str, m)
    //await conn.sendButton(m.chat, `QUOTES`, '```© Gariox```', '.quotes', m)
    throw 0
}
handler.customPrefix = /^(gn|good night|Good night World|GN|VGN|Night|Sweet Dream)$/i
handler.command = new RegExp

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
