function sequence2k1(input) {
    let n = Number(input[0]);
    let num = 1;
    while(num <= n) {
        console.log(num)
        num = 2 * num + 1;
    }
}
sequence2k1(["8"])