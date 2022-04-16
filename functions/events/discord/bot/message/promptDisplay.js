// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

 let promptDisplay = await lib.discord.channels['@0.0.6'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `<@!${context.params.event.member.user.id}>, here's your requested prompts!`,
     embed: {
      "type": "rich",
      "title": `just display something`,
      "description": `ahhhhhhh`,
      "color": 0x5a7dd0
    }
  });

return promptDisplay;