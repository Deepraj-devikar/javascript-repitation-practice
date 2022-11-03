const readline = require("readline-sync");
let number = Number(readline.question("Enter number : "));

function factorial(number){
    if(number == 1) return 1;
    return factorial(number - 1) * number;
}

console.log("Factorial of "+number+" is "+factorial(number));