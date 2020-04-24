const axios = require("axios")

exports.handler = function(event, context, callback) {
  axios.post(
    "https://us8.api.mailchimp.com/3.0/lists/ddc42508da/members",
    {
      "email_address": event.queryStringParameters.mail,
      "status": "subscribed"
    },
    { auth: {
        username: "remi.stupa@gmail.com",
        password: "5007001e0e43d2c9b54f9a0db6dfba22-us8"
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
