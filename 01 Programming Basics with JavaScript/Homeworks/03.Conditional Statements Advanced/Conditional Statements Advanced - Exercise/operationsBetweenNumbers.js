function operationsBetweenNumbers(input) {
    const n1 = Number(input[0]);
    const n2 = Number(input[1]);
    const operator = input[2];
    let sum = 0
    let evenOrOdd = "" 
  
    switch(operator) {
        case "+" : sum = n1 + n2; break;
        case "-" : sum = n1 - n2; break;
        case "*" : sum = n1 * n2; break;
        case "/" : sum = n1 / n2; break;
        case "%" : sum = n1 % n2; break;
    }
    if(operator === "+" || operator === "-" || operator === "*") {
        
        if(sum % 2 === 0){
            evenOrOdd = "even"
        } else {
            evenOrOdd = "odd"
        }
        console.log(`${n1} ${operator} ${n2} = ${sum} - ${evenOrOdd}`);

    } else if(operator === "/" || operator === "%") {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`)
        } else if(operator === "/") {
            console.log(`${n1} ${operator} ${n2} = ${sum.toFixed(2)}`)
        } else {
            console.log(`${n1} ${operator} ${n2} = ${sum}`)
        }
    }
}
operationsBetweenNumbers(["10",
"3",
"%"])

