function triangleOfNumbers(num) {
    
for(let i = 1; i <= num; i++) {
    let prinLine = "";
    for(let o = 0; o < i; o++) {
        prinLine += "" + i + " "
    }
    console.log(prinLine)
}
}
triangleOfNumbers(3)