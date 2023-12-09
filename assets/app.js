// declaring varaibles
let win = 0;
let lose = 0;
let tie = 0;

let options = ['R', 'P', 'S'];
//creating a function to allow user to input "options"
var playGame = function () {
  var userChoice = window.prompt('Enter R, P, or S:');
  // if user doesnt input anything function exits
  if (!userChoice) {
    return;
  }
  // adding a constraint of user input to allow comparison easier
  userChoice = userChoice.toUpperCase();

  //   allowing automated opponent to select R,P,S
  var index = Math.floor(Math.random() * options.length);
  //options[index] -> meaning it gets from the RPS and then using the index array
  var aiChoice = options[index];

  window.alert(`AI chose: ${aiChoice}`);

  // creating a function to compare user choice and ai choice
  // tie
  // if user and ai are tie then add the tie on the score borded and display it
  /*
  if (userChoice === aiChoice) {
    tie++;
    window.alert('its a tie');
  } else if (
    // conditional operation using && and ||
    //  R beats S | P beats R | S beats P 
    (userChoice === 'R' && aiChoice === 'S') ||
    (userChoice === 'P' && aiChoice === 'R') ||
    (userChoice === 'S' && aiChoice === 'P')
  ) {
    win++;
    window.alert('you win');
  } else {
    // if above contion fails player lost
    lose++;
    window.alert('you lose');
  }
*/

  const winConditions = {
    RS: true,
    SR: true,
    PR: true,
    RP: true,
    SP: true,
    PS: true,
  };

  if (userChoice === aiChoice) {
    tie++;
    window.alert("It's a tie");
  } else if (winConditions[userChoice + aiChoice]) {
    win++;
    window.alert('You win');
  } else {
    lose++;
    window.alert('You lose');
  }
  //   print status of game result
  window.alert(`status: \nWins: ${win} \nLose: ${lose} \nTie: ${tie} `);

  //   asking user to play again.
  let playAgain = window.confirm('play again?');

  if (playAgain) {
    playGame();
  }
};

playGame();
