function sumOfTwoNumbers(input) {
let firstNumber = Number(input[0]);
let secondNumber = Number(input[1]);
let magicNumber = Number(input[2]);
let counter = 0;
let isMagic = true
let sum = 0;

for(let a = firstNumber; a <= secondNumber; a++) {
    for(let b = firstNumber; b <= secondNumber; b++) {
        counter++;
        sum = a + b;
        if(sum === magicNumber) {
            console.log(`Combination N:${counter} (${a} + ${b} = ${magicNumber})`)
            isMagic = false;
            break;
        }
        if(sum === magicNumber) {
            break
        }
    }
    if(sum === magicNumber) {
        break
    }
}
if(isMagic === true) {
    console.log(`${counter} combinations - neither equals ${magicNumber}`)
}
}
sumOfTwoNumbers(["23","24","20"])