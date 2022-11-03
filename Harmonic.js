let n = parseInt(process.env.n);

if(n < 0){
    n = -n;
}

function harmonic(n){
    if(n == 1) return 1;
    return harmonic(n - 1) + (1 / n);
}

console.log("harmonic value of "+n+" is "+harmonic(n));