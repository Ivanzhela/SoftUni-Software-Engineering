function grades(input) {
let index = 0;
let broiStudenti = Number(input[index]);
index++;
let ocenka = Number(input[index]);
index++;
let obshtUspeh = 0;
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;

for(let i = 1; i <= broiStudenti; i++) {
    if(ocenka >= 5) {
        a++;
    } else if(ocenka >= 4 && ocenka <= 4.99) {
        b++;
    } else if(ocenka >= 3 && ocenka <= 3.99) {
        c++;
    } else if(ocenka < 3) {
        d++;
    }
    obshtUspeh += ocenka;
    ocenka = Number(input[index]);
    index++;
}
console.log(`Top students: ${(a / broiStudenti * 100).toFixed(2)}%`)
console.log(`Between 4.00 and 4.99: ${(b / broiStudenti * 100).toFixed(2)}%`)
console.log(`Between 3.00 and 3.99: ${(c / broiStudenti * 100).toFixed(2)}%`)
console.log(`Fail: ${(d / broiStudenti * 100).toFixed(2)}%`)
console.log(`Average: ${(obshtUspeh / broiStudenti).toFixed(2)}`)
}
grades(["6",
    "2",
    "3",
    "4",
    "5",
    "6",
    "2.2"
    ])