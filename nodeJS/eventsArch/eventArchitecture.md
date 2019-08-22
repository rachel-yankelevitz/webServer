## Event-Driven Architecture

### What is Event-Driven Architecture????
Event-driven programming means that we typically write logic that will include logic to handle situations when we don't know exactly *when* an event might occur. For example when a user will click a button. Node applies this concept to the backend environment. 

The Node `EventEmitter` class is provided and can be accessed by requiring the `events` core module. (cool!)

```javascript
let events = require('events');
//now create an instance of the EventEmitter
let myEmitter = new events.EventEmitter();
```

1.  Each events emitter instance has an `.on()` method which assigns a *listener* callback function to a named event. 
2.  The event emitter instance also has an `emit()` method. This method announces that a named event has occurred.
3.  The `emit()` method takes **TWO** arguments: The first argument is the name of the event (as a string) and the second is the data that sould be passed into the listener callback function.

**Example**

```javascript
//add required module
let events = require('events');

//create instance of emitter
let myEmitter = new events.EventEmitter();


let newPuppyListener = (data) => {
    console.log(`this is the new puppy: ${data}.`);
};

// first assign newPupply listener function as listener callback
myEmitter.on('new puppy', newPuppyListner);


// Emit a 'new user' event
myEmitter.emit('new puppy', 'Chauncey') //newUserListener will be invoked with 'Chauncey'
```