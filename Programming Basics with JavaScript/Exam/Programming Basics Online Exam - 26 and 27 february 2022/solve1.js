function solve1(input) {

    let broiRolkiHartiq = Number(input[0]);
    let broiRolkiPlat = Number(input[1]);
    let litriLepilo = Number(input[2]);
    let procentNamalenie = Number(input[3]);

    let hartiq = 5.80;
    let plat = 7.20;
    let lepilo = 1.20;

    let cena = hartiq * broiRolkiHartiq + plat * broiRolkiPlat 
    + lepilo * litriLepilo;
    let cenaSprocent = cena - (cena * procentNamalenie / 100)
    console.log(cenaSprocent.toFixed(3))
}
solve1(["2",
"3",
"2.5",
"25"])
