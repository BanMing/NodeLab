var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log("连接成功！");

    eventEmitter.emit('data_received');
}

var data_received = function data_received() {
    console.log('数据接收成功');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', data_received);

eventEmitter.emit('connection');


eventEmitter.removeListener('data_received', data_received);

eventEmitter.emit('connection');
