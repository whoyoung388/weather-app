const express = require('express')
const path = require('path')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs')
// app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        author: 'Yang Hu',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About this page...',
        author: 'Yang Hu',
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        description: 'Find some helpful info here.',
        author: 'Yang Hu',
    })
})

app.get('/help', (req, res) => {
    res.send('Help page')
})

app.listen(4000, () => {
    console.log('Server is up on port 4000.')
})