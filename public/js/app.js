console.log('test if client side js is loaded...')

// fetch('http://localhost:4000/api/weather?address=!').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             return console.log({error: data.error})
//         }
//         return console.log(data)
//     })
// })

const weatherForm = document.querySelector('form')
const query = document.querySelector('input')
const resultMsg = document.querySelector('#forecast-result')
const errorMsg = document.querySelector('#status-message')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    errorMsg.textContent = 'Loading...'
    resultMsg.textContent = ''
    fetch(`http://localhost:4000/api/weather?address=${query.value}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return errorMsg.textContent = data.error
            }
            errorMsg.textContent = 'Complete!'
            return resultMsg.textContent = data.forecast
        })
    })
})
