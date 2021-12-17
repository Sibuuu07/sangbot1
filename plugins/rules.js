let handler = async m => m.reply(`
💝 *Yugesh's Biography*
┌──〔Bio 
┊Name: Yugesh Singh                 
┊Age: 14+                    
┊Area: From India         
┊life status: Not Single                
┊Name of Queen Not to be Revealed       
┊Interested: Programming          
┊Behaviour: Good ( = Awesome ) Bad ( Your Dad 😈 )               
┊Contact on WhatsApp          
┊Call = Block       
┊Hate/Rushed = Block              
┊Instagram: https://instagram.com/soulyt68            
┊YouTube: Y8 SouL                
┊Studying in 9th     
┊Bio of Yugesh.  
└───────────𔒝')

`.trim()) // Tambah sendiri kalo mau
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^rules$/i

module.exports = handler
