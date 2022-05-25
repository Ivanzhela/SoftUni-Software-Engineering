function profit(input) {
let countOneCoun = Number(input[0]);
let countTwoCoun = Number(input[1]);
let countFiveLv = Number(input[2]);
let sum = Number(input[3]);

for(let a = 0; a <= countOneCoun; a++){
    for(let b = 0; b <= countTwoCoun; b++) {
        for(let c = 0; c <= countFiveLv;c++) {
            let one = a * 1;
            let two = b * 2;
            let five = c * 5
            if( one + two + five === sum) {
                console.log(`${a} * 1 lv. + ${b} * 2 lv. + ${c} * 5 lv. = ${sum} lv.`)
            }
        }
    }
}

}
profit(["5","3","1","7"])