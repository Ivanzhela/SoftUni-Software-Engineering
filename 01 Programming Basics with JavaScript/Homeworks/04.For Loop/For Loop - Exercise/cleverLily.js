function cleverLily(input) {
    const lilyYears = Number(input[0]);
    const laundryPrice = Number(input[1]);
    const toyPrice = Number(input[2]);
    let money = 0;
    let tempMoney = 10 ;
    let toyCouner = 0;
    for(let i = 1; i <= lilyYears; i++) {
        if (i % 2 === 0 ) {
            money += tempMoney;
            tempMoney += 10;
            money -= 1;
        } else {
            toyCouner++;
        }
    }
    let lilyMoney = (toyCouner * toyPrice) + money;
    let balanceOfMoney = Math.abs(laundryPrice - lilyMoney);
    if(lilyMoney >= laundryPrice) {
        console.log(`Yes! ${balanceOfMoney.toFixed(2)}`)
    } else {
        console.log(`No! ${balanceOfMoney.toFixed(2)}`)
    }
} 
cleverLily(["21",
"1570.98",
"3"])

