function mountainRun(input) {
    let rekordVSekundi = Number(input[0]);
    let razstoqnieVMetri = Number(input[1]);
    let vremeVSekundi = Number(input[2]);
    let zabavqneVSekundi = 0;
    let daIzkachi = razstoqnieVMetri * vremeVSekundi;
    if(razstoqnieVMetri >= 50) {
    let zabavqne = (Math.floor(razstoqnieVMetri / 50));
    zabavqneVSekundi = zabavqne * 30;
    }
    let vreme = daIzkachi + zabavqneVSekundi;
    if(vreme < rekordVSekundi) {
        console.log(`Yes! The new record is ${vreme.toFixed(2)} seconds.`)
    } else {
        let ostatuk = Math.abs(vreme - rekordVSekundi)
        console.log(`No! He was ${ostatuk.toFixed(2)} seconds slower.`)
    }
}
mountainRun(["1377",
"389",
"3"])
