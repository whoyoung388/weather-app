console.log('test if client side js is loaded...')


const weatherForm = document.querySelector('form')
const query = document.querySelector('input')
const resultMsg = document.querySelector('#forecast-result')
const errorMsg = document.querySelector('#status-message')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    errorMsg.textContent = 'Loading...'
    resultMsg.textContent = ''
    fetch(`/api/weather?address=${query.value}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return errorMsg.textContent = data.error
            }
            errorMsg.textContent = 'Complete!'
            return resultMsg.textContent = data.forecast
        })
    })
})
