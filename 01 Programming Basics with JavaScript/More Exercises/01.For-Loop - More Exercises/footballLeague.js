function footballLeague(input) {
    let index = 0;
    let seats = Number(input[index]);
    index++;
    let fans = Number(input[index]);
    index++;
    let sector = input[index];
    index++;
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    for(let i = 1; i <= fans; i++) {
        if(sector === "A") {
            a++;
        } else if(sector === "B") {
            b++;
        } else if(sector === "V") {
            c++;
        } else {
            d++
        }
        sector = input[index];
        index++;
    }
    
    console.log((a / fans * 100).toFixed(2) + "%");
    console.log((b / fans * 100).toFixed(2) + "%");
    console.log((c / fans * 100).toFixed(2) + "%");
    console.log((d / fans * 100).toFixed(2) + "%");
    console.log(((a + b + c + d) / seats * 100).toFixed(2) + "%")

}
footballLeague(["76","10","A","V","V","V","G","B","A","V","B","B"])