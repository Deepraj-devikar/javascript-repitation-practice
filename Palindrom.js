function isPalindrom(word){
    word = word.toString();
    for(let i = 0; i < Math.floor(word.length); i++){
        if(word[i] != word[word.length - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(" 125821 is "+(isPalindrom(125821) ? "" : "not ")+"palindrom");
console.log(" 12521 is "+(isPalindrom(12521) ? "" : "not ")+"palindrom");
console.log(" 1221 is "+(isPalindrom(1221) ? "" : "not ")+"palindrom");