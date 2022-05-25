function numberPyramid(input) {
    let n = Number(input[0]);
    let counter = 0;
    let isEqual = false;

    for(let rows = 1; rows <= n; rows++) {
        let printLine = "";
        for(let cols = 1; cols <= rows; cols++) {
            counter++;
            printLine += counter + " ";
            if(counter === n) {
                isEqual = true;
                break;
            }
        }
        console.log(printLine);
        if(isEqual) {
            break;
        }
    }
}
numberPyramid(["7"])