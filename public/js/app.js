const weatherForm = document.querySelector('form') //makes a connection to this attribute where the file is loaded
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From Javascript' // changes value in html file

weatherForm.addEventListener('submit', (eventObject) => {
    eventObject.preventDefault() // prevents default behaviour of browser i.e doesnt refresh browser when form is submited
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    const url = "/weather?address=" + location
    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
                messageTwo.textContent = ''
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecastData
            }
        })
    })



    console.log(location)
})