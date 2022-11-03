const HEAD = "HEAD";
const TAIL = "TAIL";

function flipCoin(){
    return Math.floor(Math.random() * 10) % 2 == 0 ? HEAD : TAIL; 
}

let playerBalance = 100;

while(true){
    if(playerBalance == 0){
        console.log("Gamble LOOSE");
        break;
    }
    if(playerBalance == 200){
        console.log("Gamble WIN");
        break;
    }
    switch (flipCoin()) {
        case HEAD:
            playerBalance++;
            break;
        case TAIL:
            playerBalance--;
            break;
    }
    console.log(playerBalance);
}