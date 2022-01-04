const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=8c0710b6e20e2d0e99cd0c6d98e69424&query=" + latitude + "," + longitude + ""
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Getting some error", undefined)
        } else if (body.error) {
            callback("Unable to find location", undefined)
        } else {
            let s = "Currently it is " + body.current.temperature + " but it feels like " + body.current.feelslike +
                ". Current local time is " + body.location.localtime + " with " + body.current.humidity + "% humidity."
            callback(undefined, s)
        }
    })
}

module.exports = forecast