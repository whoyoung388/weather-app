const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/e2c29712b25f92cd34964b4b2efb3b86/${latitude},${longitude}`
    request({ url: url, json: true, }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service.')
        } else if (!response.body.currently) {
            callback('Bad query input.', response.body)
        } else {
            const data = {
                temperature: response.body.currently.temperature,
                precipitation: response.body.currently.precipProbability,
                }
            callback(error, data)
        }
    })
}

module.exports = forecast