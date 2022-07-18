function hotelRoom(input) {
    const month = input[0];
    const countOvernight = Number(input[1]);
    let studio = "";
    let apartment = "";
    if(month === "May" || month === "October") {
        studio = 50;
        apartment = 65;
        if(countOvernight > 7 && countOvernight <= 14){
            studio = studio - (studio * 0.05);
        } else if(countOvernight >= 14) {
            studio = studio - (studio * 0.30);
            apartment = apartment - (apartment * 0.10);
        }
    } else if(month === "June" || month === "September") {
        studio = 75.20;
        apartment = 68.70;
        if (countOvernight > 14) {
            studio = studio - ( studio * 0.20);
            apartment = apartment - (apartment * 0.10);
        }
    } else {
        studio = 76;
        apartment = 77;
        if(countOvernight > 14) {
            apartment = apartment - (apartment * 0.10);
        }
    }
    let finalPriceForStudio = countOvernight * studio;
    let finalPriceForApartment = countOvernight * apartment;
    console.log(`Apartment: ${finalPriceForApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${finalPriceForStudio.toFixed(2)} lv.`)
}
hotelRoom(["August",
"20"])

