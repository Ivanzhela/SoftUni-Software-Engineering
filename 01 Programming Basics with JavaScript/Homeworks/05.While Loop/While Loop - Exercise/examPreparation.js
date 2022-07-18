function examPreparation(input) {
    let index = 0;
    let countOfBadGrades = Number(input[index]);
    index++;
    let nameOfTask = input[index];
    let avarageScore = 0;
    let allProbllems = 0;
    let poorGrades = 0;
    let lastProblem = "";
    while(nameOfTask !== "Enough" ) {
        lastProblem = nameOfTask = input[index];
        allProbllems++;
        index++;
        let evaluation = Number(input[index]);
        avarageScore += evaluation;
        if(evaluation <= 4){
            poorGrades++;
        }
        if(poorGrades >= countOfBadGrades) {
            console.log(`You need a break, ${poorGrades} poor grades.`)
            break;
        }
        index++;
        nameOfTask = input[index];
    }
    
    let avgGrade = (avarageScore / allProbllems).toFixed(2)

    if(nameOfTask === "Enough") {
        console.log(`Average score: ${avgGrade}`)
        console.log(`Number of problems: ${allProbllems}`);
        console.log(`Last problem: ${lastProblem}`)
    }
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


