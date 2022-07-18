function workingHours(input) {
    let workingTime = Number(input[0]);
    const day = input[1];

    if (workingTime >= 10 && workingTime <= 18) {
        switch(day) {
            case "Monday" : 
            case "Tuesday" :
            case "Wednesday" :
            case "Thursday" :
            case "Friday" : 
            case "Saturday" : console.log("open"); break;
            case "Sunday" : console.log("closed"); break;
        }
    } else {
        console.log("closed")
    }
}
workingHours(["2",
"Sunday"])
