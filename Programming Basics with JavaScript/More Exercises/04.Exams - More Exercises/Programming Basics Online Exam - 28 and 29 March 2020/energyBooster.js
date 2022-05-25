function energyBooster(input) {
let plodove = input[0];
let razmer = input[1];
let broi = Number(input[2]);
let sum = 0;

switch(plodove) {
    case "Watermelon" :
        if(razmer === "small") {
            sum = 56;
            sum *= 2;
        } else {
            sum = 28.70;
            sum *= 5;
        }
        break;
    case "Mango" :
        if(razmer === "small") {
            sum = 36.66;
            sum *= 2;
        } else {
            sum = 19.60;
            sum *= 5;
        }
        break;
    case "Pineapple" :
        if(razmer === "small") {
            sum = 42.10;
            sum *= 2;
        } else {
            sum = 24.80;
            sum *= 5;
        }
        break;
    case "Raspberry" :
        if(razmer === "small") {
            sum = 20;
            sum *= 2;
        } else {
            sum = 15.20;
            sum *= 5;
        }
        break;
    }
    let obshtaSuma = sum * broi;
    if(obshtaSuma >= 400 && obshtaSuma <= 1000) {
        obshtaSuma = obshtaSuma - (obshtaSuma * 0.15)
    } else if(obshtaSuma > 1000) {
        obshtaSuma = obshtaSuma - (obshtaSuma * 0.50)
    }
    console.log(`${obshtaSuma.toFixed(2)}lv.`)

}
energyBooster(["Pineapple",
"small",
"1"])
