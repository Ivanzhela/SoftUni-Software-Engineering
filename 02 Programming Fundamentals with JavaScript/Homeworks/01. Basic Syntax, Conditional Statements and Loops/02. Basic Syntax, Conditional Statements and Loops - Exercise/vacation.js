function vacation(group, type, day) {
    let totalPrice = 0;
    switch(type) {
        case "Students" :
            switch(day) {
                case "Friday": totalPrice = 8.45; break;
                case "Saturday": totalPrice = 9.80; break;
                case "Sunday": totalPrice = 10.46; break;
            }totalPrice *= group;
            if(group >= 30) {
                totalPrice -= (totalPrice * 15 / 100)
            }break;
        case "Business" :
            switch(day) {
                case "Friday": totalPrice = 10.90; break;
                case "Saturday": totalPrice = 15.60; break;
                case "Sunday": totalPrice = 16; break;
            }
            if(group >= 100) {
                totalPrice *= (group - 10)
            } else {
                totalPrice *= group
            }break;
        case "Regular" :
            switch(day) {
                case "Friday": totalPrice = 15; break;
                case "Saturday": totalPrice = 20; break;
                case "Sunday": totalPrice = 22.50; break;
            }totalPrice *= group;
            if(group >= 10 && group <= 20) {
                totalPrice -= (totalPrice * 5 / 100)
            }break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
vacation(40,
    "Regular",
    "Saturday"
    )
