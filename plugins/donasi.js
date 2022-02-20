let handler = async m => m.reply(`
╭─「 Donasi 」
│ • dana [088245009287]
│ • gojek [088245009287]
╰────

╭─「 Donasi • Non Pulsa 」
│ • subscribe channel Arie tube
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
