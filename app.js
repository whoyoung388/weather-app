const geocode = require('./utils/geocode')

// const url = 'https://api.darksky.net/forecast/e2c29712b25f92cd34964b4b2efb3b86/37.8267,-122.4233'

// request({ url: url, json: true, }, (error, response) => {
//     console.log(response.body.currently.temperature)
//     console.log(response.body.currently.precipProbability)

// })

geocode('boston', (error, data) => {
    console.log(error)
    console.log(data)
})