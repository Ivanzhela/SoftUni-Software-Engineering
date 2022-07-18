function suitcasesLoad(input) {
    let index = 0;
    let kapacitet = Number(input[index]);
    index++;
    let obemNaKufar = input[index];
    index++;
    let obshtObem = 0;
    let broiKufari = 0;

    while(obemNaKufar !== "End") {
        let obem = Number(obemNaKufar);
        obshtObem += obem;
        
        if(obshtObem >= kapacitet) {
            console.log(`No more space!`);
            console.log(`Statistic: ${broiKufari} suitcases loaded.`)
            break;
        }
        broiKufari++;
        obemNaKufar = input[index];
        index++;
    }
    if(obshtObem < kapacitet){
        console.log(`Congratulations! All suitcases are loaded!`);
        console.log(`Statistic: ${broiKufari} suitcases loaded.`)
    }
}
suitcasesLoad(["700.5",
"180",
"340.6",
"126",
"220"])

