function theSongOfTheWheels(input) {
    let num = Number(input[0])
    let counter = 0;
    let pass = "";
    let printLine = "";
    let line = false
    for(let a = 1; a <= 9;a++) {
        for(let b = 1; b <= 9; b++) {
            for(let c = 1; c <= 9; c++) {
                for(let d = 1; d<= 9; d++) {
                    if((a*b + c*d) === num && a < b && c > d) {
                        printLine += "" + a + b + c + d + " "
                        counter++
                        if(counter === 4) {
                            pass = "Password: " + a + b + c + d + ""
                        } if (counter < 4) {
                            pass = "No!"
                        }
                        line = true
                    }
                }
            }
        }
    }
    if(counter === 0) {
        console.log("No!")
    }
    if(line) {
    console.log(printLine)
    console.log(pass)
    }
}
theSongOfTheWheels(["139"])