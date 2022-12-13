const TIMER = 10;
let MILLISECONDS = 0;
let SECONDS = minutes;
let minutes = TIMER;

const timerTarget = document.querySelector("h5");


function updateTimer(){
    if(MILLISECONDS <= 999){
        SECONDS++ ;
        MILLISECONDS = 0;
    }
    MILLISECONDS+= 1;

if(MILLISECONDS <=999 && SECONDS <= 999){
    clearInterval(countDown);
}

    let timerResult = '';
    if(SECONDS < 10){
        timerResult+= "0";
    }
    timerResult+=SECONDS;
    timerResult+=":";
    if(MILLISECONDS < 100){
        timerResult + "0";
    }
    if(MILLISECONDS < 10){
        timerResult + "0";
    }
    timerResult += MILLISECONDS;

    timerTarget.innerHTML = timerResult;

    

}
const  countDown = setInterval(updateTimer,1)