function bills(input) {
let water = 20;
let internet = 15;
let other = 0;
let index = 0;
let bills = Number(input[index]);
index++;
let electric = Number(input[index]);
index++;
let allElectric = 0

for(let i = 1; i <= bills; i++) {
    allElectric += electric;
    other += (electric + 20 + 15) + ((electric + 20 + 15) * 0.20)
    electric = Number(input[index]);
    index++;
}

console.log(`Electricity: ${allElectric.toFixed(2)} lv`);
console.log(`Water: ${(water * bills).toFixed(2)} lv`);
console.log(`Internet: ${(internet * bills).toFixed(2)} lv`);
console.log(`Other: ${other.toFixed(2)} lv`);
console.log(`Average: ${((allElectric + (water * bills) + (internet * bills) + other) / bills).toFixed(2)} lv`)
}
bills(["5","68.63","89.25","132.53","93.53","63.22"])