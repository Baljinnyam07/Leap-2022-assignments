const puzzle = [
  [0, 1, ],
  [4, 5, ],
//   [8, 9, 10, ],
//   [12, 13, 14, 15],
];

let found = 0;
let flippedItems = [];



const temp = puzzle[0][0];
const hamaagu = puzzle[1][1];
console.log(temp)



// function getTile(value) {
//   const tile = document.createElement("li");

//   const tileFront = document.createElement("div");
//   tileFront.innerHTML = value;
//   tileFront.classList.add("front");
//   tile.appendChild(tileFront);
  
//   tile.setAttribute("val", value);
  

//   tile.addEventListener("click", function () {
//       for(i=0; i< 3; i++){
//           for(j=0; j<3 ; j++){
//               ul[i][j] === 0 ? "" ul[i][j].toString();
//               }
//           }
//       }


    
    
//   });



//   return tile;
// }

const gameTarget = document.querySelector("#gameTarget");

for (let row = 0; row < puzzle.length; row++) {
  const rowItems = puzzle[row];
  for (let col = 0; col < rowItems.length; col++) {
    gameTarget.appendChild(getTile(rowItems[col]));
  }
}

// tile.addEventListener("click", function (){
//   flippedItems = [];
// }