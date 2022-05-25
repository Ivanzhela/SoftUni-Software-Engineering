function trekkingMania(input) {
    let index = 0;
    const groupCount = Number(input[index]);
    index++;
    let musala = 0;
    let monbdan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let group = 0

    
    for (i = 0; i < groupCount; i++) {
        let peopleInGroup = Number(input[index]);
        index++;
        group += peopleInGroup;
        if(peopleInGroup <= 5) {
            musala += peopleInGroup;
        } else if(peopleInGroup >= 6 && peopleInGroup <= 12) {
            monbdan += peopleInGroup;
        } else if(peopleInGroup >= 13 && peopleInGroup <= 25) {
            kilimanjaro += peopleInGroup;
        } else if(peopleInGroup >= 26 && peopleInGroup <= 40) {
            k2 += peopleInGroup;
        } else if(peopleInGroup >= 41) {
            everest += peopleInGroup;
        }
    }
    console.log(`${((musala / group) * 100).toFixed(2)}%`)
    console.log(`${((monbdan / group) * 100).toFixed(2)}%`)
    console.log(`${((kilimanjaro / group) * 100).toFixed(2)}%`)
    console.log(`${((k2 / group) * 100).toFixed(2)}%`)
    console.log(`${((everest / group) * 100).toFixed(2)}%`)
}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])

