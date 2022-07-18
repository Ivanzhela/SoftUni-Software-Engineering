function bestPlayer(input) {
    let index = 0;
    let name = input[index];
    index++;
    let score = Number(input[index]);
    index++;
    let hatTrick = 3;
    let bestPlayerScore = 0;
    let bestPlayerName = "";
    let bestOfbest = false;

    while(name !== "END") {
        if(score <= bestPlayerScore) {
            score = bestPlayerScore;
            name = bestPlayerName;
        }
        bestPlayerName = name;
        bestPlayerScore = score;
        if(bestPlayerScore >= 10) {
            console.log(`${bestPlayerName} is the best player!`);
            console.log(`He has scored ${bestPlayerScore} goals and made a hat-trick !!!`)
        
            bestOfbest = true;
            break;

        }
        name = input[index];
        index++;
        score = Number(input[index]);
        index++;
    }
    if(bestOfbest === false) {
    if(bestPlayerScore >= hatTrick) {
        console.log(`${bestPlayerName} is the best player!`);
        console.log(`He has scored ${bestPlayerScore} goals and made a hat-trick !!!`)
    } else {
        console.log(`${bestPlayerName} is the best player!`);
        console.log(`He has scored ${bestPlayerScore} goals.`)
    }
}
}
bestPlayer(["Neymar", "2",
"Ronaldo",
"9",
"Messi",
"3",
"END"])
