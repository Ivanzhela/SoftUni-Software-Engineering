function leapYear(num) {
    if(num % 4 === 0 ) {
        if(num % 100 === 0 && num % 400 === 0) {
        console.log("yes") 
        } else if (num % 100 === 0) {
            console.log("no")
        } else {
            console.log("yes")
        }
    } else {
        console.log("no")
    }
}
leapYear(1900)