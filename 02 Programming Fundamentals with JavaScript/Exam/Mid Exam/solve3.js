function solve3(array) {
    let buget = array.shift();
    let students = array.shift();
    let priceOfPackFlour = array.shift();
    let priceOfOneEgg = array.shift();
    let priceOfOneApron = array.shift();
    let apronPrice = priceOfOneApron * (students + Math.ceil(students * 0.2));
    let eggPrice = priceOfOneEgg * 10 * (students);
    let freePack = 0;
    for (let i = 1; i <= students; i++) {
        if (i % 5 === 0)
            freePack++;
    }
    let flourPrice = priceOfPackFlour * (students - freePack);
    let sum = apronPrice + eggPrice + flourPrice;
    if (sum <= buget) {
        console.log(`Items purchased for ${sum.toFixed(2)}$.`);
    } else {
        let neededMoney = sum - buget;
        console.log(`${neededMoney.toFixed(2)}$ more needed.`);
    }
}
solve3([100,
    25,
    4.0,
    1.0,
    6.0])
