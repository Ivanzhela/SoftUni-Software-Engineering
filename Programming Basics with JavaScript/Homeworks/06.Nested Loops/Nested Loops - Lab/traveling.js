function traveling(input) {
    let index = 0;
    let destination = input[index];
    index++;


    

    while(destination !== "End") {
        let anisBugget = 0;
        let minimalBugget = Number(input[index]);
        index++;
        for(let sum = 0; sum <= minimalBugget;sum++ ) {
            let money = Number(input[index]);
            anisBugget += money;
            if(anisBugget >= minimalBugget) {
                console.log(`Going to ${destination}!`)
                break;
            }
            money = Number(input[index]);
            index++;
        }
        index++;
    destination = input[index]
        index++;
    }
}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
