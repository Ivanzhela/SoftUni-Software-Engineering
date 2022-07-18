function trainTheTrainers(input) {
    let index = 0;
    let countOfJuru = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let countOfGrade = 0;
    let avgGrade = 0;
    while( command !== "Finish") {
        countOfGrade++;
        let presentacion = command;
        let tempAvgGrade = 0;
        for(let i = 0; i < countOfJuru;i++) {
            let tempGrade = Number(input[index]);
            index++;
            tempAvgGrade += tempGrade;
        }
        tempAvgGrade = tempAvgGrade / countOfJuru;
        let presentacionRulst = `${presentacion} - ${tempAvgGrade.toFixed(2)}.`;
        console.log(presentacionRulst)
        avgGrade += tempAvgGrade;
        command = input[index];
        index++
    }
    avgGrade = avgGrade / countOfGrade;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`)
}
trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
