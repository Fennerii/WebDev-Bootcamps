function confirmEnding(StringIn,StringOut){
    let substr = StringOut.substring()
    let strlength = StringOut.length 
    let lastWord = StringIn.slice(-strlength)

    if(lastWord == StringOut){
        return true;
    } else return false;

}

console.log(confirmEnding("I live in a house", "f"))
