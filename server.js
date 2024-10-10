import express from 'express';
import "dotenv/config.js"

const server = express();

const PORT = process.env.PORT || 8080

const ready = () => console.log("Server running in port :"+PORT)

server.get('/',(request,response)=>{
    response.send('Hola mundo Express')
})
server.get('/saludo',(request,response)=>{
    response.send('Hola Andres Express')
})

server.listen(PORT,ready)