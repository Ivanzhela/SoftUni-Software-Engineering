function hospital(input){
let index = 0;
let period = Number(input[index]);
index++;
let broiPacienti = Number(input[index])
index++;
let lekari = 7;
let pregledani = 0;
let nepregledani = 0;

for(let i = 1; i <= period; i++) {
    if(i % 3 === 0) {
        if(nepregledani > pregledani) {
            lekari += 1;
        }
    }
    if(broiPacienti <= lekari) {
        pregledani += broiPacienti;
    } else {
        pregledani += lekari;
        let ostanaliPacienti = broiPacienti - lekari;
        nepregledani += ostanaliPacienti;
    }
    broiPacienti = Number(input[index]);
    index++;
}
console.log(`Treated patients: ${pregledani}.`);
console.log(`Untreated patients: ${nepregledani}.`)
}
hospital(["4","7","27","9","1"])