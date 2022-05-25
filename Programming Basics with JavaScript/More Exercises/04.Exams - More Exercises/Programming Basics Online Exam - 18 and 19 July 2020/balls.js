function balls(input) {
    let index = 0;
    let balls = Number(input[index]);
    index++;
    let totalPoints = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let blackBalls = 0;
    let elseBalls = 0;

    for(let i = 0; i < balls; i++) {
        ballsCount = input[index];
        index++;

        if(ballsCount === "red") {
            redBalls++; 
            totalPoints += 5;
        } else if( ballsCount === "orange") {
            orangeBalls++;
            totalPoints += 10;
        } else if( ballsCount === "yellow") {
            yellowBalls++;
            totalPoints += 15;
        } else if( ballsCount === "white") {
            whiteBalls++
            totalPoints += 20;
        } else if( ballsCount === "black") {
            blackBalls++;
            totalPoints = Math.floor(totalPoints / 2);
        } else {
            elseBalls++;
        }
    }
        console.log(`Total points: ${totalPoints}`);
        console.log(`Red balls: ${redBalls}`);
        console.log(`Orange balls: ${orangeBalls}`);
        console.log(`Yellow balls: ${yellowBalls}`);
        console.log(`White balls: ${whiteBalls}`);
        console.log(`Other colors picked: ${elseBalls}`);
        console.log(`Divides from black balls: ${blackBalls}`);

}
balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])
