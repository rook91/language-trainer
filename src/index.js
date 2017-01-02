'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestPage from './testPage.js';
import io from 'socket.io-client';

(function () {

    var socket = io('http://localhost:3000');
    socket.emit('getCSVData', 'csv/2016_12_14.csv');

    socket.on('newData', function (data) {
        ReactDOM.render(<TestPage data={data}/>, document.getElementById('content'));
    });

})();
