function fitnessCard(input) {
    let suma = Number(input[0]);
    let pol = input[1];
    let vuzrast = Number(input[2]);
    let sport = input[3];
    let sum = 0;

    switch(sport) {
        case "Gym" :
            if(pol === "m") {
                sum = 42;
            } else{
                sum = 35;
            } 
        break;
        case "Boxing" :
            if(pol === "m") {
                sum = 41;
            } else{
                sum = 37;
            } 
        break;
        case "Yoga" :
            if(pol === "m") {
                sum = 45;
            } else{
                sum = 42;
            } 
        break;
        case "Zumba" :
            if(pol === "m") {
                sum = 34;
            } else{
                sum = 31;
            } 
        break;
        case "Dances" :
            if(pol === "m") {
                sum = 51;
            } else{
                sum = 53;
            } 
        break;
        case "Pilates" :
            if(pol === "m") {
                sum = 39;
            } else{
                sum = 37;
            } 
        break;
    }
    if (vuzrast <= 19) {
        sum = sum - (sum * 0.20);
    }
    if (suma >= sum) {
        console.log(`You purchased a 1 month pass for ${sport}.`)
    } else {
        let neobhodimaSuma = sum - suma;
        console.log(`You don't have enough money! You need $${neobhodimaSuma.toFixed(2)} more.`)
    }
}
fitnessCard(["20",
"f",
"15",
"Yoga"])

