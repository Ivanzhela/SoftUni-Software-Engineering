function foodForPets(input) {
    let index = 0;
    let broiDni = Number(input[index]);
    index++;
    let obshtoKolichestvoHrana = Number(input[index]);
    index++;
    let obshtoBiskviki = 0;
    let obshraHrana = 0;
    let obshtoKotka = 0;
    let obshtoKuche = 0;

    for(let i = 1; i <= broiDni; i++) {
        let izqdenaOtKuche = Number(input[index]);
    index++;
        let izqdenaOtKotka = Number(input[index]);
    index++;
        obshraHrana += izqdenaOtKotka + izqdenaOtKuche;
        obshtoKotka += izqdenaOtKotka;
        obshtoKuche += izqdenaOtKuche;
        if(i % 3 === 0){
            let biskvitki = (izqdenaOtKotka + izqdenaOtKuche) * 0.10;
            
            obshtoBiskviki += biskvitki;
        }
    

    }
    
    console.log(`Total eaten biscuits: ${Math.floor(obshtoBiskviki)}gr.`)
    console.log(`${(obshraHrana/obshtoKolichestvoHrana * 100).toFixed(2)}% of the food has been eaten.`)
    console.log(`${(obshtoKuche/obshraHrana * 100).toFixed(2)}% eaten from the dog.`)
    console.log(`${(obshtoKotka/obshraHrana * 100).toFixed(2)}% eaten from the cat.`)

}
foodForPets(["3",
"1000",
"300",
"20",
"100",
"30",
"110",
"40"])
