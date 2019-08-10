const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const search = process.argv[2]
if (!search) {
    console.log('Please provide an address.')
} else {
    geocode(search, (error, data) => {
        if (error) {
            return console.log(error)
        }
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(data)
            console.log(forecastData)
        })
    })
}

