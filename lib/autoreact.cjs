// Emojis array
const emojis = ['💗', '💓', '💕', '💚', '💙', '❣️'];

async function doReact(emoji, mek, gss) {
  try {
    const react = {
      react: {
        text: emoji,
        key: mek.key,
      },
    };

    await gss.sendMessage(mek.key.remoteJid, react);
  } catch (error) {
    console.error('Error sending auto reaction:', error);
  }
}

module.exports = { emojis, doReact };
