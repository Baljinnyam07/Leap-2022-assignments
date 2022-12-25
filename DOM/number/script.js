let n =Math.floor(Math.random() * 20) + 1;
const guess = document.querySelector('.guess');
const body = document.querySelector('body')
const message = document.querySelector(".message")
const checker = document.querySelector('.check');
const again = document.querySelector(".again");

let score = 20;
let highscore = 0;

console.log(n);

 checker.addEventListener('click', () => {
    
    if(guess.value < 1 || guess.value > 20){
        message.innerHTML = "тоо оруулна уу";
    }
    
    if(guess.value < n){
        message.innerHTML = "Бага байна";
        score--;
        document.querySelector('.score').textContent = score;
    }else if(guess.value > n){
        message.innerHTML = "Их байна";
        score--;
        document.querySelector('.score').textContent = score;
    }else if(guess.value = n){
        message.innerHTML = 'Зөв таалаа';
        body.style.backgroundColor = "#60b347"
        highscore = score;
        document.querySelector('.highscore').innerHTML = highscore
    } 

    if(score <= 0){
        message.innerHTML = "Та хожигдлоо";
    }
 })


 
 again.addEventListener('click', () =>{
    message.innerHTML = 'Тааж эхлээрэй...';
    guess.value = '';
    document.querySelector('.score').innerHTML = 20
    body.style.backgroundColor = "#222"
 })




 




