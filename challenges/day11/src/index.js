const colors = [
  '#ef5777',
  '#575fcf',
  '#4bcffa',
  '#34e7e4',
  '#0be881',
  '#f53b57',
  '#3c40c6',
  '#0fbcf9',
  '#00d8d6',
  '#05c46b',
  '#ffc048',
  '#ffdd59',
  '#ff5e57',
  '#d2dae2',
  '#485460',
  '#ffa801',
  '#ffd32a',
  '#ff3f34',
];

const button = document.querySelector('button');

function handleBtnClick() {
  const [num1, num2] = getRandomNums();
  document.body.style = `background: linear-gradient(to right, ${colors[num1]}, ${colors[num2]})`;
}

function getRandomNums() {
  const maxNum = colors.length;
  const result = [Math.floor(Math.random() * maxNum)];

  while (true) {
    const randomNum = Math.floor(Math.random() * maxNum);
    if (randomNum !== result[0]) {
      result.push(randomNum);
      break;
    }
  }

  return result;
}

button.addEventListener('click', handleBtnClick);
