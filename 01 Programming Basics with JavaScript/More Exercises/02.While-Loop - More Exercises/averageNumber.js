function averageNumber(input) {
let index = 0;
let vsichkiChisla = Number(input[index]);
index++;
let chislo = Number(input[index]);
index++;
let sum = 0;
for(let a = 1; a <= vsichkiChisla;a++) {
    sum += chislo;
    chislo = Number(input[index]);
    index++;
}
console.log((sum / vsichkiChisla).toFixed(2))
}
averageNumber(["4","3","2","4","2"])