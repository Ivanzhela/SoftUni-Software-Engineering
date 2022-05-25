function solve2(input) {

    let djobniNaDen = Number(input[0]);
    let pariSpecheleniZaDen = Number(input[1]);
    let razhodiZaPeriod = Number(input[2]);
    let cenaNaPodaruk = Number(input[3]);

    let spesteniPari = djobniNaDen * 5;
    let specheleniPari = pariSpecheleniZaDen * 5;
    let obshtoPari = specheleniPari + spesteniPari;
    let pari = obshtoPari - razhodiZaPeriod;

    if(pari >= cenaNaPodaruk) {
        console.log(`Profit: ${pari.toFixed(2)} BGN, the gift has been purchased.`)
    } else {
        let ostatuk = cenaNaPodaruk - pari;
        console.log(`Insufficient money: ${ostatuk.toFixed(2)} BGN.`)
    }
}
solve2(["5.12",
"32.05",
"15",
"150"])
