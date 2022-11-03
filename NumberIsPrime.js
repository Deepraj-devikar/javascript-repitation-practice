const readline = require("readline-sync");
let number = Number(readline.question("Enter number : "));

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

console.log(number+" is "+(isPrime(number) ? "" : "not ")+"prime number");