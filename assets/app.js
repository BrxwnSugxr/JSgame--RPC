// creating the choices
const game = ['R', 'P', 'S'];
// keeping track
const win = 0;
const lose = 0;
const ties = 0;

// creating a message
const prompMsg = ` choose an option: \n ${game}`;
// creating the function to start game
const playGame = function () {
  // interaction with the user
  const userInput = window.prompt(prompMsg);

  if (!userInput) {
    return;
  }
  return userInput.toUpperCase();
};

// computer choices
const computerChoice = function () {
  const index = math.floor(Math.random() * options.length);
  const computerChoice = options[index];
  window.alert(`AI Choses + ${computerChoice}`);
};

// if user chooses
/*
rock loses paper
paper loses scissor
scissor lose to rock
*/
// check game flowchart
const gameValidation = function (userInput, computerChoice) {
  if (userInput === computerChoice) {
    ties++;
    window.alert("it's a tie");
  } else if (
    (userInput === 'R' && computerChoice === 'S') ||
    (userInput === 'P' && computerChoice === 'R') ||
    (userInput === 'S' && computerChoice === 'P')
  ) {
    win++;
  } else {
    lose++;
    window.alert('you lose');
  }
  // display result of game
  window.alert(`status: \nWins:  ${win} \nLost: ${lose} \nDraw: ${ties}  `);

  const playAgain = window.confirm('play again?');
};

playGame();
computerChoice();
gameValidation();
