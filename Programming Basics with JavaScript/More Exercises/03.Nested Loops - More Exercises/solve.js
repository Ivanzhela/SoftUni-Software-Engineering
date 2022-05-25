function solve(input) {
 let firstNumber = Number(input[0]);
 let secondNumber = Number(input[1]);
 let thirdNumber = Number(input[2]);
 let printLine = "";
 let primeNum = true;

 for(let first = 1; first <= firstNumber; first++) {
      
    for(let second = 2; second <= secondNumber; second++) {
        let primeNum = true;
        for(let i = 2; i < second; i++) {
        if(second % i === 0) {
            primeNum = false;
            break;
            }
        }
        if(primeNum) {
            
            for(let third = 1; third <= thirdNumber; third++) {
                
                    if(first % 2 === 0 && third % 2 === 0) {
                        printLine = "" + first + " " + second + " " + third + "";
                        console.log(printLine)
   
                    }
                
            }
        }
    }
}

}
solve(["8", "2", "8"])