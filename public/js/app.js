console.log('test if client side js is loaded...')

fetch('http://localhost:4000/api/weather?address=!').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            return console.log({error: data.error})
        }
        return console.log(data)
    })
})