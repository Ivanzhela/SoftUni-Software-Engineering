function equalPairs(input) {
let index = 0
let count = Number(input[index]);
index++;
let a = Number(input[index]);
index++;
let b = Number(input[index]);
index++;
let sum = a + b;
let value = true;
let maxDiff = 0;

for(let i = 1; i <= count; i++) {

    if(sum === a + b) {
        sum = a + b
    } else {

        let diff = Math.abs(sum - (a + b))
        if(diff > maxDiff) {
            maxDiff = diff
        }
        sum = a + b
        value = false;
    }
    a = Number(input[index]);
    index++;
    b = Number(input[index]);
    index++;
}

if(value) {
    console.log(`Yes, value=${sum}`)
} else {
    console.log(`No, maxdiff=${maxDiff}`)
}
}
equalPairs(["4","1","1","3","1","2","2","0","0"])