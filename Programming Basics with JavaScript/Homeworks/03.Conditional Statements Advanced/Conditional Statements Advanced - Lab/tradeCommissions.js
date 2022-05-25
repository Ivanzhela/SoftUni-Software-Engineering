function tradeCommissions(input) {
    const city = input[0];
    const sales = Number(input[1]);
    let comissions = 0;

    if (city === "Sofia") {
        if (sales >= 0 && sales <= 500) {
            comissions = sales * 0.05;
            console.log(comissions.toFixed(2))
        } else if (sales > 500 && sales <= 1000) {
            comissions = sales * 0.07;
            console.log(comissions.toFixed(2))
        } else if (sales > 1000 && sales <= 10000){
            comissions = sales * 0.08;
            console.log(comissions.toFixed(2))
        } else if (sales > 10000) {
            comissions = sales * 0.12;
            console.log(comissions.toFixed(2))
        } else if (sales < 0) {
            console.log("error")
        } 
        
    } else if (city === "Varna") {
        if (sales >= 0 && sales <= 500) {
            comissions = sales * 0.045;
            console.log(comissions.toFixed(2))
        } else if (sales > 500 && sales <= 1000) {
            comissions = sales * 0.075;
            console.log(comissions.toFixed(2))
        } else if (sales > 1000 && sales <= 10000) {
            comissions = sales * 0.1;
            console.log(comissions.toFixed(2))
        } else if (sales > 10000) {
            comissions = sales * 0.13;
            console.log(comissions.toFixed(2))
        } else if (sales < 0) {
            console.log("error")
        } 
        
    } else if (city === "Plovdiv") {
        if (sales >= 0 && sales <= 500) {
            comissions = sales * 0.055;
            console.log(comissions.toFixed(2))
        } else if (sales > 500 && sales <= 1000) {
            comissions = sales * 0.08;
            console.log(comissions.toFixed(2))
        } else if (sales > 1000 && sales <= 10000) {
            comissions = sales * 0.12;
            console.log(comissions.toFixed(2))
        } else if (sales > 10000) {
            comissions = sales * 0.145;
            console.log(comissions.toFixed(2))
        } else if (sales < 0) {
            console.log("error")
        } 
        
    } else {
        console.log("error")

    }
}
tradeCommissions(["Sofia",
"-10"])
