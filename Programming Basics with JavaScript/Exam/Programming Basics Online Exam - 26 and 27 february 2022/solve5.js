function solve5(input) {
let dostignataVisochina = 5364;
let dni = 1;
let index = 0;
let noshtuvka = input[index];
index++;
let izkacheniMetri = Number(input[index]);
index++;
let izkachil = false


while(noshtuvka !== "END") {
    if(dostignataVisochina > 8848) {
        izkachil = true
        console.log(`Goal reached for ${dni} days!`)
        break;
    }
    if(dni >= 5){
        break;
    }
    if(noshtuvka == "Yes") {
        dni++;
        dostignataVisochina += izkacheniMetri;
        noshtuvka = input[index];
        index++;
        izkacheniMetri = Number(input[index]);
        index++
        continue;
    } else {
        dostignataVisochina += izkacheniMetri
    noshtuvka = input[index];
    index++;
    izkacheniMetri = Number(input[index]);
    index++;
    }
}
if(izkachil == false) {
console.log(`Failed!`);
console.log(`${dostignataVisochina}`)


}
}
solve5(["Yes",
"1254",
"Yes",
"1402",
"No",
"250",
"Yes",
"635"])




