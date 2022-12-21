let tip = function(tulbur){
    if(tulbur > 5000 && 30000 > tulbur){
        return tulbur + (tulbur * 15 / 100)
    }else{
        return tulbur + (tulbur * 20 / 100)
    }
}

let a =  tip(3000);
let b = tip(27500);
let c = tip(100000);
console.log(a , b , c)

let tipAdd = function(tulbur){
    if(tulbur > 5000 && 30000 > tulbur){
        return tulbur * 15 / 100
    }else{
        return tulbur * 20 / 100
    }
}

let k =  tipAdd(3000);
let d = tipAdd(27500);
let t = tipAdd(100000);

console.log(k, d, t)

let average  = function(tulbur){
    return (a + b + c)/3 
}
let ave = average (a, b, c)
console.log(ave)