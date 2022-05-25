function skiTrip(input) {
    let roomForOnePerson = 18;
    let apartment = 25;
    let presidentApartment = 35;
    let finalPrice = 0;
    let days = Number(input[0]);
    const typeOfRoom = input[1];
    const evaluation = input[2];
    let daysOfStay = days - 1;

    if(daysOfStay < 10) {
        if(typeOfRoom === "room for one person") {
            finalPrice = (daysOfStay * roomForOnePerson).toFixed(2)
        } else if(typeOfRoom === "apartment") {
            finalPrice = (daysOfStay * apartment - ((daysOfStay * apartment) * 0.30)).toFixed(2)
        } else if (typeOfRoom === "president apartment") {
            finalPrice = (daysOfStay * presidentApartment - ((daysOfStay * presidentApartment) * 0.10)).toFixed(2)
        }

    } else if (daysOfStay >= 10 && daysOfStay <= 15) {
        if(typeOfRoom === "room for one person") {
            finalPrice = (daysOfStay * roomForOnePerson).toFixed(2);
        } else if(typeOfRoom === "apartment") {
            finalPrice = (daysOfStay * apartment - ((daysOfStay * apartment) * 0.35)).toFixed(2);
        } else if(typeOfRoom === "president apartment") {
            finalPrice = (daysOfStay * presidentApartment - ((daysOfStay * presidentApartment) * 0.15)).toFixed(2);
        }
    } else if (daysOfStay > 15) {
        if(typeOfRoom === "room for one person") {
            finalPrice = (daysOfStay * roomForOnePerson).toFixed(2);
        } else if(typeOfRoom === "apartment") {
            finalPrice = (daysOfStay * apartment - ((daysOfStay * apartment) * 0.50)).toFixed(2);
        } else if (typeOfRoom === "president apartment") {
            finalPrice = (daysOfStay * presidentApartment - ((daysOfStay * presidentApartment) * 0.20)).toFixed(2);
        }
    }
    if (evaluation === "positive") {
        finalPrice = finalPrice * 1.25;
    } else {
        finalPrice = finalPrice * 0.90;
    }
    console.log(finalPrice.toFixed(2));
}
skiTrip(["14",
"apartment",
"positive"])