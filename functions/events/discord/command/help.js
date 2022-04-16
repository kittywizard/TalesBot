// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.users['@0.2.0'].dms.create({
  recipient_id: context.params.event.member.user.id, // required
  content: [
    `Hello <@!${context.params.event.member.user.id}>!`,
    `Here's some helpful tips to get started:`
  ].join('\n'),
   embeds: [{
    "type": "rich",
    "title": "Help Menu",
    "description": `TalesBot is a Discord bot that auto-generates writing prompts from Runaway Tales, 
                    a writing community. 
                    For more info about Runaway Tales, visit: 
                    https://sites.google.com/view/rats-data-home/
                    
                    To access the web version of this bot, visit: 
                    https://kittywizard.github.io/RaTsGenerator/
                    
                    Any bugs, issues or concerns, visit the Github repository at: 
                    https://github.com/kittywizard/TalesBot and open an issue.
                    Or hit up kittywizard#9211 on Discord.
                    
                    -------
                    
                    `,
    "color": 0x5a7dd0,
      fields: [{
        name: "/prompt",
        value: `Use this to generate a random prompt from the over 3,500 prompts available. They can be anything from emotions to famous sayings.
                Optional: 
                flavor: type a specific flavor (ex. strawberry). Not case sensitive.
                number: can specify any number of prompts.`
      },
      {
        name: "/help",
        value: "Brings up this message. ;)"
      },
      {
        name: "/topping",
        value: `Use to generate toppings - fun little challenges that you can add to your prompts. (Things like, write from a villain's perspective, minor characters or a character as a child).
                Optional: 
                list: enter true to see a list of all possible toppings. (false will do nothing - this will be fixed in future update)`
      }]
    }]
});