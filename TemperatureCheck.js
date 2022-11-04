const readline = require("readline-sync");

console.log("1) in degree faranhite\n2) in degree centrigrate\n");

let degreeType = Number(readline.question("Enter your input type : "));
let degree = Number(readline.question("Enter how much degree : "));

function faranhiteToCentigrate(faranhite){
    return (faranhite - 32) * 5 / 9;
}

function centrigrateToFaranhite(centrigrate){
    return (centrigrate * 9 / 5) + 32;
}

let degreeInFaranhite;
let degreeInCentigrate;

switch (degreeType) {
    case 1:
        degreeInFaranhite = degree;
        degreeInCentigrate = faranhiteToCentigrate(degreeInFaranhite);
        break;
    case 2:
        degreeInCentigrate = degree;
        degreeInFaranhite = centrigrateToFaranhite(degreeInCentigrate);
        break;
    default:
        console.log("Input type is not correct");
        break;
}

console.log("Temprature is "+degreeInFaranhite+" faranhite and "+degreeInCentigrate+" centigrate");
if(degreeInFaranhite < 32){
    console.log("temprature is below freezing point of water");
} else if(degreeInFaranhite == 32){
    console.log("temprature is at freezing point of water");
} else if(degreeInFaranhite == 212){
    console.log("temprature is at boiling point of water");
} else if(degreeInFaranhite > 212){
    console.log("temprature is above boiling point of water");
} else{
    console.log("temprature is normal");
}