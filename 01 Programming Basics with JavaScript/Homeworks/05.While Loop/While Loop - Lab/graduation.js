function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let counter = 0;
    let i = 1;
    let sumGrade = 0;
    let isExcluded = false ;
    while(i <= 12) {
        let grade = Number(input[index]);
        index++;
    
        if(grade < 4.00) {
            counter++;
            if(counter > 1 ){
                isExcluded = true;
                console.log(`${name} has been excluded at ${i} grade`)
                break;
            }
            continue;
        }
        sumGrade += grade;
        i++;

    }
    if(!isExcluded) {
        let avgGrade = sumGrade / 12;
    console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`)
    }
}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"2",
"3",
"5.43",
"5"])
