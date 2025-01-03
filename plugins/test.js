const handler = async (m, {conn, args, usedPrefix, command}) => {
  
      await m.reply('you sent '+m.text)
      
};
handler.command = /^(alive|menu|ping|test|sithujaya)$/i;
export default handler;