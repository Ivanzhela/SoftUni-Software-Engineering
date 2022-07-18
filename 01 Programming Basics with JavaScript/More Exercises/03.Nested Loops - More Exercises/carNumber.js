function  carNumber(input) {
let firstNumber = Number(input[0]);
let lastNumber = Number(input[1]);
let num = false;
let printLine = "";
    for(let a = firstNumber; a <= lastNumber;a++) {
        for(let b = firstNumber; b <= lastNumber;b++) {
            for(let c = firstNumber;c <= lastNumber;c++) {
                for(let d = firstNumber; d <= lastNumber; d++) {
                    num = false
                    if(a % 2 === 0  && d % 2 === 1 && a > d && (b + c) % 2 === 0) {
                        num = true;
                    } else if (a % 2 === 1 && d % 2 === 0 && a > d && (b + c) % 2 === 0) {
                        num = true;
                    }
                    if(num) {
                        printLine += "" + a + b + c + d + " "
                    }
                    
                }
            }
        }
    }
    console.log(printLine)
}
carNumber(["3", "5"])