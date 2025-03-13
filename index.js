
const express = require( 'express');
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.get('/hello', ( request, response )=> {
    response.send( 'Hello World!!!')
});
app.listen (3000, ()=>{
    console. log('Listening at localhost: 3000')
})
    