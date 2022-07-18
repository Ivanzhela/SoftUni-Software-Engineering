function rounding(num1, num2) {
    let num = Number(num1)
    let num3 = Number(num2);
    if (num3 > 15) {
        num3 = 15
    }
    let num4 = num.toFixed(num3);
    let num5 = parseFloat(num4)
console.log(num5)
}
rounding(3.1415926535897932384626433832795,2)