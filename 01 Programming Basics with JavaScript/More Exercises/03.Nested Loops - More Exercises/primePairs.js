function primePairs(input) {
let purvaDvoika = Number(input[0]);
let vtoraDvoika = Number(input[1]);
let krainaPurvaStoinost = Number(input[2]);
let krainaVtoraStoinost = Number(input[3]);

let primeFirst = true;
let primeSecond = true;
let purva = krainaPurvaStoinost + purvaDvoika;
let vtora = krainaVtoraStoinost + vtoraDvoika;
for(let a = purvaDvoika; a <= purva; a++) {
    primeFirst = true
    for(let b = 2; b < a; b++) {
        if(a % b === 0) {
            primeFirst = false;
            break;
        }
    } 
        for(let c = vtoraDvoika; c <= vtora; c++) {
            primeSecond = true;
            for(let d = 2; d < c; d++) {
                if(c % d === 0) {
                    primeSecond = false;
                    break;
                }

            }
            if(primeFirst && primeSecond) {
                console.log(`${a}${c}`)
        }
    }
    
}
}

primePairs(["10","30","9","6"])