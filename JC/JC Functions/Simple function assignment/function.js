
let nameE = function(nameA){
    return nameA;
}
let b =  nameE('Baljinnyam')
console.log(b)

let fullname = function(firsname, lastname){
    return firsname + " " + lastname 
}

let name = fullname('Baljinnyam', 'Jandav');
console.log(name);

let somePara = function(a, b ){
    return a + b;
}

let x = somePara(5, 10);
console.log(x)

let area = function(x, y){
    return x * y;
}

let perimeter = function(x, y){
    return 2*x + 2* y
}

let unit = area(5 , 6)
let unitt = perimeter(5 , 6)
console.log(`area = ${unit}, perimeter = ${unitt}`)