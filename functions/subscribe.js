const axios = require("axios")
require('dotenv').config()

exports.handler = function(event, context, callback) {
  axios.post(
    "https://us8.api.mailchimp.com/3.0/lists/ddc42508da/members",
    {
      "email_address": event.queryStringParameters.mail,
      "status": "subscribed"
    },
    { auth: {
        username: "remi.stupa@gmail.com",
        password: process.env.API_KEY
      }
    }
  ).then(() => {
    callback(null, {
      statusCode: 200,
      body: "Success"
    })
  }).catch((error) => {
    console.log(error);
    callback(null, {
      statusCode: 400,
      body: "erreur : " + error.message
    })
  })
}
