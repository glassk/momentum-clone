const gameForm = document.querySelector('#game-form');
const limitInput = document.querySelector('#limit-input');
const guessInput = document.querySelector('#guess-input');
const numResult = document.querySelector('#num-result');
const finalResult = document.querySelector('#final-result');

function onGameSubmit(event) {
  event.preventDefault();

  const limitNum = parseInt(limitInput.value, 10);
  const guessNum = parseInt(guessInput.value, 10);
  const randomNum = Math.ceil(Math.random() * limitNum);

  numResult.innerHTML = `You chose: ${guessNum}, the machine chose: ${randomNum}.`;
  finalResult.innerHTML = `You ${guessNum === randomNum ? 'won' : 'lost'}!`;
}

gameForm.addEventListener('submit', onGameSubmit);
