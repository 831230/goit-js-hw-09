const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyBg = document.querySelector('body');
let timerID = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener("click", function () {
  timerID = setInterval(() => {
    bodyBg.style.backgroundColor = getRandomHexColor()
  }, 1000);
  startBtn.setAttribute('disabled', true)
});

stopBtn.addEventListener("click", function () {
  clearInterval(timerID);
  startBtn.removeAttribute('disabled')
});