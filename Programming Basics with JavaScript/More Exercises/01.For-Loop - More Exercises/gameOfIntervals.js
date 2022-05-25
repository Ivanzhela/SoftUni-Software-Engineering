function gameOfIntervals(input) {
    let index = 0;
    let vhod = Number(input[index]);
    index++;
    let chislo = Number(input[index]);
    index++;
    let rezultat = 0;
    let edno = 0;
    let dve = 0;
    let tri = 0;
    let chetiri = 0;
    let pet = 0;
    let shest = 0;

    for(let i = 1; i <= vhod; i++) {
        if(chislo >= 0 && chislo <= 9) {
            chislo = chislo * 0.20
            rezultat += chislo
            edno++;
        } else if ( chislo >= 10 && chislo <= 19) {
            chislo = chislo * 0.30
            rezultat += chislo
            dve++;
        } else if ( chislo >= 20 && chislo <= 29) {
            chislo = chislo * 0.40
            rezultat += chislo
            tri++;
        } else if(chislo >= 30 && chislo <= 39) {
            chislo = 50
            rezultat += chislo
            chetiri++;
        } else if (chislo >= 40 && chislo <= 50) {
            chislo = 100;
            rezultat += chislo
            pet++;
        } else {
            rezultat /= 2;
            shest++;
        }
        chislo = Number(input[index]);
        index++;
    }
    console.log(`${rezultat.toFixed(2)}`);
    console.log(`From 0 to 9: ${(edno / vhod * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(dve / vhod * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(tri / vhod * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(chetiri / vhod * 100).toFixed(2)}%`);
    console.log(`From 40 to 49: ${(pet / vhod * 100).toFixed(2)}%`)
    console.log(`Invalid numbers: ${(shest / vhod * 100).toFixed(2)}%`)
}
gameOfIntervals(["10",
    "43",
    "57",
    "-12",
    "23",
    "12",
    "0",
    "50",
    "40",
    "30",
    "20"
    ])