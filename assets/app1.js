// this is now the UI interaction
// get all the selection button, based on the data attributes
const selectionButtons = document.querySelectorAll('[data-selection');
const finalColumn = document.querySelector('[data-final-column');
const computerScopreSpam = document.querySelector('[data-computer-score]');
const yourScoreSpan = document.querySelector('[data-your-score]');
const selections = [
  {
    name: 'rock',
    emoji: '✊🏾',
    beats: 'scissor',
  },
  {
    name: 'paper',
    emoji: '🖐🏾',
    beats: 'rock',
  },
  {
    name: 'scissor',
    emoji: '✌🏾',
    beats: 'paper',
  },
];

selectionButtons.forEach((selectionButtons) => {
  selectionButtons.addEventListener('click', (e) => {
    const selectionName = selectionButtons.dataset.selection;
    const selection = selections.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selection);
  });
});
// displaying
function makeSelection(selection) {
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);
  console.log(computerSelection);

  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, yourWinner);

  if (yourWinner) incrementScore(yourScoreSpan);
  if (computerWinner) incrementScore(computerScopreSpam);

}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

// creating the function to check winner
function addSelectionResult(selection, winner) {
  const div = document.createElement('div');
  div.innerText = selection.emoji;
  div.classList.add('result-selection');
  if (winner) div.classList.add('winner');
  finalColumn.after(div);
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

// generating random choice
function randomSelection() {
  const randomIndex = Math.floor(Math.random() * selections.length);
  return selections[randomIndex];
}
