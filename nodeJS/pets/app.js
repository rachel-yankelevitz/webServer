// Require modules:
let Dog = require('./dog.js');
let Cat = require('./cat.js');

// call a function
let cuddles = (dog, cat) => {
    if (dog.hugStrength > cat.cuddleStrength) {
        console.log(`${dog.name} hugs!`);
    }
    else if (dog.hugStrength < cat.cuddleStrength) {
        console.log(`${cat.name} cuddles!`);
    }
    else {
        console.log(`${dog.name} and ${cat.name} are equally skilled cuddlers!`);

    }
}

// invoke a function :)
const myDog = new Dog('Meems', Math.random());
const myCat = new Cat('Jenny', Math.random());

cuddles(myDog, myCat);