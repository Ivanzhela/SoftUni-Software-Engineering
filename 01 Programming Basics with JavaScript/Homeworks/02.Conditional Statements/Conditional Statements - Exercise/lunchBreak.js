function lunchBreak(input) {

    const nameOfTvSeries = input[0];
    const oneEpisode = Number(input[1]);
    const breaks = Number(input[2]);

    let lunchTime = breaks / 8;
    let rest = breaks / 4;
    let freeTime = breaks - lunchTime - rest;
    let leftTime = Math.abs(freeTime - oneEpisode);

    if (freeTime >= oneEpisode) {
        console.log(`You have enough time to watch ${nameOfTvSeries} and left with ${Math.ceil(leftTime)} minutes free time.`)
    }
    if (freeTime < oneEpisode) {
        console.log(`You don't have enough time to watch ${nameOfTvSeries}, you need ${Math.ceil(leftTime)} more minutes.`)
    }
}
lunchBreak(["Teen Wolf",
"48",
"60"])

