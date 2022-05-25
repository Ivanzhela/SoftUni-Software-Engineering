function godzillaVsKong(input) {

const budget = Number(input[0]);
const extrasCount = Number(input[1]);
const clothesPrice = Number(input[2]);

const decorForFilm = budget * 0.10;
let clothesForExtras = extrasCount * clothesPrice;
if (extrasCount >= 150) {
    clothesForExtras = clothesForExtras - (clothesForExtras * 0.10);
}

let priceForDecorAndClothes = decorForFilm + clothesForExtras;
let diference = Math.abs(priceForDecorAndClothes - budget);
if (priceForDecorAndClothes > budget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${diference.toFixed(2)} leva more.`);
}
if (priceForDecorAndClothes <= budget) {
    console.log("Action!");
    console.log(`Wingard starts filming with ${diference.toFixed(2)} leva left.`)
}
}
godzillaVsKong(["15437.62",
"186",
"57.99"])
