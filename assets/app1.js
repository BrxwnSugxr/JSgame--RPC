// this is now the UI interaction
// get all the selection button, based on the data attributes
const selectionButtons = document.querySelectorAll('[data-selection');
const selections = [
  {
    name: 'rock',
    emoji: '✊🏾',
    beats: 'scissor',
  },
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
    makeSelection(selectionName);
  });
});
// displaying
function makeSelection(selection) {
  console.log(selection);
}
