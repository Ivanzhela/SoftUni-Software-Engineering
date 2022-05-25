function solve4(input) {
let index = 0
let dniTren = Number(input[index]);
index++;
let kilometriPurviDen = Number(input[index]);
index++;
let obshtoKm = kilometriPurviDen;
let kmZaDen = kilometriPurviDen;

for(let i = 0 ; i < dniTren;i++) {
    
    let procent = Number(input[index]);
    index++;
    kmZaDen = kmZaDen + (kmZaDen * procent / 100);

    obshtoKm += kmZaDen
}
let razlika = Math.abs(obshtoKm - 1000);
if(obshtoKm >= 1000) {
    console.log(`You've done a great job running ${Math.ceil(razlika)} more kilometers!`)
} else {
    console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(razlika)} more kilometers`)
}

}
solve4(["4",
"100",
"30",
"50",
"60",
"80"])

