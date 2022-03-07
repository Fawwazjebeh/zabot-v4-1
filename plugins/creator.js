const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = "BEGIN:VCARD\nVERSION:3.0\nN:1;ZhrBot-MD;;;\nFN:ZaBot-MD\nitem1.TEL;waid=6281284843853:+62 812-8484-3853\nitem1.X-ABLabel:Ponsel\nX-WA-NAME:Fwz\nEND:VCARD"
                conn.sendMessage(m.chat, { contacts: { contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
