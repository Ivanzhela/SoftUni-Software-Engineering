function login(input) {
    let index = 0;
    let pass = input[index];
    index++;
    let printLine = "";
    let counter = 0;

    for(let i = pass.length-1; i >=0;i--) {
        printLine += pass[i];
    }
    while(input[index] !== printLine) {

        counter++;
        if(counter === 4) {
            console.log(`User ${pass} blocked!`)
            return;
        } else {
            console.log(`Incorrect password. Try again.`)
        }
        index++;
    }
    if (input[index] === printLine) {
        console.log(`User ${pass} logged in.`);
    }

}
    login(['Acer','login','go','let me in','recA'])