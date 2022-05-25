function challengeTheWedding(input) {
    let countMan = Number(input[0]);
    let countWomen = Number(input[1]);
    let maxFreePlace = Number(input[2]);
    let counter = 0;
    let printLine = "";

    for(let a = 1; a <= countMan;a++) {
        for(let b = 1; b <= countWomen;b++) {
            
                if(counter >= maxFreePlace){
                    break;
                }
                counter ++;
                printLine += `(${a} <-> ${b}) `
            
        
        }
        if(counter >= maxFreePlace){
            break;
        }
    }
    console.log(printLine)
}
challengeTheWedding(["5","8","3"])