let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.acceptInvite(code)
    m.reply(`Successfully joined the group ${res.gid}`)
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['premium']

handler.command = /^join$/i

handler.owner = false 
handler.mods = true

module.exports = handler
