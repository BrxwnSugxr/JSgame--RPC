// creating the choices
const game = ['R', 'P', 'S'];
// keeping track
const win = 0;
const lose = 0;
const ties = 0;

// creating a message 
const prompMsg = ` choose an option: \n ${game}`;
// creating the function
const playGame = function () {
  const userInput = prompt(prompMsg);

  if (userInput) {
    return;
  }
};

// if user chooses
/*
rock loses paper
paper loses scissor
scissor lose to rock
*/
