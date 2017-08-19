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
      from: 'admin',
      text: 'welcome'
    });

    socket.broadcast.emit('newMessage', {
      from: 'admin',
      text: 'new user joined',
      joinTime: new Date().getTime()
    });

  socket.on('createMessage', (message) => {
    console.log('created message', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.test,
      createdAt: new Date().getTime()
    });
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
  });

  socket.on('disconnect', (socket) => {
    console.log('client disconnected');
  });
});

server.listen(port, () => {
  console.log(`app is currently listening on ${port}`);
});
