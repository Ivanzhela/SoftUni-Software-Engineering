function logistics(input) {
let index = 0;
let broiTovari = Number(input[index]);
index++;
let ton = Number(input[index]);
index++;
let cena = 0;
let mikrobus = 0;
let kamion = 0;
let vlak = 0;
let obshtoTona = 0;


for(let i = 1; i <= broiTovari; i++) {
    obshtoTona += ton;
    if(ton <= 3) {
        mikrobus += ton;
        ton *= 200;
        cena += ton;
    } else if( ton >= 4 && ton <= 11) {
        kamion += ton;
        ton *= 175;
        cena += ton;
    } else {
        vlak += ton;
        ton *= 120;
        cena += ton;
    }

    ton = Number(input[index]);
    index++;
}
cena /= obshtoTona;
console.log(cena.toFixed(2));
console.log(((mikrobus / obshtoTona * 100).toFixed(2)) + "%")
console.log(((kamion / obshtoTona * 100).toFixed(2)) + "%")
console.log(((vlak / obshtoTona * 100).toFixed(2)) + "%")

}
logistics(["4","1","5","16","3"])