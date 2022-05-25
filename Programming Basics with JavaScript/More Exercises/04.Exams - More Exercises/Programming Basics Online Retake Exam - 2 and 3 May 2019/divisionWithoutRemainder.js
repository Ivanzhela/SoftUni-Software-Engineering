function divisionWithoutRemainder(input) {
let index = 0;
let n = Number(input[index]);
index++;
let p1= 0;
let p2 = 0;
let p3 = 0;
for(let a = 1; a <= n; a ++) {
    let number = Number(input[index]);
    index++;
    if(number % 2 === 0) {
        p1++;
    } 
    if(number % 3 === 0){
        p2++
    } 
    if(number % 4 === 0) {
        p3++;
    }
    

}
let procentOfP1 = p1 / n * 100;
let procentOfP2 = p2 / n * 100;
let procentOfP3 = p3 / n * 100;
console.log(`${procentOfP1.toFixed(2)}%`);
console.log(`${procentOfP2.toFixed(2)}%`);
console.log(`${procentOfP3.toFixed(2)}%`);
}
divisionWithoutRemainder(["3","3","6","9"])