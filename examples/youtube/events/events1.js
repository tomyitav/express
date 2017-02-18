/**
 * Created by Tom on 18/02/2017.
 */
var events = require('events');
var eventEmmiter = new events.EventEmitter();

eventEmmiter.on('myCustomEvent', (arg1, arg2) => {
    console.log('Event fired' + ' ' + arg1 + arg2);
});

setTimeout(() => {
    eventEmmiter.emit('myCustomEvent', 'tom ', 'yitav');
}, 2000)

// document.querySelector('yourTag').onclick