function careOfPuppy(input) {
    let index = 0;
    let zakupenoKolichestvoHrana = Number(input[index])
    index++;
    let izqdenaHranaNaQdene = input[index];
    index++;
    let obshtoIzqdeno = 0;

    let convert = zakupenoKolichestvoHrana * 1000;
    while(izqdenaHranaNaQdene !== "Adopted") {
        let izqdena = Number(izqdenaHranaNaQdene)
        obshtoIzqdeno += izqdena;
        izqdenaHranaNaQdene = input[index];
        index++
        
    }
    let razlika = Math.abs(obshtoIzqdeno - convert)
    if(obshtoIzqdeno <= convert){
    console.log(`Food is enough! Leftovers: ${razlika} grams.`)
    } else {
        console.log(`Food is not enough. You need ${razlika} grams more.`)
    }
}   
careOfPuppy(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"])
