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
const sgMail = require('@sendgrid/mail'); //sendgrid library to send emails

const app = express(); //alias from the express function

//sendgrid api key
sgMail.setApiKey('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');

app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!

// Welcome page of the express server:
app.get('/', (req, res) => {
    res.send("Welcome to the Sendgrid Emailing Server");
});

app.get('/send-email', (req,res) => {

    //Get Variables from query string in the search bar
    const { recipient, sender, topic, text } = req.query;

    var request = require("request");

var options = { method: 'POST',
  url: 'https://ug-api.acnapiv3.io/swivel/email-services/api/mailer',
  headers:
   { 'Postman-Token': '603d34e3-6390-4e96-bc2c-715498fef871',
     'cache-control': 'no-cache',
     'Content-Type': 'application/json',
     'Server-Token': 'xxx',
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

    //Sendgrid Data Requirements
    // const msg = {
    //     to: recipient,
    //     from: sender,
    //     subject: topic,
    //     text: text,
    // }
    //
    // //Send Email
    // sgMail.send(msg)
    // .then((msg) => console.log(text));
});

// to access server run 'nodemon index.js' then click here: http://localhost:4000/
app.listen(4000, () => console.log("Running on Port 4000"));
