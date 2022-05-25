function numbersDivisibleBy9(input) {
    const n1 = Number(input[0]);
    const n2 = Number(input[1]);

    let sum = 0;

    for (let i = n1; i <= n2; i++){
        if(i % 9 === 0) {
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`)
    for (let i = n1; i <= n2; i++) {
        if(i % 9 === 0) {
            console.log(i)
        }
    }
}
numbersDivisibleBy9(["100", "200"])