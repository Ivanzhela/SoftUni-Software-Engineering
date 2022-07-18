function multiplicationTable(input) {
    const n = Number(input); 
    for (let i = 1; i <= 10; i++) {
        let result = n * i;
        console.log(`${i} * ${n} = ${result}`)
    }
}
multiplicationTable(["5"])