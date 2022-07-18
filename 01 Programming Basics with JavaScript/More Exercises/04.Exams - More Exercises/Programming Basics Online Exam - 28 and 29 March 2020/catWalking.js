function catWalking(input) {
let kalorii = 5;
let minutiRazhodka = Number(input[0]);
let broiRazhodki = Number(input[1]);
let prietiKalorii = Number(input[2]);

let izgoreniKalorii = minutiRazhodka * kalorii;
let obshtoKalorii = izgoreniKalorii * broiRazhodki;

let polovinata = prietiKalorii / 2;
if(obshtoKalorii >= polovinata) {
    console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${obshtoKalorii}.`)
} else {
    console.log(`No, the walk for your cat is not enough. Burned calories per day: ${obshtoKalorii}.`)
}
}
catWalking(["30",
"3",
"600"])
