let handler = async m => m.reply(`
☕ *SangBot :* SangBot is AI whatsapp robot\n\n🔗 *URL :* http://instagram
com/yugesh.the_techie
`.trim()) // repository
handler.help = ['tokio']
handler.tags = ['info']
handler.command = /^sangbot|repo$/i

module.exports = handler
