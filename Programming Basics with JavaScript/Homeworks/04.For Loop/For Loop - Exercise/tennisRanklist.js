function tennisRanklist(input) {
    let index = 0;
    let turnirsCount = Number(input[index])
    index++;
    let points = Number(input[index]);
    index++;
    let sum = 0;
    let win = 0;

    for (let i = 0; i < turnirsCount; i++) {
        let turnirs = input[index];
        index++;

        if(turnirs === "W") {
            sum += 2000;
        } else if(turnirs === "F") {
            sum += 1200;
        } else {
            sum += 720;
        }
        if(turnirs === "W") {
            win++;
        }
    }
    let procentOfWin = win / turnirsCount * 100
    let finalsum = sum + points
    let avarage = (Math.floor(sum / turnirsCount))
    console.log(`Final points: ${finalsum}`);
    console.log(`Average points: ${avarage}`)
    console.log(`${procentOfWin.toFixed(2)}%`)
}
tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])


