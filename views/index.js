const express = require ('express'); //setup de la aplicación chat, seteamos en que puerto escucha
const app = express();
const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html'); //cargamos el archivo de la web html
});


io.on('conectado', (socket) => {
    socket.on('chat msg', (msg) => {
      io.emit('chat msg', msg);
    });
  });


server.listen(3000, () => {
    console.log('listening on *:3000');
});