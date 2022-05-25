function backToThePast(input) {
let ivanchoAge = 18;
let year = 1800;
let sum = 0;
let money = Number(input[0]);
let yearTolive = Number(input[1]);

for(let a = year; a <= yearTolive;a++) {
    if(a % 2 === 0) {
        money -= 12000;
    } else if( a % 2 === 1) {
        money -= (12000 + (50 * ivanchoAge)) 
    }
    ivanchoAge++;

}
if(money >= 0) {
    console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`)
} else {
    money = Math.abs(money);
    console.log(`He will need ${money.toFixed(2)} dollars to survive.`)
}
}
backToThePast(["5000","1802"])