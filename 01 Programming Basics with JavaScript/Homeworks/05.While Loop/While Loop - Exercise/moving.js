function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;
    let countBoxes = input[index];
    index++;
    let allBoxes = width * length * height;

    while(countBoxes !== "Done") {
        allBoxes -= countBoxes;
        if(allBoxes <= 0) {
           console.log(`No more free space! You need ${Math.abs(allBoxes)} Cubic meters more.`)
        break;
        }
        countBoxes = input[index];
        index++;
    }
    if(countBoxes === "Done") {
        if(allBoxes <= 0) {
            console.log(`No more free space! You need ${Math.abs(allBoxes)} Cubic meters more.`)
        } else {
        console.log(`${allBoxes} Cubic meters left.`)
        }
    }
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

