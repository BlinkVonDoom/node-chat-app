const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
var port =  process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newMessage', {
    from: 'user',
    text: 'hey',
    createdAt: 123
  });

  socket.on('createMessage', (message) => {
    console.log('created message', message);
  });

  socket.on('disconnect', (socket) => {
    console.log('client disconnected');
  });
});

server.listen(port, () => {
  console.log(`app is currently listening on ${port}`);
});
