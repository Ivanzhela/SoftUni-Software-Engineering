function reportSystem(input) {
    let index = 0;
    let allSum = Number(input[index]);
    index++;
    let priceOfProduct = input[index];
    let nesubrani = true;
    let counter = 0;
    let counterBroi = 0;
    let counterKarta = 0
    let srednoVBroi = 0;
    let srednoSKarta = 0;
    let sum = 0;
    let cena = 0

    while(priceOfProduct !== "End") {
        cena = Number(priceOfProduct);
        counter++;
        
        if(counter % 2 === 0) {
            if(cena < 10) {
                
                console.log("Error in transaction!")
            } else {
                counterKarta++;
                srednoSKarta += cena;
                sum += cena;
                console.log("Product sold!")
            }
        } else {
            if(cena > 100) {
                console.log("Error in transaction!")
            } else {
                counterBroi++;
                srednoVBroi += cena;
                sum += cena
                console.log("Product sold!")
            }
        }
        if(sum >= allSum) {
            console.log(`Average CS: ${(srednoVBroi / counterBroi).toFixed(2)}`)
            console.log(`Average CC: ${(srednoSKarta / counterKarta).toFixed(2)}`)
            nesubrani = false;
            break;
        } 
        index++;
        priceOfProduct = input[index];
    }
    if(nesubrani === true) {
    if(priceOfProduct === "End") {
        console.log("Failed to collect required money for charity.")
        }
    }
}

reportSystem(["600","86","150","98","227","End"])