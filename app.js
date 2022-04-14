const h1 = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
  // Example #1
  const currentColor = h1.style.color;
  let newColor;

  if (currentColor === 'blue') {
    newColor = 'tomato';
  } else {
    newColor = 'blue';
  }

  h1.style.color = newColor;

  // Example #2
  const clickedClass = 'clicked';
  if (h1.className === clickedClass) {
    h1.className = '';
  } else {
    h1.className = clickedClass;
  }

  // Example #3
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }

  // Example #4
  h1.classList.toggle('clicked');
}

h1.addEventListener('click', handleTitleClick);
