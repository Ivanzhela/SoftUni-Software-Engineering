function solve2(array) {
    let vehicles = array.shift().split(">>");
    let sum = 0;
    for (let i = 0; i < vehicles.length; i++) {
        let currentCommand = vehicles[i].split(" ");
        let carType = currentCommand[0];
        let yearsForTax = Number(currentCommand[1]);
        let kilometers = Number(currentCommand[2]);
        if (carType === "family") {
            let currSum = Math.floor(kilometers / 3000) * 12 + (50 - (yearsForTax * 5));
            console.log(`A ${carType} car will pay ${currSum.toFixed(2)} euros in taxes.`);
            sum += currSum;
        } else if (carType === "heavyDuty") {
            let currSum = Math.floor(kilometers / 9000) * 14 + (80 - (yearsForTax * 8));
            console.log(`A ${carType} car will pay ${currSum.toFixed(2)} euros in taxes.`);
            sum += currSum;
        } else if (carType === "sports") {
            let currSum = Math.floor(kilometers / 2000) * 18 + (100 - (yearsForTax * 9));
            console.log(`A ${carType} car will pay ${currSum.toFixed(2)} euros in taxes.`);
            sum += currSum;
        } else {
            console.log("Invalid car type.");
        }
    }
    console.log(`The National Revenue Agency will collect ${sum.toFixed(2)} euros in taxes.`);
}
solve2((['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']));