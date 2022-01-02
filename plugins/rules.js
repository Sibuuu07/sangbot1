let handler = async m => m.reply(`
💝 *Sibu's Biography*
┌──〔Bio 
┊Name: Sib                 
┊Age: 18                   
┊Area: From India         
┊life status: Not Single                
┊Name of Queen Not to be Revealed       
┊Interested: Programming          
┊Behaviour: Good ( = Awesome ) Bad ( Your Dad 😈 )               
┊Contact on WhatsApp :Wa.me/+16149448340         
┊Call = Block       
┊Hate/Rushed = Block              
┊Instagram: https://instagram.com/Sibssssssss   
┊Studying in 12th     
┊Bio of Sibu.  
└───────────𔒝')

`.trim()) // Tambah sendiri kalo mau
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^rules$/i

module.exports = handler
