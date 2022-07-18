function cake(input) {
    let index = 0;
    let length = Number(input[index]);
    index++;
    let width = Number(input[index]);
    index++;
    let countOfPieces = length * width;
    let pieces = input[index];
    index++;

    while(pieces !== "STOP") {
        countOfPieces -= pieces;
        if(countOfPieces <= 0) {
            console.log(`No more cake left! You need ${Math.abs(countOfPieces)} pieces more.`)
        break;
        }
        pieces = input[index];
        index++
        
    }
    if(pieces === "STOP") {
        if(countOfPieces <= 0) {
            console.log(`No more cake left! You need ${Math.abs(countOfPieces)} pieces more.`)
        } else {
            console.log(`${countOfPieces} pieces are left.`)
        }
    }
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])
