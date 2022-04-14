import './styles.css';

const body = document.querySelector('body');

function handleResize() {
  const narrowClass = 'narrow';
  const widenClass = 'widen';
  const currentWidth = window.innerWidth;

  if (currentWidth < 760) {
    body.classList.add(narrowClass);
  } else if (currentWidth > 1260) {
    body.classList.add(widenClass);
  } else {
    body.classList.remove(narrowClass);
    body.classList.remove(widenClass);
  }
}

window.addEventListener('resize', handleResize);
