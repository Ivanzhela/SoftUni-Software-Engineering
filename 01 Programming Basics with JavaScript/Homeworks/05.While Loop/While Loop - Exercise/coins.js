function coins(input) {
    let sum = Number(input[0]);
    let convert = parseInt(sum * 100);
    let coin = 0;

    while(convert > 0) {
        if(convert - 200 >= 0) {
            coin++;
            convert -= 200;
        } else if(convert - 100 >= 0) {
            coin++;
            convert -= 100;
        } else if(convert - 50 >= 0) {
            coin++;
            convert -= 50;
        } else if(convert - 20 >= 0) {
            coin++;
            convert -= 20;
        } else if(convert - 10 >= 0) {
            coin++;
            convert -= 10;
        } else if (convert - 5 >= 0) {
            coin++;
            convert -= 5;
        } else if (convert - 2 >= 0) {
            coin++;
            convert -= 2;
        } else if (convert - 1 >= 0) {
            coin++;
            convert -= 1;
        }
    }
    console.log(coin)
}
coins(["2"])