const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

forecast(123, 44, (error, data) => {
    console.log(error)
    console.log(data)
})