// creating multipl smaller functions for easier readability

//function to get user choice
const getUserChoice = function () {
  const userChoice = window.prompt('enter R,P ior S:');
  //   ternany operator check if userchoice is truthy. converts the input to uppercase, if false exit
  return userChoice ? userChoice.toUpperCase() : null;
};

// function to compare choices
const compareChoice = function (userChoice, aiChoice) {
  // win condition
  const winConditions = {
    RS: true,
    SR: true,
    PR: true,
    RP: true,
    SP: true,
    PS: true,
  };

  if (userChoice === aiChoice) {
    window.alert('its a tie');
    return 'tie';
  } else if (winConditions[userChoice + aiChoice]) {
    window.alert('you win');
    return 'win';
  } else {
    window.alert('you lose');
    return 'lose';
  }
};

const displayResults = function (win, lose, tie) {
  window.alert(`Status: \nWins: ${win} \nlose: ${lose} \ntie: ${tie} `);
};

const askToPlayAgain = function () {
  return window.confirm('Play again?');
};

const playGame = function () {
  let win = 0;
  let lose = 0;
  let tie = 0;
};
