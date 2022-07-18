function addBags(input) {
    let priceOfBaggage20kg = Number(input[0]);
    const kilogramsOfBaggage = Number(input[1]);
    const daysToTravel = Number(input[2]);
    const countBaggage = Number(input[3]);
    let price = 0;
    if (kilogramsOfBaggage < 10) {
        price = priceOfBaggage20kg * 0.20;
    } else if(kilogramsOfBaggage >= 10 && kilogramsOfBaggage <= 20) {
        price = priceOfBaggage20kg * 0.50;
    } else if(kilogramsOfBaggage > 20) {
        price = priceOfBaggage20kg 
    }
    if(daysToTravel > 30) {
        price = price + (price * 0.10);
    } else if(daysToTravel >= 7 && daysToTravel <= 30) {
        price = price + (price * 0.15);
    } else if(daysToTravel < 7) {
        price = price + (price * 0.40);
    }
    let totalPrice = countBaggage * price;
    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`)

}
addBags(["30",
"18",
"15",
"2"])
