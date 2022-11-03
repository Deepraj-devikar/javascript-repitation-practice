const HEAD = "HEAD";
const TAIL = "TAIL";

function flipCoin(){
    return Math.floor(Math.random() * 10) % 2 == 0 ? HEAD : TAIL; 
}

let headWin = 0;
let tailWin = 0;

while(true){
    switch (flipCoin()) {
        case HEAD:
            headWin++;       
            break;
        case TAIL:
            tailWin++;
            break;
    }
    if(headWin >= 11){
        console.log("Head win");
        break;
    } else if(tailWin >= 11){
        console.log("Tail win");
        break;
    }
}