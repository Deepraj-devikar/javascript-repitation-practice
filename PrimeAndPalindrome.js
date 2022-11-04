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

function isPalindrom(word){
    word = word.toString();
    for(let i = 0; i < Math.floor(word.length); i++){
        if(word[i] != word[word.length - 1 - i]){
            return false;
        }
    }
    return true;
}

function isPrimeAndPalindrom(number){
    return isPrime(number) && isPalindrom(number);
}

console.log(number+" is "+(isPrimeAndPalindrom(number) ? "" : "not ")+"prime and palindrom number");