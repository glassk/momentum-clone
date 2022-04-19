const gameForm = document.querySelector('#game-form');
const maxNum = document.querySelector('#maxNumber');
const result = document.querySelector('#result');
const guessInput = gameForm.querySelector('#guess-input');

function onGameSubmit(event) {
  event.preventDefault();

  const max = parseInt(maxNum.value, 10);
  const guessNum = parseInt(guessInput.value, 10);
  const randomNum = Math.ceil(Math.random() * max);

  result.innerHTML = `
    You chose: ${guessNum}, 
    the machine chose: ${randomNum}.<br />
    <b>${guessNum === randomNum ? 'You won!' : 'You lost!'}</b>`;
}

gameForm.addEventListener('submit', onGameSubmit);
