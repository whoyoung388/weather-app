const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/e2c29712b25f92cd34964b4b2efb3b86/${latitude},${longitude}`
    request({ url, json: true, }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.')
        } else if (!body.currently) {
            callback('Bad query input.', body)
        } else {
            const data = {
                temperature: body.currently.temperature,
                precipitation: body.currently.precipProbability,
                }
            callback(error, data)
        }
    })
}

module.exports = forecast