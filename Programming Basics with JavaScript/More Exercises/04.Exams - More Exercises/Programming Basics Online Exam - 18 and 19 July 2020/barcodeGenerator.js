function barcodeGenerator(input) {
    let malkoChislo = input[0];
    let golqmoChislo = input[1];
    let line = "";

    for(let a = malkoChislo.charAt(0); a <= golqmoChislo.charAt(0); a++) {
        for(let b = malkoChislo.charAt(1); b <= golqmoChislo.charAt(1);b++) {
            for(let c = malkoChislo.charAt(2); c <= golqmoChislo.charAt(2); c++) {
                for(let d = malkoChislo.charAt(3); d <= golqmoChislo.charAt(3); d++) {
                    if(a % 2 === 1 && b % 2 === 1 && c % 2 === 1 && d % 2 === 1) {
                        line += "" + a + b + c + d + " ";
                       
                    }
                }
            }
        }
    }

    console.log(line)
}
barcodeGenerator(["2345",
"6789"])