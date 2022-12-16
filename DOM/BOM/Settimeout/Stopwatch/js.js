const TIMER = 10;
let MILLISECONDS = 0;
let seconds = 00;
let minutes = 00;


const timerTarget = document.querySelector("h5");
let count = 00;
function updateTimer() {
  count++;
  MILLISECONDS++;
  if (MILLISECONDS == 100) {
    seconds++;
    MILLISECONDS = 0;
  }
  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes == 60) {
    
    minutes = 0;
  }
  timerTarget.innerHTML = `${minutes}:${seconds}:${MILLISECONDS}`;
}
const countDown = setInterval(updateTimer, 10);