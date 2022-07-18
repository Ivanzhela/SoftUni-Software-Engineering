function solve6(input) {
let k = Number(input[0]);
let l = Number(input[1]);
let m = Number(input[2]);
let n = Number(input[3]);
let logg = 0;
for(let a = k; a <= 8; a++){
    for(let b = 9; b >= l; b--){
        for(let c = m; c <= 8; c++) {
            for(let d = 9; d >= n; d-- ) {
                if(a % 2 === 0 && b % 2 === 1 && c % 2 === 0 && d % 2 === 1) {
                    if( a === c && b === d) {
                        console.log("Cannot change the same player.");
                    } else {
                        if(logg >= 6 ) {
                            break
                        }
                        logg++
                        console.log(`${a}${b} - ${c}${d}`)
                    }
                }
            }
        }
    }
}
}
solve6(["7",
"6",
"8",
"5"])
