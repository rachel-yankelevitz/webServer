## Using Core and Local Modules
This project is an exercise in exporting and leveraging core and local modules. In the included files, **dog.js** and **cat.js**, the `require()` function is used as well as the `module.exports` connector in order to export the relevant classes from each file or "module" to be leveraged in the **app.js** file.

For instance, in **cat.js**, the original file *Before being exported*:

```javascript
module.exports = class Cat {
  constructor(name, clawStrength) {
    this.name = name;
    this.clawStrength = clawStrength;
  }
};
```

**After using the module.exports**, the file looks like:

```javascript
module.exports = module.exports = class Cat {
  constructor(name, clawStrength) {
    this.name = name;
    this.clawStrength = clawStrength;
  }
};
```

Now, the **cat.js** file can be exported and used in the corresponding **app.js** file when the `require()` function is invoked in **app.js**. Make sure to include the relative path!!!

Example:

```javascript
let Dog = require('./dog.js'); // note that the variables are upperCase
let Cat = require('./cat.js');


let cuddles = (dog, cat) => {
    if (dog.toothStrength > cat.clawStrength) {
        console.log(`${dog.name} wins!`);
    }
    else if (dog.toothStrength < cat.clawStrength) {
        console.log(`${cat.name} wins!`);
    }
    else {
        console.log(`${dog.name} and ${cat.name} are equally skilled fighters!`);

    }
}
```

