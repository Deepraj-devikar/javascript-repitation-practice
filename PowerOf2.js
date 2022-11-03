let n = parseInt(process.env.n);

if(n < 0){
    n = -n;
}

let result = 1;
for(let i = 0; i <= n; i++){
    console.log("2 ^ "+i+" is "+result);
    result *= 2;
}