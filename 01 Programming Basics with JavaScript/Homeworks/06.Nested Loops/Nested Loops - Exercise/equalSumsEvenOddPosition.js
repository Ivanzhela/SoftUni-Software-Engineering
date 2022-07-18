function equalSumsEvenOdd(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let printLine = "";
    for(let index = start; index <= end;index++) {
        let curNum = "" + index;
        let odd = 0;
        let even = 0;
        for( let j = 0; j <= curNum.length; j++) {
            let currDigit = Number(curNum.charAt(j));
            if(j % 2 === 0) {
                even += currDigit;
            } else {
                odd += currDigit;
            }
        }
        if ( odd === even) {
            printLine += ` ${index}`;
        }
    }
    console.log(printLine)
}
equalSumsEvenOdd(["100000",
"100050"])
