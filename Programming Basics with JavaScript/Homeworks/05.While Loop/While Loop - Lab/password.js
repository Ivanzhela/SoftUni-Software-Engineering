function password(input) {
    let index = 0;
    let name = input[index];
    index++;
    let pass = input[index];
    index++;
    let randompass = 0;

    while(pass !== randompass) {
        randompass = input[index];
        index++;
    }
    if(pass === randompass) {
        console.log(`Welcome ${name}!`)
    }
}
password(["Gosho",
"secret",
"secret"])

