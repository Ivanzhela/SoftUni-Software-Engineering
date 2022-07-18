function bonusScore(input) {
const point = Number(input[0]);
let bonus = 0.0;
if (point <= 100) {
    bonus = 5;
} else if (point > 1000) {
    bonus = point * 0.1;
} else {
    bonus = point * 0.2;
}
if (point % 2 === 0) {
    bonus += 1;
} else if (point % 10 === 5) {
    bonus += 2;
}
console.log(bonus);
console.log(bonus + point);

}
bonusScore(["20"])