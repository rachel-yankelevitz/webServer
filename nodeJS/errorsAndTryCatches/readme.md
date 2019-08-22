## Errors and Try/Catches

### Overview
Node has lots of standard JavaScript errors AND it can use error handling methods like the `try...catch`

Many asynchronous Node APIs use *error-first* callback functions. These are callback functions that have an error as the **First** expected argument and the data as the second argument.

This way, if the asynchronous task results in an error, it will be passed in as the first argument to the callback function.

If the asynchronous task does **NOT result in an error**, then the first argument will just be `undefined`.

Example:
```javascript
const errorFirstCallback = (err, data)  => {
  if (err) {
    console.log(`There WAS an error: ${err}`);
  } else {
     // err was falsy
      console.log(`There was NO error. Event data: ${data}`);
  }
}
```