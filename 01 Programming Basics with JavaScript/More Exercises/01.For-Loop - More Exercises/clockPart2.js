function clockPart2() {
    for(let a = 0; a <= 23; a++) {
        for(let b = 0; b <= 59; b ++){
            for(let c = 0; c <= 59; c++) {
                console.log(`${a} : ${b} : ${c} `)
            }
        }
    }
}
clockPart2()