// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const data = require('../../../../../../helpers/helpers.js');

const toppings = [
    {
        "topping": "Rainbow Sprinkles",
        "claim": "To claim, your piece must be about only minor characters."
    },

    {
        "topping": "Whipped Cream",
        "claim": "To claim, your piece must be about one of your adult/teen characters as a child. If it takes place during the time your character is a child but is not about them, it is not whipped cream."
    },

    {
        "topping": "Hot Fudge",
        "claim": "To claim, your piece must be about your villain."
    },

    {
        "topping": "Butterscotch",
        "claim": "To claim, your piece must take place a significant amount of time before your canon. It is about writing about before your characters were born, their parents' lives, their ancestors, the legends and history of your world."
    },

    {
        "topping": "Caramel",
        "claim": "To claim, your piece must take place after the close of your main canon. This is an opportunity to explore the aftermath of your story."
    },

    {
        "topping": "Chopped Nuts (AU)",
        "claim": "To claim, your piece must be contrary to canon. This is an opportunity to explore the 'what-if' scenarios that arise."
    },

    {
        "topping": "A Cherry On Top",
        "claim": "To claim, your piece must push your limits, whether it's in the style (POV, tense, format), content (genres, subjects)."
    },

    {
        "topping": "Cookie Crumbs",
        "claim": "To claim, your piece must revisit a piece you have already written."
    },

    {
        "topping": "Gummy Bunnies",
        "claim": "To claim, your piece should be inspired by a prompt from a source other than RaTs."
    }
];

const selectedTopping = data.toppingGenerator(toppings);


await lib.discord.channels['@0.3.0'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: `Your topping is: `,
  embed: {
    "type": "rich",
    "title": `${selectedTopping.topping}`,
    "description": `${selectedTopping.claim}`,
    "color": 0x5a7dd0
  }
});