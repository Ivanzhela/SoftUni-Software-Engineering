function accountBalance(input) {
    let index = 0;
    let commands = input[index];
    index++;
    let sum = 0;

    while(commands !== "NoMoreMoney") {
        let money = Number(commands);
        if(money < 0) {
            console.log("Invalid operation!")
            break;
        }
        
        sum += money;
        console.log(`Increase: ${money.toFixed(2)}`)
        commands = input[index]
        index++;
    }
    console.log(`Total: ${sum.toFixed(2)}`)
}
accountBalance(["120",
"45.55",
"-150"])
