function solve3(input) {

    let tegloNaPratka = Number(input[0]);
    let tipUsluga = input[1];
    let razstoqnieVKm = Number(input[2]);
    let cenaZaKm = 0; 
    let krainaCena = 0;
    let nadcenkaZaKm = 0;
    let nadcenkaZaKg = 0;
    switch(tipUsluga) {
        case "standard" : 
            if(tegloNaPratka < 1) {
                cenaZaKm = 0.03
            } else if(tegloNaPratka >= 1 && tegloNaPratka < 10) {
                cenaZaKm = 0.05;
            } else if(tegloNaPratka >= 10 && tegloNaPratka < 40) {
                cenaZaKm = 0.10;
            } else if(tegloNaPratka >= 40 && tegloNaPratka < 90) {
                cenaZaKm = 0.15;
            } else if(tegloNaPratka >= 90 && tegloNaPratka < 150) {
                cenaZaKm = 0.20;
            }
            krainaCena = cenaZaKm * razstoqnieVKm;
            console.log(`The delivery of your shipment with weight of ${tegloNaPratka.toFixed(3)} kg. would cost ${krainaCena.toFixed(2)} lv.`)
            break;
        case "express" :
            if(tegloNaPratka < 1) {
                nadcenkaZaKg = tegloNaPratka * (0.03 * 0.80)
                nadcenkaZaKm = razstoqnieVKm * nadcenkaZaKg;
                cenaZaKm = 0.03
            } else if(tegloNaPratka >= 1 && tegloNaPratka < 10) {
                nadcenkaZaKg = tegloNaPratka * (0.05 * 0.40)
                nadcenkaZaKm = razstoqnieVKm * nadcenkaZaKg;
                cenaZaKm = 0.05
            } else if(tegloNaPratka >= 10 && tegloNaPratka < 40) {
                nadcenkaZaKg = tegloNaPratka * (0.10 * 0.05)
                nadcenkaZaKm = razstoqnieVKm * nadcenkaZaKg;
                cenaZaKm = 0.10
            } else if(tegloNaPratka >= 40 && tegloNaPratka < 90) {
                nadcenkaZaKg = tegloNaPratka * (0.15 * 0.02)
                nadcenkaZaKm = razstoqnieVKm * nadcenkaZaKg;
                cenaZaKm = 0.15

            } else if(tegloNaPratka >= 90 && tegloNaPratka < 150) {
                nadcenkaZaKg = tegloNaPratka * (0.20 * 0.01)
                nadcenkaZaKm = razstoqnieVKm * nadcenkaZaKg;
                cenaZaKm = 0.20
            }
            krainaCena = (cenaZaKm * razstoqnieVKm) + nadcenkaZaKm
            console.log(`The delivery of your shipment with weight of ${tegloNaPratka.toFixed(3)} kg. would cost ${krainaCena.toFixed(2)} lv.`)
        break;
            
    }
    
    
}
solve3(["87",
"express",
"130"])

