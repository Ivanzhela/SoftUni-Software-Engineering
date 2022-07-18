function vetParking(input) {
let dayCounter = Number(input[0]);
let hours = Number(input[1]);
let totalSum = 0


for(let a = 1; a <= dayCounter; a ++) {
    let sum = 0;
    for(let b = 1; b <= hours; b ++) {
        if(a % 2 === 0 && b % 2 === 1) {
            sum += 2.50;
        } else if( a % 2 === 1 && b % 2 === 0) {
            sum += 1.25;
        } else {
            sum += 1
        }
    }
    console.log(`Day: ${a} - ${sum.toFixed(2)} leva`);
    totalSum += sum;
}
console.log(`Total: ${totalSum.toFixed(2)} leva`)
}
vetParking(["5", "2"])