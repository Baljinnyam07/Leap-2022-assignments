let one = function(x, y){
    if(x>y){
        return `${x} ih too `
    }else{
        return `${y} ih too `
    }
}

let ihtoo = one( 6 , 5);
console.log(ihtoo)


const arr = [5, 6, 8, 15, 1, 5, 6, 0, 2, 88, 100];
let two = function(number){
    for(i=0; i < arr.length; i++){
        if(arr[i] === number){
            return i
        }
    } return -1
}

let too =two(88);
console.log(too)

const str = ('hikofpdaskojopfa321pfdas[fdsam');

let three = function(strng){
    for(i=0; i< str.length; i++){
        if(strng === str[i]){
            return i
        }
    } return -1
}

let temdegt = three('m');
console.log(temdegt)


let four = function(numOne, numTwo){
    return Math.floor(Math.random() * (numTwo - numOne + 1) + numOne)
}
let tooO = four(2,8)
console.log(tooO)


const arrONe = [1, 2, 5, 6, 7, 10, 11, 50, 80,60]

let five = function(arre){
    let suma = 0;
    for(i=0; i<arrONe.length; i++){
        suma += arre[i]
    }
    return suma/arrONe.length
 }
let averageOne = five(arrONe)
console.log(averageOne)

const arrTwo = [3, 44, 55, 3, 4, 10, 11, 50, 80,60]

let six = function(arre){
    let sumaa = 0;
    for(i=0; i<arrTwo.length; i++){
        sumaa += arre[i]
    }
    return sumaa
 }
let sumsum = six(arrTwo)
console.log(sumsum)

let seven = function(firstnumber){
    if(firstnumber % 2 !== 0 && firstnumber % 3 !== 0){
        return  `${firstnumber} anhnii too mun`;
    }else{
        return `Anhnii too bish`
    }
}

let nu = seven(23);
console.log(nu)

const someWords = 'kofpdakopsdfkopsakfdopsakfngi';
let eight = function (wordss){
    return wordss
}

let Something = eight(someWords);
console.log(`${Something}`.toUpperCase())


const someWordss = 'DSALKPDKPSAkDSADfDSAdoDSApsDSAakDSADSWVDAfngi';
let nine = function (wordsss){
    return wordsss
}

let Somethingg= nine(someWordss);
console.log(`${Somethingg}`.toLowerCase())

