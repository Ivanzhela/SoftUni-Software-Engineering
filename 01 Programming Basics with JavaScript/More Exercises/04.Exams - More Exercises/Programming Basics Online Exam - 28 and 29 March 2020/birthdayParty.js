function birthdayParty(input){
    let zala = Number(input);
    let torta = zala * 0.20;
    let napitki = torta - (torta * 0.45);
    let animator = zala / 3;
    let cena = zala + torta + napitki + animator;
    console.log(cena)
}
birthdayParty(2250)