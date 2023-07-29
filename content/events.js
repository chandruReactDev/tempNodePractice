const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('res', () => {
    console.log(`Data Received`);
})

customEmitter.emit('res');