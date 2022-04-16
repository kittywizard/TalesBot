// authenticates you with the API standard library
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let messageResponse = await lib.discord.channels['@0.3.1'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: [
    `Hey <@!${context.params.event.author.id}>! Type /help for more info!`
  ].join('\n'),
 
  tts: false
});

return messageResponse;
