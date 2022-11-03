const readline = require("readline-sync");
let number = Number(readline.question("Enter number : "));

function getLCF(number){
    for(let i=2; i * i <= number; i++){
        if((number%i) == 0){
            return i;
        }
    }
    return number;
}

function factors(number){
    let LCF = getLCF(number);
    console.log(LCF);
    if (number != LCF) {
        factors(number/LCF);
    }
}

console.log("Factors of "+number+" are : ");
factors(number);