function fruitOrVegetable(input) {
    const nameOfProduct = input[0];

    switch(nameOfProduct) {
        case "banana" : 
        case "apple" :
        case "kiwi" :
        case "cherry" :
        case "lemon" :
        case "grapes" : console.log("fruit"); break;
        case "tomato" :
        case "cucumber" :
        case "pepper" : 
        case "carrot" : console.log("vegetable"); break;
        default : console.log("unknown"); break;
    }
    
}
fruitOrVegetable(["ban"])