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
     'Server-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlF6Y3hRVEl5UkRVeU1qYzNSakEzTnpKQ01qVTROVVJFUlVZelF6VTRPRUV6T0RreE1UVTVPQSJ9.eyJpc3MiOiJodHRwczovL2FjbmFwaS1wcm9kLmF1dGgwLmNvbS8iLCJzdWIiOiI0ZFNobVBpOFRTM3pwd3NCVjBUNElseERndHcxSlJuNkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9wbGFjZWhvbGRlci5jb20vcGxhY2UiLCJpYXQiOjE1NDk5NTI5MTksImV4cCI6MTU1MjU0NDkxOSwiYXpwIjoiNGRTaG1QaThUUzN6cHdzQlYwVDRJbHhEZ3R3MUpSbjYiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.iqbAGJ4SDMcZ-U8bBs-bzK2mllpD0jfGNnZbjUinX4wkVVLCG8AfjZsCYh14iQTlo4gyuoDx-QpMbpornGoJOH82TYTatH6H2YRCm4DIJfcjQq0PxLAH5OVIyA_9LMIDjvQ_vVg0IIdJa5hxUQGh5u4RD5-q8AMwGQyr3-8LD0wPHXOyfplUXuGjr5vHS-rzYmogSW6DXavjxSkZGPaFZKvxQ5k5QE5utti3Aph_TPpkiHGGArbhaWTdXZYTnkab9rmmxJPgRRu1ao2ijKS29W0C05bQg_AoXAhjifn_AVVwYZX0w4lx9mhif3Bvp6pSYiKNntnyJHBocw2VqyygSg' },
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
