function sumNumbers(input) {
    let index = 0;
    let num = Number(input[index]);
    index++;
    let num1 = 0;

    while(num1 < num) {
        let sum = Number(input[index]);
        index++;
        num1 += sum;

    }
    console.log(num1)
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
