
const express = require( 'express');
const app = express()
app.get('/hello', ( request, response )=> {
    response.send( 'hola mundo!!!')
});
app.get('/kaiiizeer', ( request, response )=> {
    response.send( 'U de chile')
});
app.listen (3000, ()=>{
    console. log('Listening at localhost: 3000')
})
    