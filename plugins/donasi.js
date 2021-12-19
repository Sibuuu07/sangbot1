let handler = async m => m.reply(`
👽 Owner is rich, he doesn't need your money.
Just Need Your Support on Instagram follow us on https://instagram.com/yugesh.the_techie
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
