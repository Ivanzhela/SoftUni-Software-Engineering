function newHouse(input) {
    const nameOfFlowers = input[0];
    const countOfFlowers = Number(input[1]);
    const buget = Number(input[2]);
    
    const roses = 5;
    const dahlias = 3.80;
    const tulips = 2.80;
    const narcissus = 3;
    const gladiolus = 2.50;
    let finalPrice = 0;

    if (nameOfFlowers === "Roses") {
        if (countOfFlowers > 80) {
            finalPrice = (roses * countOfFlowers) - ((roses * countOfFlowers) * 0.10);
         } else if (countOfFlowers <= 80) {
             finalPrice = roses * countOfFlowers;
         }
    } else if (nameOfFlowers === "Dahlias") {
        if(countOfFlowers > 90) {
            finalPrice = (dahlias * countOfFlowers) - ((dahlias * countOfFlowers) * 0.15);
        } else if (countOfFlowers <= 90) {
            finalPrice = dahlias * countOfFlowers;
        }
    } else if ( nameOfFlowers === "Tulips") {
        if (countOfFlowers > 80) {
            finalPrice = (tulips * countOfFlowers) - ((tulips * countOfFlowers) * 0.15)
        } else if (countOfFlowers <= 80) {
            finalPrice = tulips * countOfFlowers;
        }
    } else if (nameOfFlowers === "Narcissus") {
        if(countOfFlowers < 120) {
            finalPrice = (narcissus * countOfFlowers) + ((narcissus * countOfFlowers) * 0.15)
        } else if(countOfFlowers >= 120) {
            finalPrice = narcissus * countOfFlowers;
        }
    } else if (nameOfFlowers === "Gladiolus") {
        if(countOfFlowers < 80) {
            finalPrice =  (gladiolus * countOfFlowers) + ((gladiolus * countOfFlowers) * 0.20);
        } else if (countOfFlowers >= 80) {
            finalPrice = gladiolus * countOfFlowers;
        }
    }
    let remainingPrice = Math.abs(buget - finalPrice);
    
    if (buget >= finalPrice) {
        console.log(`Hey, you have a great garden with ${countOfFlowers} ${nameOfFlowers} and ${remainingPrice.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${remainingPrice.toFixed(2)} leva more.`)
    }
    
}
newHouse(["Narcissus",
"120",
"360"])


