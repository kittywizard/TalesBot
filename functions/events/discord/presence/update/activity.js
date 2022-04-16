// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// Add this to a basic HTTP(S) endpoint and run it directly from the editor
await lib.discord.users['@0.2.0'].me.status.update({
  activity_name: 'Runaway Tales. /help for info'
});