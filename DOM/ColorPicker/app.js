const body = document.querySelector('body')

const div = document.createElement('div')
body.appendChild(div);

const image = ['T-shirt_5.jpg', 'T-shirt_2.jpg','T-shirt_3.jpg', 'T-shirt_4.jpg', 'T-shirt_1.jpg']
const colors = [" ",'white', 'red', 'green', 'blue', 'black']

for(i = 1; i < 6; i++){
    const btn = document.createElement('button')
    btn.style.background = colors[i]
    btn.style.marginTop = '350px'
    btn.style.marginRight = '5px'
    btn.style.width = '77px'
    btn.style.height = '30px'
    btn.style.borderRadius = '20px'
    btn.style.border = '0.5px solid black'
    body.appendChild(btn);

    btn.addEventListener('click', colorBtn)
    function colorBtn(){
        img.style.zIndex =`${i}`
        i++
    }
    const img = document.createElement('img')
    img.setAttribute('src', `./img/T-shirt_${i}.jpg`)
    img.style.width = '400px'
    img.style.position = 'absolute'
    img.style.zIndex = 6 - `${i}`
    img.style.border = '4px solid black'
    div.appendChild(img);
}









