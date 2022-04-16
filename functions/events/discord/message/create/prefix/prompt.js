// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const data = require('../../../../../../helpers/helpers.js');


let msgObj = data.displayData();
console.log(msgObj);

await lib.discord.channels['@0.3.0'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: `Your prompt is: `,
  embed: {
    "type": "rich",
    "title": `${msgObj.flavor}`,
    "description": `${msgObj.theme}
                    
                    **${msgObj.number}.** ${msgObj.prompt}`,
    "color": 0x5a7dd0
  }
});