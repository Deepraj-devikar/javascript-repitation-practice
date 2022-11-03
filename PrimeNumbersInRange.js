const readline = require("readline-sync");
let numberFrom = Number(readline.question("Enter number from : "));
let numberUpto = Number(readline.question("Enter number upto : "));

function isPrime(number){
    if(number == 1 || number == 2){
        return true;
    }
    for(let divisor = 2; divisor <= number/2; divisor++){
        if(number % divisor == 0){
            return false;
        }
    }
    return true;
}

for(let number = numberFrom; number <= numberUpto; number++){
    console.log(number+" is "+(isPrime(number) ? "" : "not ")+"prime number");
}