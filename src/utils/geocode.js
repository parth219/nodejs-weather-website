const request = require('request')
const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiYWRtaW4yMTk4IiwiYSI6ImNrdnJ6YjV4NTBjd2YzMGx5MGNkcWg4Y2kifQ.ZIDE3KkN37xZWHyEYhAKqg"
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location', undefined)
        } else if (body.features.length == 0) {
            callback('Got 0 search results', undefined)
        } else {
            let latitude = body.features[0].center[1]
            let longitude = body.features[0].center[0]
            let location = body.features[0].place_name
            callback(undefined, {
                latitude,
                longitude,
                location
            })
        }
    })
}
module.exports = geocode