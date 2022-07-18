function piramid(base, increment) {
    let lapis = 0;
    let gold = 0;
    let size = 0;
    let marble = 0;
    let stone = 0;
    let step = 0;
    let allLapis = 0;
    let allMarble = 0;
    let allStone = 0;
    if (base % 2 === 0) {
        gold = (2 * 2) * increment;
        for (let a = base; a >= 4; a -= 2) {
            step++;
            if (step === 5) {
                lapis = ((a - 1) * 4);
                size = a * a;
                stone = size - lapis;
                allStone += stone;
                allLapis += lapis;
            } else {
                size = a * a;
                marble = (a - 1) * 4;
                stone = size - marble;
                allStone += stone;
                allMarble += marble;
            }

        }
    } else {
        gold = (1 * 1) * increment;
        for (let a = base; a >= 3; a -= 2) {
            step++;
            if (step % 5 === 0) {
                lapis = ((a - 1) * 4);
                size = a * a;
                stone = size - lapis;
                allLapis += lapis;
                allStone += stone;
            } else {
                size = a * a;
                marble = (a - 1) * 4;
                stone = size - marble;
                allStone += stone;
                allMarble += marble;
            }


        }
    }
    allLapis *= increment;
    allMarble *= increment;
    allStone *= increment;
    console.log(`Stone required: ${Math.ceil(allStone)}`);
    console.log(`Marble required: ${Math.ceil(allMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(allLapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor((step + 1) * increment)}`)
}
piramid(23, 0.5)
