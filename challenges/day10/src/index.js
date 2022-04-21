const clockTitle = document.querySelector('.js-clock');

function getClock() {
  const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
  const now = new Date();

  const diff = new Date(xmasDay - now);

  // 소수점 없애기 위해 Math.floor 사용
  const secondsInMs = Math.floor(diff / 1000); // 1초(1000ms) 단위의 diff를 1000으로 나눠서 저장
  const minutesInMs = Math.floor(secondsInMs / 60); // 1분은 60초
  const hoursInMs = Math.floor(minutesInMs / 60); // 1시간은 60분
  const days = Math.floor(hoursInMs / 24); // 하루는 24시간

  // 남은 일, 시, 분, 초를 구하기 위해 각 단위에 맞게 나눔
  const seconds = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;

  const daysStr = String(days).padStart() + 'd';
  const hoursStr = String(hours).padStart() + 'h';
  const minutesStr = String(minutes).padStart() + 'm';
  const secondsStr = String(seconds).padStart() + 's';

  clockTitle.innerText = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

getClock();
setInterval(getClock, 1000);
