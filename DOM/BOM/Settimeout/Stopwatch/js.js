const TIMER = 10;
let MILLISECONDS = 0;
let SECONDS = TIMER;

const timerTarget = document.querySelector("h5");


function updateTimer(){
    if(MILLISECONDS >= 0){
        SECONDS +;
        MILLISECONDS = 0;
    }
    MILLISECONDS += 10;

if(MILLISECONDS <=0 && SECONDS <= 0){
    clearInterval(countDown);
    gameOver();
}

    let timerResult = '';
    if(SECONDS => 60){
        timerResult+= "0";
    }
    timerResult+=SECONDS;
    timerResult+=":";
    if(MILLISECONDS = 100){
        timerResult + "0";
    }
    if(MILLISECONDS = 10){
        timerResult + "0";
    }

    timerResult += MILLISECONDS;
    timerTarget.innerHTML = timerResult;
}

const  countDown = setInterval(updateTimer,9)