function oscarsCeremony(input) {
    let naemNaZala = Number(input[0]);

    let statuetki = naemNaZala * 0.70;
    let keturing = statuetki * 0.85;
    let ozvuchavane = keturing / 2;

    let obshto = naemNaZala + statuetki + keturing + ozvuchavane;

    console. log(obshto.toFixed(2))
}
oscarsCeremony(["3500"])