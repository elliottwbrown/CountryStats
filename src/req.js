const request = require('request');

const options = {
  method: 'POST',
  url: 'https://api.openai.com/v1/completions',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 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'
  },
  body: JSON.stringify({
    "model": "text-davinci-003",
    "prompt": "Give me a recipe for cabbage, ground beef, small potates, carrots, broccoli and onions?",
    "max_tokens": 1128
  })
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  var x=JSON.parse(body);
  console.log(x.choices[0].text);
});