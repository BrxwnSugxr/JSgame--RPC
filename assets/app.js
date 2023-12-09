// creating multipl smaller functions for easier readability

//function to get user choice 
const getUserChoice = function () {
  const userChoice = window.prompt('enter R,P ior S:');
//   ternany operator check if userchoice is truthy. converts the input to uppercase, if false exit
  return userChoice ? userChoice.toUpperCase() : null;
};

