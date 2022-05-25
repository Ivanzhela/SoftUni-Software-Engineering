function multiplicationTable(solve) {
    for(let i = 1;i <= 10;i++) {
        for(let o = 1;o <= 10;o++) {
            let rezult = i * o;
            console.log(`${i} * ${o} = ${rezult}`)
        }
    }
}
multiplicationTable()