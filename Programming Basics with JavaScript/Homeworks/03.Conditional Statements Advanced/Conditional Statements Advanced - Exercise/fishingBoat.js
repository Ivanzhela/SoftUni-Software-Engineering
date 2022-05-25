function fishingBoat(input) {
    const buget = Number(input[0]);
    const season = input[1];
    const countFisherman = Number(input[2]);

    let priceOfShip = 0;

    if(season === "Spring") {
        priceOfShip = 3000;
    } else if (season === "Summer" || season === "Autumn") {
        priceOfShip = 4200;
    } else if (season === "Winter") {
        priceOfShip = 2600;
    }

    if (countFisherman <=6) {
        priceOfShip = priceOfShip - (priceOfShip * 0.10);
    } else if (countFisherman >= 7 && countFisherman <= 11) {
        priceOfShip = priceOfShip - (priceOfShip * 0.15);
    } else if (countFisherman >= 12) {
        priceOfShip = priceOfShip - (priceOfShip * 0.25);
    } 
    if (countFisherman % 2 === 0 && season != "Autumn") {
        priceOfShip = priceOfShip - (priceOfShip  * 0.05);
    }
    let remainingPrice = Math.abs(buget - priceOfShip);
    if (buget >= priceOfShip) {
        console.log(`Yes! You have ${remainingPrice.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${remainingPrice.toFixed(2)} leva.`)
    }
    
}
fishingBoat(["3000",
"Summer",
"11"])
