function journey(input) {
    let buget = Number(input[0]);
    const season = input[1];
    let destinacion = ""
    let where = ""
    if (buget <= 100) {
        destinacion = "Bulgaria";
        if (season === "summer") {
            buget *= 0.30;
            where = "Camp"
        } else {
            buget *= 0.70;
            where = "Hotel"
        }
    } else if (buget <= 1000) {
        destinacion = "Balkans"
        if (season === "summer") {
            buget *= 0.40;
            where = "Camp"
        } else {
            buget *= 0.80;
            where = "Hotel"
        }
    } else {
        destinacion = "Europe"
        if ( season === "summer" || season === "winter") {
            buget *= 0.90;
            where = "Hotel"
        }
    }
    console.log(`Somewhere in ${destinacion}`)
    console.log(`${where} - ${buget.toFixed(2)}`)
}
journey(["75", "winter"])