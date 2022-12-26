const body = document.body


const img = ['./img/01.jpg','./img/02.jpg','./img/03.jpg','./img/04.jpg','./img/05.jpg'];

const div = document.createElement('div');
const col =  div.classList.add('col');
body.appendChild(div);

for(let i = 0; i <=4 ; i++){
const x = document.createElement("IMG");
x.setAttribute('class', 'images')
x.setAttribute("src", img[i]);
x.style.width = '12vw';
x.addEventListener('mouseover', () => {
    x.style.width = '65vh'
});
x.addEventListener('mouseout', () => {
    x.style.width = '12vw'
});

x.style.height = '85vh';
x.style.padding = "3px";
x.style.borderRadius = "25px";
x.style.backgroundSize = 'contain';
x.style.transition= 'all , 1s';
x.style.position = 'cover'
x.style.backgroundPosition= 'center';
x.style.backgroundRepeat= 'no-repeat';
x.style.backgroundSize= 'cover';
x.style.position= 'relative';
div.appendChild(x);
}


  
  
  