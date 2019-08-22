// Here we require in the 'events' module and save a reference to it in an events variable
let events = require('events');

let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}
// 1. Create a new variable, myEmitter and assign as its value a new instance of the event emitter class.

let myEmitter = new events.EventEmitter();

/** 2. now nvoke myEmitter‘s .on() method passing in 'celebration' as the event name and listenerCallback as the listener callback function. **/

myEmitter.on('celebration', listenerCallback); // note string and callback as first and second args respectively

/** 3. Emit a Celebration event by invoking the myEmitter's emit() method and passing event name and string of choice */

myEmitter.emit('celebration', 'meems party'); // note two args

/** 4. Run this inyour terminal as node app.js */