const axios = require("axios")

exports.handler = function(event, context, callback) {
  let city = event.queryStringParameters.city
  axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=16e194441a5b8e37c9f463942da1a344")
    .then((response) => {
      console.log(response)
      let tempKelvin = +response.data.main.temp
      let tempCelcius = tempKelvin - 273.15
      let wind = response.data.wind.speed
      callback(null, {
        statusCode: 400,
        body: JSON.stringify({ temp: tempCelcius + 'C°', wind: wind + 'm/s' })
      })
    })
    .catch((error) => {
      console.error(error)
      callback(null, {
        statusCode: 400,
        body: JSON.stringify(error.message)
      })
    })
}
