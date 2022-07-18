function godzillaVsKong(input) {

    let biudjetNaFilm = Number(input[0]);
    let broiStatisti = Number(input[1]);
    let cenaNaOblekloZaSTatis = Number(input[2]);

    let dekor = biudjetNaFilm * 0.10;
    let obleklaZaVsichki = cenaNaOblekloZaSTatis * broiStatisti;
    if(broiStatisti > 150) {
        obleklaZaVsichki =obleklaZaVsichki - ( obleklaZaVsichki * 0.10);
    }
    let nujniPari = dekor + obleklaZaVsichki;
    let razlika = Math.abs(nujniPari - biudjetNaFilm)
    if(nujniPari > biudjetNaFilm) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${razlika.toFixed(2)} leva more.`)
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${razlika.toFixed(2)} leva left.`)
    }
}
godzillaVsKong(["15437.62",
"186",
"57.99"])
