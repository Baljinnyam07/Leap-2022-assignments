// class Person {
//     constructor(ner, nas , hvis , zereg){
//         this.ner = ner ;
//         this.nas = 2022 - nas;
//         this.hvis = hvis;
//         if(this.nas < 18){
//             this.zereg = 'joohon huuhed'
//         }else if(this.nas > 18 && 22 > this.nas ){
//             this.zereg = 'Oyutan';
//         } else if(this.nas > 22){
//             this.zereg = 'Tom hun'
//         }
//     }
// }

// class Oyutan extends Person{
//     constructor (){
//         super('Dorj', 2001, 'er')
//     }
// }

// const oyu = new Oyutan();
// console.log(oyu)


class Student{
    constructor(name, birthYear, weight, height){
        this.name = name;
        this.birthYear = birthYear;
        this.weight = weight;
        this.height = height;
    }

    getBMI(){
        return (this.weight / this.height ** 2) * 10000
    }

    getAge(){
        return new Date().getFullYear - this.birthYear;
    }
}





const generateNumber = (min, max) =>{
    return Math.round(Math.random()* (max - min )) + min;
}

const thisYear = new Date().getFullYear()
const students = [];

for(let i = 1; i <= 20; i ++){
    const student = new Student(
        'Student ' + i,
        generateNumber(1970, thisYear),
        generateNumber(40, 120),
        generateNumber(155, 190)
    )
    students.push(student);
    
};



let averageAge;
let studentWithMaxBMI;
let studentWithMinBMI;
let youngest;
let oldest;

let aveBMI = 0 ;
for(i = 0; i < students.length; i++){
    aveBMI = aveBMI + students[i].getBMI();
    
}
let averageBMI = aveBMI / students.length
console.log(averageBMI);

let maxBMI = 0;
for(i = 0; i < students.length; i++){
    for(j = 1; j < students.length; j++){
        if(students[i].getBMI < students[j].getBMI){
        maxBMI += students[j].getBMI;
    }
    }
}

console.log(maxBMI)

