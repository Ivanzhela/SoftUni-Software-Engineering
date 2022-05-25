function onTimeForTheExam(input) {
    const hourOfExam = Number(input[0]);
    const minutesOfExam = Number(input[1]);
    const hourOfArrival = Number(input[2]);
    const minutesOfArrival = Number(input[3]);

    const totalExamInMin = hourOfExam * 60 + minutesOfExam;
    const totalArrivalinMin = hourOfArrival * 60 + minutesOfArrival;
    const differenceInTime = Math.abs(totalExamInMin - totalArrivalinMin);
    const hourDiff = Math.floor(differenceInTime / 60);
    let minDiff = differenceInTime % 60;
    
    if (minDiff === 0 || (minDiff < 10 && hourDiff > 0)) {
        minDiff = `0${minDiff}` ;
    }
    if (totalArrivalinMin === totalExamInMin) {
        console.log("On time");
    } else if (totalArrivalinMin > totalExamInMin && differenceInTime < 60) {
        console.log("Late");
        console.log(`${minDiff} minutes after the start`)
    } else if (totalArrivalinMin > totalExamInMin && differenceInTime >= 60) {
        console.log("Late");
        console.log(`${hourDiff}:${minDiff} hours after the start`) 
    } else if ( differenceInTime <= 30) {
        console.log("On time");
        console.log(`${minDiff} minutes before the start`)
    } else if (differenceInTime > 30 && differenceInTime < 60) {
        console.log("Early");
        console.log(`${minDiff} minutes before the start`)
    } else {
        console.log("Early");
        console.log(`${hourDiff}:${minDiff} hours before the start`)
    }

}
onTimeForTheExam(["9",
"30",
"9",
"50"])
