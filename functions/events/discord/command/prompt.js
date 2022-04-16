const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const data = require('../../../../helpers/helpers.js');

//grab the options array 
const options = context.params.event.data.options;
console.log(options);

let msgArray = [];

//need to check options array before calling function
//change to a switch statement within? 
if (options.length == 0) {
  //no options given, use default parameters
   msgArray = data.displayData();
} else if(options.length == 1) {
      if(options[0].type == 4) {
      //number
      msgArray = data.displayData(options[0].value, '');
    } else{
      //string
      msgArray = data.displayData(1, options[0].value);
    }
  
} else {
  //both provided
  msgArray = data.displayData(options[1].value, options[0].value);
}
//display array  
let fieldsObj = [];

console.log(msgArray)
  
//map array to create an object with the fields info inside of it
const mappedArray = msgArray.map(msg => {
  if(msg.name== "Error!") {
    fieldsObj = msgArray;
  } else {
    let obj = {
      name: msg.flavor,
      value: `
              Theme: ${msg.theme}
              
              ${msg.number}. ${msg.prompt}`
    };
    fieldsObj.push(obj);
    
    obj = {};
  }

  });
  
let message = await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Prompts:`,
      "description": ``,
      "color": 0x00FFFF,
      "fields": fieldsObj
    }
  ]
});

return message;