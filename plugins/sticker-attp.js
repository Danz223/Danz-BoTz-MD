import fetch from 'node-fetch'
 let handler = async (m, { conn, text }) => {
 if (!text) throw `Textnya mana?`
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let res = await fetch(global.API('ibeng', '/maker', '/attp', { file: '', text: teks }))
    conn.sendFile(m.chat, res, 'attp.webp', '', m, false, { asSticker: true })
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']

handler.command = /^attp$/i

export default handler