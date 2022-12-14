const testTarget= document.querySelector('#testTarget');
const todoTarget= document.querySelector('#todoTarget');
const inputTarget= document.querySelector('#inputTarget');

const ul = document.querySelector("#todoTarget")



inputTarget.addEventListener("keypress",function(e){
    // testTarget.innerHTML=e.target.value;
    if(e.key === "Enter"){
        const li = document.createElement("li");
        li.innerHTML= `<input type="checkbox"> ${e.target.value}<input type="button" value="x">`;
        ul.append(li);
    }
})

const firstCB = document.querySelectorAll('input[type="checkbox"]')[0];

firstCB.addEventListener("click", function(e){
    if(e.target.checked){
        
    }
})

