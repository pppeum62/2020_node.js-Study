// server.js

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('chat');     // 루트 페이지로 접속시 chat.pug 렌더링
});

var count = 1;
io.on('connection', function(socket) {      // 채팅방에 접속했을 때
    console.log('user connected: ', socket.id);
    var name = "익명" + count++;
    io.to(socket.id).emit('create name', name);

    socket.on('disconnect', function(){     // 채팅방 접속이 끊어졌을 때
        console.log('user deisconnected: ' + socket.id + ' ' + socket.name);
    });

    socket.on('send message', function(name, text) {
        var msg = name + ' : ' + text;
        socket.name = name;
        console.log(msg);
        io.emit('receive message', msg);
    });

});

http.listen(3000, function(){
    console.log('server.on...');
});