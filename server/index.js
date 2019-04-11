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
const axios = require('axios');
const twilio = require('twilio');

app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!

//twilio sms
// const accountID= '_ACCOUNT_ID';
// const authToken = '_AUTH_TOKEN';
const accountID= 'AC36ea56c656c40ea6543efb53f442b04f';
const authToken = 'dd41ba3459522ca0638f57a422df44d4'
const client = new twilio(accountID, authToken);

app.get('/send-text', (req, res) => {
  //get text
  const { recipient, textmessage } = req.query;

  //send textmessage
  client.messages.create({
    body: textmessage,
    to: "+65" + recipient,
    //from: "__NO__FROM__TWILIO"
    from: "+12672140818"
  }).then((message) => console.log(message.body));
})

// Welcome page of the express server:
app.get('/', (req, res) => {
    res.send("Welcome to Emailing Server");
});

//for sending email
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
       //'Server-Token': 'replace_with_your_own_server_tokenn'},
       'Server-Token': 'replace_with_your_own_server_tokenn'},
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

//for sending confirmation email
app.get('/confirmation_email', (req,res) => {
    res.send("hmmmm");
    //Get Variables from query string in the search bar
    const { recipient} = req.query;
    console.log("here");
    var request = require("request");
    var options = { method: 'POST',
    url: 'https://ug-api.acnapiv3.io/swivel/email-services/api/mailer',
    headers:
     { 'Postman-Token': '9518b75f-e3c0-44aa-85ce-9afdfc7310a0',
       'cache-control': 'no-cache',
       'Content-Type': 'application/json',
       //'Server-Token': 'replace_with_your_own_server_token'},
       'Server-Token': 'replace_with_your_own_server_tokenn'},
      body:
     { subject: "Thank you for sending us your feedback",
       sender: '100@accenture.com',
       recipient: recipient,
       html: 'thank you' },
      json: true };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
        console.log(body);
    });
});

app.get('/AdminConfirmation_email', (req,res) => {
    res.send("hmmmm");
    //Get Variables from query string in the search bar
    const { sender} = req.query;
    console.log("here");
    var request = require("request");
    var options = { method: 'POST',
    url: 'https://ug-api.acnapiv3.io/swivel/email-services/api/mailer',
    headers:
     { 'Postman-Token': '9518b75f-e3c0-44aa-85ce-9afdfc7310a0',
       'cache-control': 'no-cache',
       'Content-Type': 'application/json',
       //'Server-Token': 'replace-with-your-own-server-token'},
       'Server-Token': 'replace_with_your_own_server_tokenn'},
      body:
     { subject: "There is a new feedback log! Please check it!",
       sender: sender,
       // recipient: '_ADMIN_EMAIL_',
       recipient: 'andri_susanto@mymail.sutd.edu.sg',
       html: 'thank you' },
      json: true };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
        console.log(body);
    });
});



// const appID = '_APP_ID';
// const apiKey = '_API_KEY';
var appID = "1424e7726e315b";
var apiKey = "8bc644764d77f50ef8661660302e0fd6623f4fb4";
const agentUID = 'Agent';

const url = 'https://api.cometchat.com/v1';

const headers = {
  'Content-Type': 'application/json',
  appid: appID,
  apikey: apiKey,
};

app.get('/api/create', (req, res) => {
  const data = {
    uid: new Date().getTime(),
    name: (new Date().getTime()).toString()
  };
  axios
    .post(`${url}/users`, JSON.stringify(data), {
      headers,
    })
    .then(response => {
      requestAuthToken(response.data.data.uid)
        .then(token => {
          console.log('Success:' + JSON.stringify(token));
          res.json(token);
        })
        .catch(error => console.error('Error:', error));
    })
    .catch(error => console.error('Error:', error));
});

app.get('/api/auth', (req, res) => {
  const uid = req.query.uid;
  requestAuthToken(uid)
    .then(token => {
      console.log('Success:' + JSON.stringify(token));
      res.json(token);
    })
    .catch(error => console.error('Error:', error));
});

const requestAuthToken = uid => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}/users/${uid}/auth_tokens`, null, {
        headers,
      })
      .then(response => {
        console.log('New Auth Token:', response.data);
        resolve(response.data.data);
      })
      .catch(error => reject(error));
  });
};

app.get('/api/users', (req, res) => {
  console.log("Starting fetching use from server.js.");
  axios
    .get(`${url}/users`, {
      headers,
    })
    .then(response => {
      const { data } = response.data;
      const filterAgentData = data.filter(data => {
        return data.uid !== agentUID;
      });
      res.json(filterAgentData);
    })
    .catch(error => console.error('Error:', error));
    console.log("fetched user successfully from server.js.");
});


// to access server run 'nodemon index.js' then click here: http://localhost:4000/
app.listen(4000, () => console.log("Running on Port 4000"));
