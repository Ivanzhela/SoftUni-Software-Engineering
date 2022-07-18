function oscarsWeekInCinema(input) {
    let ime = input[0];
    let vidNaZala = input[1];
    let broiBileti = Number(input[2]);
    let suma = 0;

    switch(ime) {
        case "A Star Is Born" :
            if(vidNaZala === "normal") {
            suma = 7.50;
            } else if(vidNaZala === "luxury") {
                suma = 10.50
            } else {
                suma = 13.50
            }
            break;
        case "Bohemian Rhapsody" :
            if(vidNaZala === "normal") {
                suma = 7.35;
                } else if(vidNaZala === "luxury") {
                    suma = 9.45
                } else {
                    suma = 12.75
                }
            break;
        case "Green Book" :
            if(vidNaZala === "normal") {
                suma = 8.15;
                } else if(vidNaZala === "luxury") {
                    suma = 10.25
                } else {
                    suma = 13.25
                }
            break;
        case "The Favourite" :
            if(vidNaZala === "normal") {
                suma = 8.75;
                } else if(vidNaZala === "luxury") {
                    suma = 11.55
                } else {
                    suma = 13.95
                }
    }
    let finalSum = broiBileti * suma
    console.log(`${ime} -> ${finalSum.toFixed(2)} lv.`)
}
oscarsWeekInCinema(["A Star Is Born",
"luxury",
"42"])
