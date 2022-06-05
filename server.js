const express = require('express');
const { Server: HttpServer } = require('http')
const socketController = require('./controller/controladorSocket.js')
const webRouter = require('./router/webRouter.js')

/* ------------------------------------------------------ */
const app = express()
const httpServer = new HttpServer(app)
const io = new socketController(httpServer)
/* ------------------------------------------------------ */
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(webRouter)
/* ------------------------------------------------------ */
const PORT = 8080
const server = httpServer.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
});
server.on('error',error => console.log(`Error en el servidor ${error}`))