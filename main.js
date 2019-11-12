const secPointer = document.querySelector('.sec-pointer');
const minPointer = document.querySelector('.min-pointer');
const hourPointer = document.querySelector('.hour-pointer');


function setDate() {
  const now = new Date();

  const sec = now.getSeconds();
  const secDegrees = ((sec / 60) * 360) + 90;
  secPointer.style.transform = `rotate(${secDegrees}deg)`;

  const min = now.getMinutes();
  const minDegrees = ((min / 60) * 360) + 90;
  minPointer.style.transform = `rotate(${minDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90;
  hourPointer.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);