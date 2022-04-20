const clockTitle = document.querySelector('.js-clock');
const dDay = new Date(new Date().getFullYear(), 11, 25).getTime();

function getClock() {
  const today = new Date().getTime();
  const gap = dDay - today;

  const day = Math.ceil(gap / (1000 * 60 * 60 * 24));
  const hour = String(
    Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, '0');
  const min = String(
    Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, '0');
  const sec = String(Math.ceil((gap % (1000 * 60)) / 1000)).padStart(2, '0');

  clockTitle.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
}

getClock();
setInterval(getClock, 1000);
