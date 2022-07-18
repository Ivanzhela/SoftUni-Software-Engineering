function bitcoin(input) {
    let index = 0;
    let gold = Number(input[index]);
    index++;
    let oneGold = 67.51;
    let oneBitcoin = 11949.16;
    let dayCounter = 0;
    let totalMoney = 0;
    let bitcoin = 0;
    let firstDay = 0;

    while(gold ) {
        dayCounter++;
        if(dayCounter % 3 === 0) {
            gold -= gold * 0.3
        }
        totalMoney += gold * oneGold;
        if(totalMoney >= oneBitcoin) {
            bitcoin++;
            if(bitcoin === 1) {
                firstDay = dayCounter;
            }
            totalMoney -= oneBitcoin;
            while(totalMoney > oneBitcoin) {
                if(totalMoney <= 0) {
                    break;
                }
                totalMoney -= oneBitcoin;
                bitcoin++;
            }
        }
        gold = Number(input[index]);
        index++;
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if(bitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`)
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)
}
bitcoin([3124.15, 504.212, 2511.124])