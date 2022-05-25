function tournamentOfChristmas(input) {
let index = 0;
let deysOfTournament = Number(input[index]);
index++;
let nameGame = input[index];
index++;
let winDays = 0;
let lostDays = 0;
let money = 0

for(let i = 0; i < deysOfTournament;i++){
let winOfDay = 0;
let lostOfDay = 0;
let moneyForDay = 0;
while(nameGame !== "Finish") {
    let winOrlose = input[index];
index++;
    if(winOrlose === "win") {
        winOfDay++;
        moneyForDay += 20;
    } else {
        lostOfDay++;
    
    }
    nameGame = input[index];
    index++;

}
if(winOfDay > lostOfDay) {
    moneyForDay = moneyForDay + (moneyForDay * 0.10)
    winDays++;
} else {
    lostDays++
}
money += moneyForDay;
nameGame = input[index];
index++
}
if(winDays > lostDays) {
    money = money + (money * 0.20)
    console.log(`You won the tournament! Total raised money: ${money.toFixed(2)}`);
} else {
    console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`)
}

}
tournamentOfChristmas(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])
