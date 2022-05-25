function dishwasher(input) {
let preparatZaChiniq = 5;
let preparatZaTendjera = 15;
let index = 0;
let broiButilki = Number(input[index]);
index++;
let broiSudove = input[index];
index++;
let neizmiti = true;
let preparat = 750 * broiButilki;
let counter = 1;
let chistiChinii = 0;
let chistiTendjeri = 0

while(broiSudove !== "End") {
    let sudove = Number(broiSudove)
    if(preparat < 0) {

        console.log(`Not enough detergent, ${Math.abs(preparat)} ml. more necessary!`);
        neizmiti = false;
        break;
    }
    
    if(counter % 3 === 0) {
        sudove *= preparatZaTendjera;
        chistiTendjeri += Number(broiSudove);
    } else {
        sudove *= preparatZaChiniq;
        chistiChinii += Number(broiSudove);
    }
    preparat -= sudove;
    broiSudove = input[index];
    index++;
    counter++;
}
if(neizmiti) {
    console.log(`Detergent was enough!`);
    console.log(`${chistiChinii} dishes and ${chistiTendjeri} pots were washed.`)
    console.log(`Leftover detergent ${preparat} ml.`)
}
}
dishwasher(["1","10","15","10","12","13","30"])