// creating the choices
const game = ['R', 'P', 'S'];
// keeping track
const win = 0;
const lose = 0;
const ties = 0;

// creating a message
const prompMsg = ` choose an option: \n ${game}`;
const userInput = userInput.toUpperCase();
// creating the function to start game
const playGame = function () {
  // interaction with the user
  const userInput = window.prompt(prompMsg);

  if (userInput) {
    return;
  }
};
// computer choices
const computerChoice = function (){
    const index = math.floor(Math.random()* options.length)
    const computerChoice = options[index];
}



playGame();
// if user chooses
/*
rock loses paper
paper loses scissor
scissor lose to rock
*/
