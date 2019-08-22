let {testNumber} = require('./game.js');

process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

let playGame = (userInput) => {
  let input = userInput.toString().trim();
	testNumber(input);
};

/* invoke the playgame() callback using the process.stdin.on() function
process.stdin.on('data', {{callback}});
*/

process.stdin.on('data', playGame);