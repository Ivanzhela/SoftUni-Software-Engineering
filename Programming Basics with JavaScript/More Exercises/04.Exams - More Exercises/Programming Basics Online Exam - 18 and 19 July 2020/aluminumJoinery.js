function aluminumJoinery(input) {
    let countWindows = Number(input[0]);
    let typeWindows = input[1];
    let delivery = input[2];
    let windowPrice = 0;
    let order = true;
    
    if(countWindows < 10) {
        order = false;
        console.log("Invalid order")
    }
    
    switch(typeWindows) {
        case "90X130" : 
        windowPrice = 110;
        if(countWindows > 60) {
            windowPrice *= 0.92;
        } else if(countWindows > 30) {
            windowPrice *= 0.95;
        }
        break;
        case "100X150" :
            windowPrice = 140;
            if(countWindows > 80) {
                windowPrice *= 0.90;
            } else if(countWindows > 40) {
                windowPrice *= 0.94;
            }
        break;
        case "130X180" :
            windowPrice = 190;
            if(countWindows > 50) {
                windowPrice *= 0.88;
            } else if(countWindows > 20) {
                windowPrice *= 0.93;
            }
        break;
        case "200X300" :
            windowPrice = 250;
            if(countWindows > 50) {
                windowPrice *= 0.86;
            } else if( countWindows > 25) {
                windowPrice *= 0.91;
            }
        break;
        } 
        if(order === true) {
            let sum = countWindows * windowPrice;
            if(delivery === "With delivery") {
                sum += 60;
            }
            if(countWindows > 99) {
            sum *= 0.96;
            }
        console.log(`${sum.toFixed(2)} BGN`)
        }
}
aluminumJoinery(["105",
"100X150",
"With delivery"])



