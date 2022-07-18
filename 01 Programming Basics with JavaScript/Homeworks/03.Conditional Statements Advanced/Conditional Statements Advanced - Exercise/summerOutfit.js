function summerOutfit(input) {
    const degree = Number(input[0]);
    const timeOfDay = input[1];

    let outfit = "";
    let shoes = "";
    
    if (degree >= 10 && degree <= 18) {
        if (timeOfDay === "Morning") {
            outfit = "Sweatshirt"
            shoes = "Sneakers"
        } else if (timeOfDay === "Afternoon" || timeOfDay === "Evening") {
            outfit = "Shirt"
            shoes = "Moccasins"
        }
    } else if ( degree > 18 && degree <=24) {
        if (timeOfDay === "Morning" || timeOfDay === "Evening") {
            outfit = "Shirt"
            shoes = "Moccasins"
        } else if (timeOfDay === "Afternoon") {
            outfit = "T-Shirt"
            shoes = "Sandals"
        } 
    } else if (degree >= 25) {
        if(timeOfDay === "Morning") {
            outfit = "T-Shirt"
            shoes = "Sandals"
        } else if(timeOfDay === "Afternoon") {
            outfit = "Swim Suit"
            shoes = "Barefoot"
        } else if(timeOfDay === "Evening") {
            outfit = "Shirt"
            shoes = "Moccasins"
        }
    }
    console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`)
}
summerOutfit(["16",
"Morning"])
