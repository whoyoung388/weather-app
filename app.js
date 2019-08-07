const request = require('request')

const url = 'https://api.darksky.net/forecast/e2c29712b25f92cd34964b4b2efb3b86/37.8267,-122.4233'

request({ url: url, json: true, }, (error, response) => {
    console.log(response.body.currently.temperature)
    console.log(response.body.currently.precipProbability)

})


const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?limit=1&access_token=pk.eyJ1IjoibGlua2luZzIwNDYiLCJhIjoiY2p6MXRrcG9jMDEzaDNsbWk4eTl1cXhmMSJ9.5kDYDETiyqiVTU5Iwj4WBw'

request({ url: url2, json: true, }, (error, response) => {
    console.log(response.body.features[0].center);
})