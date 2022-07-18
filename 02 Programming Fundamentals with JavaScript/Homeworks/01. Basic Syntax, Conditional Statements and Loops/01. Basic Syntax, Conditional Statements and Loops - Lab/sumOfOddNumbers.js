function sumOfOddNumbers(num) {
    let a = 1;
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        sum += a;
        console.log(a) 
        a += 2;
    }
    console.log(`Sum: ${sum}`)
}
sumOfOddNumbers(3)