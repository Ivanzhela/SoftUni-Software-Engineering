function vacation(input) {
    index = 0;
    let excursionPrice = Number(input[index]);
    index++;
    let haveMoney = Number(input[index]);
    index++;
    let dayCounter = 0;
    let daySpend = 0;

    while(haveMoney < excursionPrice) {
        let spendOrSave = input[index];
        index++;
        let money = Number(input[index]);
        dayCounter++;
        switch(spendOrSave) {
            case "spend" :
            haveMoney -= money;
                if(haveMoney < 0) {
                haveMoney = 0;
                }
            daySpend++;
            break;
            case "save" :
            haveMoney += money;
            daySpend = 0;
            break;
        }
        if(daySpend >= 5) {
            console.log("You can't save the money.")
            console.log(`${dayCounter}`)
            break;
        }
        index++;
    } 
    if( haveMoney >= excursionPrice) {
        console.log(`You saved the money for ${dayCounter} days.`)
    }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
