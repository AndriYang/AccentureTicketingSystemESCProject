/*
* Install Dependencies, at the root directory of the project run the statement from below:
* "npm add express cors @sendgrid/mail"
* "npm install -g nodemon"
* To run server, cd to server then use the statement below:
* 'nodemon index.js'
*
MAKE SURE YOU HAVE NODEMON Installed!
For Reference check here: https://www.npmjs.com/package/nodemon
*/

const express = require('express'); //needed to launch server
const cors = require('cors'); //needed to disable sendgrid security

const app = express(); //alias from the express function

app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!

// Welcome page of the express server:
app.get('/', (req, res) => {
    res.send("Welcome to the Sendgrid Emailing Server");
});

app.get('/express_backend', (req,res) => {
    res.send("hmmmm");
    //Get Variables from query string in the search bar
    const { recipient, sender, topic, text } = req.query;


var request = require("request");

var options = { method: 'POST',
  url: 'https://ug-api.acnapiv3.io/swivel/email-services/api/mailer',
  headers:
   { 'Postman-Token': '9518b75f-e3c0-44aa-85ce-9afdfc7310a0',
     'cache-control': 'no-cache',
     'Content-Type': 'application/json',

     //'Server-Token': 'replace-with-your-own-server-token'},
     'Server-Token': 'replace-with-your-own-server-token'},



    body:
   { subject: topic,
     sender: sender,
     recipient: recipient,
     html: text },

  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});


});

// to access server run 'nodemon index.js' then click here: http://localhost:4000/
app.listen(4000, () => console.log("Running on Port 4000"));
