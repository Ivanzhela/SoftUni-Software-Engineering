function changeBureau(input) {
    let broibitkoin = Number(input[0])
    let broiuana = Number(input[1])
    let komisionna = Number(input[2]);

    let bitkoin = 1168;
    let dolar = 1.76
    let una = dolar * 0.15;
    let evro = 1.95;

    let vsichkiBitkoini = broibitkoin * bitkoin;
    let vsichkiUana = broiuana * una;
    let obshto = vsichkiBitkoini + vsichkiUana;
    let obshtoVEvro = obshto / evro;
    let vsichkoSKomisionna = obshtoVEvro - (obshtoVEvro / 100 * komisionna);
    console.log(vsichkoSKomisionna.toFixed(2)) 
}
changeBureau(["1",
"5",
"5"])
