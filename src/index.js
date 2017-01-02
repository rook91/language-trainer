'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestPage from './testPage.js';
import io from 'socket.io-client';

(function () {

    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    var socket = io('http://localhost:3000');
    socket.emit('getCSVData', 'csv/2016_12_14.csv');

    socket.on('newData', function (data) {
        ReactDOM.render(<TestPage data={shuffle(data)}/>, document.getElementById('content'));
    });

})();
