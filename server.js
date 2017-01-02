//server
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//csv import
var csv = require('csv-parser')
var fs = require('fs')
var receivedData = [];


io.on('connection', function (socket) {
    console.log('Connected to server');
    socket.on('getCSVData', function (filePath) {
        console.log('getting data from: ' + filePath);
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', function (data) {
                console.log('receiving data');
                receivedData.push(data)
            })
            .on('end', function () {
                console.log('sending data');
                io.emit('newData', receivedData);
                receivedData = [];
            })
    });

    socket.on('disconnect', function () {
        console.log('disconnected..')
    });
});
server.listen(3000);