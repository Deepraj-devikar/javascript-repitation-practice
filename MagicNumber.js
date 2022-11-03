const readline = require("readline-sync");
// let number = Number(readline.question("Enter number : "));

function searchNumber(low, high){
    if(low > high){
        return -1;
    }
    if(low == high){
        return low;
    }
    let mid = Math.floor((low + high) / 2);
    
    console.log(
        "Enter greater if your number is greater than "+mid
        +(low == mid ? "" : "\nEnter less if your number is less than "+mid)
        +"\nEnter equal if your number is equal to "+mid);
    switch (readline.question()) {
        case "greater":
            return searchNumber(mid + 1, high);
        case "less":
            return low == mid ? low : searchNumber(low, mid - 1);
        case "equal":
            return mid;
        default:
            console.log("You not entered correct option : ");
            return searchNumber(low, high);
    }
}

console.log("Assume any number from 1 to 100");
readline.question("Press enter if done : ");
searchNumber(1, 100);
