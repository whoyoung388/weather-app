const request = require('request')

const geocode = (address, callback) => {
    const escapeAddress = encodeURIComponent(address);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${escapeAddress}.json?limit=1&access_token=pk.eyJ1IjoibGlua2luZzIwNDYiLCJhIjoiY2p6MXRrcG9jMDEzaDNsbWk4eTl1cXhmMSJ9.5kDYDETiyqiVTU5Iwj4WBw`
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location service', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const info = response.body.features[0]
            callback(undefined, {
                latitude: info.center[1],
                longitude: info.center[0], 
                location: info.place_name,
            })
        }
    })
}

module.exports = geocode