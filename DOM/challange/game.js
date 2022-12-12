let score = 0;
const scoreTarget = document.querySelector("#scoreTarget")

function updateScore(point){
    score +=point;
    scoreTarget.innerHTML = score;

}

const parent = document.querySelector("ul");

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



function getRandomColor() {
    const red = getRandomNumber(0, 255);
    const green = getRandomNumber(0, 255);
    const blue = getRandomNumber(0, 255);
    return [red,green,blue];
}
const tileCount = 4;

function getDifferentColor(colors){
    const random = getRandomNumber(0,2);
    const newColors = [...colors]
    let color = newColors[random];
    if(color > 126){
        color -= 100;
    } else {
        color+= 100;
    }
    newColors[random] = color;
    return `rgb(${newColors[0]},${newColors[1]},${newColors[2]})`
}



function reDraw(){
    parent.innerHTML = "";
    const colors = getRandomColor();

    const randomIndedx = getRandomNumber(0,3);

    for(let i = 0; i<tileCount; i++){
        const li = document.createElement("li");
        const isNormal = i !== randomIndedx;
        if(isNormal){
            li.style.backgroundColor =`rgb(${colors[0]},${colors[1]},${colors[2]})`
        }else{
            li.style.backgroundColor =getDifferentColor(colors);
        }
        li.addEventListener('click', ()=>{
            if(!isNormal){
                updateScore(1);
                reDraw();
            }else{
                updateScore(-2)
            }
            console.log(i)
        })
    parent.appendChild(li);
}
}

reDraw();
