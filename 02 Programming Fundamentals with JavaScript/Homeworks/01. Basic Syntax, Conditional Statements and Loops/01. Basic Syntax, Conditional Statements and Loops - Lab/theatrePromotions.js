function theatrePromotions(day,age) {
    let price = 0;
    if(age >= 0 && age <= 18) {
        switch(day) {
            case "Weekday" : console.log("12$");break;
            case "Weekend" : console.log("15$");break;
            case "Holiday" : console.log("5$");break;
        }
    } else if(age > 18 && age <= 64) {
        switch(day) {
            case "Weekday" : console.log("18$");break;
            case "Weekend" : console.log("20$");break;
            case "Holiday" : console.log("12$");break;
        }
    } else if(age > 64 && age <= 122) {
        switch(day) {
            case "Weekday" : console.log("12$");break;
            case "Weekend" : console.log("15$");break;
            case "Holiday" : console.log("10$");break;
        }
    } else {
        console.log("Error!")
    }
}
theatrePromotions('Weekday', 
42
)