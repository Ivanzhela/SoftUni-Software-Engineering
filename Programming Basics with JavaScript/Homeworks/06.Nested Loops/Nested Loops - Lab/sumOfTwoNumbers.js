function sumOfTwoNumbers(input) {
    let firstN = Number(input[0]);
    let lastN = Number(input[1]);
    let magicNumber = Number(input[2]);
    let sum = 0;
    let isFound = false;
    let counter = 0;
    for(let i = firstN; i <= lastN;i++){
        for(let u = firstN; u <= lastN;u++){
            sum = i + u;
            counter++;
            if(sum === magicNumber) {
                console.log(`Combination N:${counter} (${i} + ${u} = ${magicNumber})`)
                isFound = true;
                break;
            }
        }
        if(isFound) {
            break;
        }
    }
    if(!isFound){
    console.log(`${counter} combinations - neither equals ${magicNumber}`)
    }
}
sumOfTwoNumbers(["23",
"24",
"20"])

