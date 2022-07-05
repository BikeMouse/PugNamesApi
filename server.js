const express = require('express')
const app = express()
const PORT = 8000

const pugs = {
    'angus': {
        'gender': 'male',
        'fur': 'fawn'
    },
    'berry': {
        'gender': 'female',
        'fur': 'black'
    },
    'chops': {
        'gender': 'male',
        'fur': 'black'
    },
    'donna': {
        'gender': 'female',
        'fur': 'fawn'
    },
    'unknown': {
        'gender': 'unknown',
        'fur': 'unknown'
    },
    'enrico': {
        'gender': 'male',
        'fur': 'fawn'
    },
    'frieda': {
        'gender': 'female',
        'fur': 'black'
    },
    'gerd': {
        'gender': 'male',
        'fur': 'black'
    },
    'hilde': {
        'gender': 'female',
        'fur': 'fawn'
    },
    'ingo': {
        'gender': 'male',
        'fur': 'fawn'
    }
}

app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request, response)=>{
    const pugName = request.params.name.toLowerCase()
    if (pugs [pugName]){
        response.json(pugs[pugName])
    } else {
        response.json(pugs['unknown'])
    }
})

app.listen(PORT,()=>{
    console.log(`The server is now running on port ${PORT}. Woof Woof!`)
})