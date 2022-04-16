import './styles.css';

const body = document.body;

const WIDE_SCREEN = 'wideScreen';
const MEDIUM_SCREEN = 'mediumScreen';
const NARROW_SCREEN = 'narrowScreen';

function handleResize() {
  const width = window.innerWidth;

  if (width > 1000) {
    body.classList.add(WIDE_SCREEN);
    body.classList.remove(MEDIUM_SCREEN);
  } else if (width <= 1000 && width >= 700) {
    body.classList.add(MEDIUM_SCREEN);
    body.classList.remove(WIDE_SCREEN, NARROW_SCREEN);
  } else {
    body.classList.add(NARROW_SCREEN);
    body.classList.remove(MEDIUM_SCREEN);
  }
}

handleResize();
window.addEventListener('resize', handleResize);
